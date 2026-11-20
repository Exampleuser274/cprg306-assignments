export default function Item({ name, quantity, category, onSelect }) {
  return (
    <li
      onClick={onSelect}
      onKeyDown={(event) => {
        if (event.key === "Enter" || event.key === " ") {
          event.preventDefault();
          onSelect();
        }
      }}
      role="button"
      tabIndex={0}
      className="p-4 mb-3 bg-gray-200 hover:bg-blue-100 rounded-lg cursor-pointer focus:outline-2 focus:outline-blue-900"
    >
      <h2 className="text-xl font-bold text-black">{name}</h2>
      <p className="text-gray-700">
        Buy {quantity} in {category}
      </p>
    </li>
  );
}
