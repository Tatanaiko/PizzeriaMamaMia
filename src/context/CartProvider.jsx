import { createContext, useState } from "react";
import { pizzaCart } from "../components/pizzas";


export const CartContext = createContext();

export function CartProvider({ children }) {

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

        const addProduct = (pizza) => {
            setProducts(prev => {
                const exists = prev.find(p => p.id === pizza.id);
                if (exists) {
                    return prev.map(p => 
                        p.id === pizza.id ? {...p, count: p.count + 1} : p
                    );
                }else {
                    return [...prev, {...pizza, count: 1}];
                }
            })
        }
    
        return (
            <CartContext.Provider value={{products, increase, decrease, totalPrice, addProduct }}>
                {children}
            </CartContext.Provider>
        )
}
