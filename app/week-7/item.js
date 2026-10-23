export default function Item({name,quantity,category}) {
    
    return <li className="bg-indigo-950 mb-5 pt-1 pl-2 pb-1.5 text-white"> <h2 className="text-2xl font-bold">{name}</h2><p className="">Buy {quantity} in {category}</p></li>
}
