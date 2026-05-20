# Tirth Rank Portfolio

Firebase-powered portfolio website for Tirth Rank, built with React, Vite, Firebase Auth, Firestore, Firebase Hosting, Firebase AI Logic, and Firebase Storage upload hooks.

## Live Site

https://tirth-rank-portfolio.web.app

## Features

- Futuristic one-page portfolio layout for robotics, AI, GenAI, computer vision, and immersive systems work
- Google sign-in through Firebase Authentication
- Firebase AI Logic chatbot with a local portfolio-knowledge fallback
- Signed-in chat history stored in Firestore
- Contact form stored in Firestore
- Optional contact attachment upload path using Firebase Storage
- Dynamic public GitHub repository pulse
- Resume PDF hosted as a public asset

## Local Development

```bash
npm install
npm run dev
```

## Production

```bash
npm run build
firebase deploy --only hosting,firestore:rules --project tirth-rank-portfolio
```

Firebase Storage rules are included in `storage.rules`. The Firebase project must have Storage initialized in the Firebase Console before those rules can be deployed.
