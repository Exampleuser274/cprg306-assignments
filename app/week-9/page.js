"use client";
// Part 5: landing page starts
// Import the useUserAuth hook
import Link from "next/link";
import { useUserAuth } from "./_utils/auth-context";

export default function Page() {
    // Use the useUserAuth hook to get the user object and the login and logout functions
    const { user, gitHubSignIn, firebaseSignOut } = useUserAuth();

    // Sign in to Firebase with GitHub authentication
    const handleSignIn = async () => {
    try {
      await gitHubSignIn();
    } catch (error) {
      console.error("Error signing in:", error);
    }
  };

    // Sign out of Firebase
    const handleSignOut = async () => {
    try {
      await firebaseSignOut();
    } catch (error) {
      console.error("Error signing out:", error);
    }
  };

    // Display some of the user's information
    return (
    <main className="min-h-screen p-6 bg-green-800">
      <h1 className="text-3xl text-gray-400 font-bold mb-6">Shopping List App</h1>

      {user ? (
        // Content shown when the user IS logged in
        <div className="space-y-4">
          <p className="text-lg text-gray-400">
            Welcome, <span className="font-semibold">{user.displayName}</span> ({user.email})
          </p>

          <div className="flex flex-col space-y-2 items-start">
            <Link
              href="/week-9/shopping-list"
              className="text-white hover:underline font-medium"
            >
              Continue to your Shopping List &rarr;
            </Link>

            <button
              onClick={handleSignOut}
              className="px-4 py-2 bg-gray-400 text-green-800 rounded hover:bg-white transition"
            >
              Sign Out
            </button>
          </div>
        </div>
      ) : (
        // Content shown when the user IS NOT logged in (user is null)
        <div>
          <p className="mb-4 text-gray-400">Please sign in with GitHub to access your shopping list.</p>
          <button
            onClick={handleSignIn}
            className="px-4 py-2 bg-gray-400 text-green-800 rounded hover:bg-white transition"
          >
            Sign in with GitHub
          </button>
        </div>
      )}
    </main>
  );
}

// Part 5: landing page ends