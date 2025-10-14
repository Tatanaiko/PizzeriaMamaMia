import { useContext } from "react"
import { CartContext } from "../context/CartProvider"
import { Link } from "react-router-dom";


function CardPizza({pizza}) {
    const {addProduct} = useContext(CartContext);
    return (
        <div className="flex flex-col gap-2 my-3">
            <div className="border border-gray-200">
                <img src={pizza.img} alt={pizza.name} className="w-72"></img>
                <h3 className="p-2 text-xl">Pizza {pizza.name}</h3>
                <div className="flex flex-col items-center p-2 border-y border-gray-200 gap-2">
                    <h4 className="text-gray-400">Ingredientes:</h4>
                    <p className="text-xs">{pizza.ingredients?.map((ingredient, id) => (
                        <li key={id}>{ingredient}</li>
                    ))}</p>
                </div>
                {pizza.description && (
                    <div className="flex p-2 border-y border-gray-200 gap-2">
                        <p className="text-sm">{pizza.description}</p>
                    </div>
                )}
                <div className="text-center">
                    <h2 className="p-3 font-bold">Precio: {pizza.price?.toLocaleString('es-Cl', {style: 'currency', currency: 'CLP'})}</h2>
                    <div className="flex justify-around pb-3">
                        <Link to={`/pizza/${pizza.id}`} className="border rounded px-1 py-1 text-xs cursor-pointer">Ver más</Link>
                        <button onClick={() => addProduct(pizza)} className="cursor-pointer border rounded px-2 py-1 text-xs bg-gray-900 text-white hover:bg-white hover:text-black">Añadir</button>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default CardPizza