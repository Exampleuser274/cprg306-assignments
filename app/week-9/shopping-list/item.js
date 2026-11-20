function Item({ item, onSelect }) {

    const { name, quantity, category } = item;

  return (
    <li>
      <div 
        onClick={ onSelect }
        className="flex flex-col justify-between items-center p-2 max-w-xs mx-auto bg-gray-400 shadow-md rounded-xl mb-3">
          <p className="font-semibold text-white">{name}</p>
          <p className="text-green-800"> Buy {quantity} in {category}</p>
      </div>
    </li>
  );
};
    
export default Item;