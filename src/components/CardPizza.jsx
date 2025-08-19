function CardPizza({name, price, ingredients= [], img= ""}) {
    return (
        <div className="flex flex-col gap-2 my-3 items-center">
            <div className="border border-gray-200">
                <img src={img} alt={name} className="w-70"></img>
                <h3 className="p-2 text-xl">Pizza {name}</h3>
            
                <div className="flex flex-col items-center p-2 border-y border-gray-200 gap-2">
                    <h4 className="text-gray-400">Ingredientes:</h4>
                    <p className="text-xs">{ingredients.join(", ")}</p>
                </div>
                <div className="text-center">
                    <h2 className="p-3 font-bold">Precio: {price?.toLocaleString('es-Cl', {style: 'currency', currency: 'CLP'})}</h2>
                    <div className="flex justify-around pb-3">
                        <button className="border rounded px-1 py-1 text-xs">Ver más</button>
                        <button className="border rounded px-2 py-1 text-xs bg-gray-900 text-white">Añadir</button>
                    </div>
                </div>
            </div>
        </div>
    
    )
}

export default CardPizza