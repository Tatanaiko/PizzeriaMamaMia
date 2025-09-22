import { useState, useEffect } from "react";
import CardPizza from "../components/CardPizza";


function Pizza() {
    const [pizza, setPizza] = useState({});

    let getDataPizza = async() => {
        const res = await fetch("http://localhost:5000/api/pizzas/p001");
        const data = await res.json();
        console.log(data)
        setPizza(data);
    }

    useEffect(() => {
        getDataPizza();
    }, []);

    return (
        <div className="flex justify-center w-72">
            <CardPizza 
                name={pizza.name}
                price= {pizza.price}
                img= {pizza.img}
                description={pizza.desc}
                ingredients={pizza.ingredients} 
            /> 
        </div>
    )
}

export default Pizza