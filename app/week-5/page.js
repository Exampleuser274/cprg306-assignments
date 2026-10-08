import Link from "next/link";
import NewItem from "./new-item";

export default function Page() {
  return (
    <main className="mx-auto w-full max-w-2xl px-6 py-12">
      <Link href="/" className="text-teal-700 hover:underline dark:text-teal-300">
        Back to assignments
      </Link>
      <p className="mt-8 text-sm font-semibold">Week 5</p>
      <h1 className="mt-2 text-3xl font-bold">Shopping List</h1>
      <p className="mt-3 mb-6">Enter the details of your new item.</p>
      <NewItem />
    </main>
  );
}
