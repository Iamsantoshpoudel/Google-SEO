import { getApp, getApps, initializeApp } from "firebase/app";
import { getFirestore, type Firestore } from "firebase/firestore";

// Each variable must be referenced literally so Next.js can inline it.
const config = {
  apiKey: process.env.NEXT_PUBLIC_FIREBASE_API_KEY,
  authDomain: process.env.NEXT_PUBLIC_FIREBASE_AUTH_DOMAIN,
  projectId: process.env.NEXT_PUBLIC_FIREBASE_PROJECT_ID,
  storageBucket: process.env.NEXT_PUBLIC_FIREBASE_STORAGE_BUCKET,
  messagingSenderId: process.env.NEXT_PUBLIC_FIREBASE_MESSAGING_SENDER_ID,
  appId: process.env.NEXT_PUBLIC_FIREBASE_APP_ID,
};

/** Returns Firestore, or null when the env variables are not set. */
export function getDb(): Firestore | null {
  if (!config.apiKey || !config.projectId) return null;
  return getFirestore(getApps().length ? getApp() : initializeApp(config));
}

export const utcDay = (d = new Date()) => d.toISOString().slice(0, 10);
