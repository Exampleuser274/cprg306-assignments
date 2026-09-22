export default function Item({info}) {
    
    return <li className="bg-indigo-950 mb-5 pt-1 pl-2 pb-1.5 "> <h2 className="text-2xl font-bold">{info.name}</h2><p className="">Buy {info.quantity} in {info.category}</p></li>
}
