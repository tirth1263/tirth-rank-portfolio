import { addDoc, collection, serverTimestamp } from "firebase/firestore";
import { getDownloadURL, ref, uploadBytes } from "firebase/storage";
import type { User } from "firebase/auth";
import { FormEvent, useState } from "react";
import { CheckCircle2, Loader2, Mail, Paperclip, Send } from "lucide-react";
import { profile } from "../data/portfolio";
import { db, storage } from "../lib/firebase";

type ContactProps = {
  user: User | null;
};

export function Contact({ user }: ContactProps) {
  const [status, setStatus] = useState<"idle" | "sending" | "sent" | "error">("idle");
  const [error, setError] = useState("");

  async function submitContact(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    setStatus("sending");
    setError("");

    const form = event.currentTarget;
    const data = new FormData(form);
    const file = data.get("attachment");
    let attachmentUrl = "";
    let attachmentName = "";

    try {
      if (file instanceof File && file.size > 0) {
        if (!user) {
          throw new Error("Please sign in with Google before attaching a file.");
        }
        attachmentName = file.name;
        const safeName = file.name.replace(/[^a-zA-Z0-9._-]/g, "-");
        const storageRef = ref(storage, `contactUploads/${user.uid}/${Date.now()}-${safeName}`);
        const upload = await uploadBytes(storageRef, file, {
          customMetadata: {
            originalName: file.name,
            uploadedBy: user.email || user.uid
          }
        });
        attachmentUrl = await getDownloadURL(upload.ref);
      }

      await addDoc(collection(db, "contactMessages"), {
        name: String(data.get("name") || "").trim(),
        email: String(data.get("email") || "").trim(),
        topic: String(data.get("topic") || "Portfolio inquiry").trim(),
        message: String(data.get("message") || "").trim(),
        attachmentUrl,
        attachmentName,
        uid: user?.uid || null,
        authProvider: user ? "google" : "anonymous",
        source: "portfolio-site",
        createdAt: serverTimestamp()
      });

      form.reset();
      setStatus("sent");
    } catch (caught) {
      setError(caught instanceof Error ? caught.message : "Message could not be sent right now.");
      setStatus("error");
    }
  }

  return (
    <section className="section contact-section" id="contact">
      <div className="contact-layout">
        <div className="contact-copy">
          <p className="eyebrow">Contact</p>
          <h2>Let us build the next intelligent system.</h2>
          <p>
            I am open to research collaborations, internships, AI/robotics roles, and product teams that need careful experimentation with real-world data.
          </p>
          <div className="contact-methods">
            <a href={`mailto:${profile.email}`}>
              <Mail size={18} />
              {profile.email}
            </a>
            <a href={profile.resume} target="_blank" rel="noreferrer">
              <Paperclip size={18} />
              Resume PDF
            </a>
          </div>
        </div>

        <form className="contact-form" onSubmit={submitContact}>
          <label>
            Name
            <input name="name" required minLength={2} maxLength={120} placeholder="Your name" />
          </label>
          <label>
            Email
            <input name="email" type="email" required maxLength={180} placeholder="you@example.com" />
          </label>
          <label>
            Topic
            <select name="topic" defaultValue="Portfolio inquiry">
              <option>Portfolio inquiry</option>
              <option>Research collaboration</option>
              <option>Internship or role</option>
              <option>Project discussion</option>
            </select>
          </label>
          <label>
            Message
            <textarea name="message" required minLength={12} maxLength={4000} placeholder="Tell me what you are working on." />
          </label>
          <label>
            Attachment
            <input name="attachment" type="file" />
          </label>
          {status === "error" && <p className="form-status error">{error}</p>}
          {status === "sent" && (
            <p className="form-status success">
              <CheckCircle2 size={16} />
              Message saved to Firebase.
            </p>
          )}
          <button className="primary-button" type="submit" disabled={status === "sending"}>
            {status === "sending" ? <Loader2 size={18} className="spin" /> : <Send size={18} />}
            <span>{status === "sending" ? "Sending" : "Send message"}</span>
          </button>
        </form>
      </div>
    </section>
  );
}
