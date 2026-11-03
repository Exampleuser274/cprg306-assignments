export default function Item({ name, quantity, category, onSelect }) {
  return (
    <li
      onClick={onSelect}
      className="rounded-2xl border border-emerald-900/70 bg-slate-900 shadow-lg transition hover:border-emerald-600"
    >
      {/* A button lets keyboard users select an item too. Its click bubbles to li. */}
      <button type="button" className="w-full rounded-2xl p-5 text-left focus-visible:outline-2 focus-visible:outline-emerald-400">
        <div className="flex items-start justify-between gap-4">
          <div>
            <h2 className="text-lg font-semibold capitalize text-slate-100">{name}</h2>
            <p className="mt-2 text-sm capitalize text-emerald-300">Category: {category}</p>
          </div>
          <span className="rounded-full bg-emerald-950 px-3 py-1 text-sm font-bold text-emerald-300">
            Qty: {quantity}
          </span>
        </div>
      </button>
    </li>
  );
}
