export default function Item({name, quantity, category}) {
    return (
        <li className="rounded-2xl border border-emerald-900/70 bg-slate-900 p-5 shadow-lg shadow-black/10 transition hover:-translate-y-0.5 hover:border-emerald-600">
        <div className="flex items-start justify-between gap-4">
            <div>
            <h2 className="text-lg font-semibold capitalize text-slate-100">
                {name}
            </h2>
            <p className="mt-2 text-sm capitalize text-emerald-300">
                Category: {category}
            </p>
            </div>

            <span className="rounded-full bg-emerald-950 px-3 py-1 text-sm font-bold text-emerald-300 ring-1 ring-emerald-800">
            Qty: {quantity}
            </span>
        </div>
        </li>
    );
}