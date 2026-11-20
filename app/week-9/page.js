
"use client";

import Link from "next/link";
import { useRef, useState } from "react";
import { useUserAuth } from "./_utils/auth-context";

export default function Page() {
  const { user, gitHubSignIn, firebaseSignOut } = useUserAuth();

  const [isSigningIn, setIsSigningIn] = useState(false);
  const signInPending = useRef(false);

  // Sign in with GitHub and prevent duplicate login requests.
  const handleSignIn = async () => {
    if (signInPending.current) return;

    signInPending.current = true;
    setIsSigningIn(true);

    try {
      await gitHubSignIn();
    } catch (error) {
      if (error.code !== "auth/cancelled-popup-request") {
        console.error("Error signing in:", error);
      }
    } finally {
      signInPending.current = false;
      setIsSigningIn(false);
    }
  };

  // Sign out of Firebase.
  const handleSignOut = async () => {
    try {
      await firebaseSignOut();
    } catch (error) {
      console.error("Error signing out:", error);
    }
  };

  return (
    <main className="min-h-screen bg-slate-100 p-8">
      <div className="max-w-2xl mx-auto text-center">
        <h1 className="text-4xl font-bold text-blue-900 mb-6">
          Shopping List
        </h1>

        {user ? (
          <div>
            <p className="text-gray-800 mb-6">
              Welcome, {user.displayName || user.email}!
            </p>

            <div className="flex justify-center gap-4">
              <Link
                href="/week-9/shopping-list"
                className="bg-blue-900 text-white px-4 py-2 rounded"
              >
                Go to Shopping List
              </Link>

              <button
                onClick={handleSignOut}
                className="bg-red-600 text-white px-4 py-2 rounded"
              >
                Logout
              </button>
            </div>
          </div>
        ) : (
          <div>
            <p className="text-gray-700 mb-6">
              Sign in with GitHub to access your shopping list.
            </p>

            <button
              onClick={handleSignIn}
              disabled={isSigningIn}
              className="bg-blue-900 text-white px-4 py-2 rounded disabled:opacity-50 disabled:cursor-not-allowed"
            >
              {isSigningIn ? "Signing in..." : "Login with GitHub"}
            </button>
          </div>
        )}
      </div>
    </main>
  );
}
