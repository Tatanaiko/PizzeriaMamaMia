import Header from '../components/Header'
import CardPizza from '../components/CardPizza';
import { useState, useEffect } from 'react';


function Home(){
    const [pizzas, setPizzas] = useState([]);

    let getDataPizzas = async() => {
        const res = await fetch("http://localhost:5000/api/pizzas");
        const data = await res.json();
        setPizzas(data);
    }

    useEffect(() => {
        getDataPizzas()
    }, []);


    return (
        <>
            <Header />
            <div className='flex flex-col md:flex-row flex-wrap justify-center gap-4 p-4'>
                {pizzas.map((pizza) => (
                    <CardPizza
                        key={pizza.id}
                        img={pizza.img}
                        name={pizza.name}
                        price={pizza.price}
                        ingredients={pizza.ingredients}
                    />  
                ))}
            </div>
        </>
    )
}

export default Home;