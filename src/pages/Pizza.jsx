import { useState, useEffect } from "react";
import CardPizza from "../components/CardPizza";
import { useParams } from "react-router-dom";


function Pizza() {
    const [pizza, setPizza] = useState({});
    const { id } = useParams();

    let getDataPizza = async() => {
        const res = await fetch(`http://localhost:5000/api/pizzas/${id}`);
        const data = await res.json();
        setPizza(data);
    }

    useEffect(() => {
        getDataPizza();
    }, []);

    return (
        <div className="flex justify-center w-72">
            <CardPizza pizza={pizza}
            /> 
        </div>
    )
}

export default Pizza