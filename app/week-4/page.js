import NewItem from "./new-item";

export default function Page() {
  return (
    <main className="bg-slate-100 p-8">
      <h1 className="text-4xl font-bold mb-6 text-blue-900 text-center">
        New Item
      </h1>

      <div className="flex justify-center">
        <NewItem />
      </div>
    </main>
  );
}