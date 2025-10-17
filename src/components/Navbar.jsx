import { Link } from "react-router-dom";
import { CartContext } from "../context/CartProvider";
import { UserContext } from "../context/UserProvider";
import { useContext } from "react";

function Navbar() {
    const {totalPrice} = useContext(CartContext); 
    const {token, logout} = useContext(UserContext);
    console.log("Navbar token:", token);

    return (
        <nav className="flex gap-2 md:text-xl items-center md:justify-between w-full p-2 text-xs bg-gray-950 text-white justify-center ">
            <h1 className="hidden md:block">Pizzería Mamma Mía!</h1>
            <ul className="flex gap-2 pe-5 md:text-base items-center">
                <li><Link to="/" className="border rounded px-3 py-1 cursor-pointer">Home</Link></li>
                
                {token ? (
                <>
                    <Link to="/profile" className="border rounded px-3 py-1 cursor-pointer">Profile </Link>
                    <li><button className="border rounded px-3 py-1 cursor-pointer" onClick={logout}>Logout</button></li>
                </>
                ) : (
                <>
                    <li>
                        <Link to="/login" className="border rounded px-3 py-1 cursor-pointer">Login</Link>
                    </li>
                    <li>
                        <Link to="/register" className="border rounded px-3 py-1 cursor-pointer">Register</Link>
                    </li>
                </>
                )}
                <li>
                    <Link to="/cart" className="border border-cyan-600 rounded px-3 py-1">🛒 Total: {totalPrice().toLocaleString('es-Cl', {style: 'currency', currency: 'CLP'})}</Link>
                </li> 
            </ul>
        </nav> 
    )
}
export default Navbar;