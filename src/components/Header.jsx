import pizzaImg from '../assets/Header.jpg'

function Header() {
    return (
        <header className="relative flex flex-col items-center text-center justify-center h-68">
            <h1 className="text-3xl md:text-5xl text-white font-bold z-1">
                ¡Pizzería Mamma Mia!
            </h1>
            <p className="text-xs md:text-xl text-white z-1">
                ¡Tenemos las mejores pizzas que podrás encontrar!
            </p>
            
            <img 
                alt="pizza" 
                src={pizzaImg} 
                className="absolute inset-0 object-cover brightness-25 h-full w-full"
            />
        </header>
    )
}

export default Header;