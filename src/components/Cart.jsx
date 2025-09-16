import { pizzaCart } from './pizzas';
import { useState } from 'react';


function ProductCard({name, price, count, img, onIncrease, onDecrease}) {
    return(
        <div className='flex flex-row justify-between border-2 border-red-300 rounded p-3 mb-2'>
            <div className='flex gap-2 items-center'>
                <img src={img} alt={name} className='w-16 h-12'></img>
                <p className='text-lg capitalize'>{name}</p>
            </div>
            <div className='flex gap-4 items-center'>
                <p className='font-medium'>{price?.toLocaleString('es-Cl', {style: 'currency', currency: 'CLP'})}</p>
                <button onClick={onDecrease} className='border-red-500 border rounded w-7 h-8 text-red-500 cursor-pointer'>-</button>
                <p className='font-bold'>{count}</p>
                <button onClick={onIncrease} className='border-blue-500 border rounded w-7 h-8 text-blue-500 cursor-pointer'>+</button>
            </div>
        </div>
    )
}

function Cart() {
    const [products, setProducts] = useState(pizzaCart);

    const increase = (id) => {
        setProducts(products.map(p => p.id === id ? {...p, count: p.count + 1} : p
        ))};

    const decrease = (id) => {
        setProducts(products.map(p => p.id === id ? {...p, count: p.count - 1} : p).filter(p => p.count > 0)
    
    )};

    const totalPrice = () => {
        return products.reduce((acum, p) => acum + p.price * p.count, 0);
    }


    return (
        <div className='flex-col w-full max-w-2xl mx-auto p-8 items-center'> 
            <h2 className='text-xl mb-4 font-medium'>Detalles del pedido:</h2>
            {products.map((pizza => (
                <ProductCard 
                key={pizza.id}    
                name={pizza.name}
                price={pizza.price}
                count={pizza.count}
                img={pizza.img}
                onIncrease={() => increase(pizza.id)}
                onDecrease={() => decrease(pizza.id)}
            />
            )))}
            <h2 className='text-2xl font-bold mb-6'>Total:{totalPrice().toLocaleString('es-CL', { style: 'currency', currency: 'CLP' })}</h2>
            <button className='border rounded bg-black text-white w-15 h-8 cursor-pointer'>Pagar</button>
            
        </div>
    )
}

export default Cart