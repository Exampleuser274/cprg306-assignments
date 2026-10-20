export default function Item({ name, quantity, category }) {
  return (
    <li className="p-4 mb-3 bg-gray-200 rounded-lg">
      <h2 className="text-xl font-bold text-black">{name}</h2>
      <p className="text-gray-700">
        Buy {quantity} in {category}
      </p>
    </li>
  );
}