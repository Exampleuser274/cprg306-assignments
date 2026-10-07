import NewItem from "./new-item";

export default function Page() {
  return (
    <main className="p-4">
      <h1 className="text-2xl font-bold text-center">
        New Item
      </h1>

      <div className="flex justify-center">
        <NewItem />
      </div>
    </main>
  );
}