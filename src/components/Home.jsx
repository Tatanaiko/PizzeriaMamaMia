import Header from './Header'
import CardPizza from './CardPizza';
import { pizzas } from './pizzas';

function Home(){
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