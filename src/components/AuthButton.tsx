import { LogIn, LogOut, UserRound } from "lucide-react";
import type { User } from "firebase/auth";
import { loginWithGoogle, logout } from "../lib/firebase";

type AuthButtonProps = {
  user: User | null;
  loading: boolean;
};

export function AuthButton({ user, loading }: AuthButtonProps) {
  if (loading) {
    return (
      <button className="icon-text-button" disabled type="button">
        <UserRound size={16} />
        <span>Syncing</span>
      </button>
    );
  }

  if (user) {
    return (
      <button className="icon-text-button signed-in" onClick={logout} type="button">
        {user.photoURL ? (
          <img src={user.photoURL} alt="" className="avatar" />
        ) : (
          <UserRound size={16} />
        )}
        <span>{user.displayName?.split(" ")[0] || "Signed in"}</span>
        <LogOut size={15} />
      </button>
    );
  }

  return (
    <button className="icon-text-button" onClick={loginWithGoogle} type="button">
      <LogIn size={16} />
      <span>Google</span>
    </button>
  );
}
