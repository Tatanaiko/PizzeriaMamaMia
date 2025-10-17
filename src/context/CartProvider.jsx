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

        const checkout = async (token) => {
            if (!token) return { error: "No token" };
            try {
                const res = await fetch("http://localhost:5000/api/checkouts", {
                    method: "POST",
                    headers: { 
                        "Content-Type": "application/json", 
                        Authorization: `Bearer ${token}` 
                    },
                    body: JSON.stringify({
                        products: products.map(p => ({ id: p.id, quantity: p.count })),
                        total: totalPrice()
                    })
                });
                const data = await res.json();
                if (res.ok) {
                    setProducts([]);
                }
                return data;
            } catch (error) {
                console.error(error);
                return { error: error.message };
            }
    }

    
        return (
            <CartContext.Provider value={{products, increase, decrease, totalPrice, addProduct, checkout }}>
                {children}
            </CartContext.Provider>
        )
}
