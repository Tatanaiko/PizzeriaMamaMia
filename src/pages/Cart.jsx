import { CartContext } from '../context/CartProvider'
import { useContext, useState } from 'react'
import { UserContext } from '../context/UserProvider';
import { Modal } from '../components/Modal';


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
    const {products, increase, decrease, totalPrice, checkout} = useContext(CartContext);
    const {token} = useContext(UserContext);
    const [modalMsg, setModalMsg] = useState("");

    const showModal = (msg) => {
        setModalMsg(msg);
    };

    const handleClose = () => setModalMsg("");


    const handleCheckout = async () => {
        if (!token) {
            showModal("Debes iniciar sesión para realizar la compra");
            return;
        }
        if (products.length === 0) {
            showModal("El carrito está vacío");
            return;
        }
        try {
            const res = await checkout(token);
            if(res.error) showModal(res.error);
            else showModal("Compra realizada con éxito!");
        } catch (error) {
            showModal("Ocurrió un error al realizar la compra");
            
        }
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
            <button onClick={handleCheckout} className= {`border rounded w-15 h-8 ${
                token ? 'bg-black text-white cursor-pointer' : 'bg-gray-400 text-gray-700 cursor-not-allowed' 
            }`}
            >Pagar</button> 

            {modalMsg && <Modal msg={modalMsg} onClose={handleClose} />}
        </div>
    )
}

export default Cart