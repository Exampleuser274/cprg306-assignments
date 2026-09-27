import Link from "next/link";
import NewItem from "./new-item";

// This page displays the interactive component defined in new-item.js.
export default function Page() {
  return (
    <main className="mx-auto max-w-2xl px-6 py-12 sm:py-16">
      <Link
        href="/"
        className="rounded text-sm font-semibold text-teal-700 hover:underline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-teal-700"
      >
        &larr; All assignments
      </Link>
      <p className="mt-10 text-sm font-bold uppercase tracking-widest text-teal-700">Week 04</p>
      <h1 className="mt-3 text-4xl font-bold tracking-tight">Shopping List</h1>
      <p className="mt-4 mb-8 text-slate-600">Start your next item by choosing how many you need.</p>
      
      {/* Call for NewItem function */}
      <NewItem />
    </main>
  );
}
