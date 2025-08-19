function Navbar() {
    const total = 25000;
    const token = false;
    return (
        <nav className="flex gap-2 md:text-xl items-center md:justify-between w-full p-2 text-xs bg-gray-950 text-white justify-center ">
            <h1 className="hidden md:block">Pizzería Mamma Mía!</h1>
            <ul className="flex gap-2 pe-5 md:text-base">
                <li><button className="border rounded px-3 py-1">Home</button></li>
                {token ? (
                <>
                    <li><button className="border rounded px-3 py-1">Profile</button></li>
                    <li><button className="border rounded px-3 py-1">Logout</button></li>
                </>
                ) : (
                    <>
                    <li><button className="border rounded px-3 py-1">Login</button></li>
                    <li><button className="border rounded px-3 py-1">Register</button></li>
                    </>
                )}
                <li><button className="border border-cyan-600 rounded px-3 py-1">Total: {total.toLocaleString('es-Cl', {style: 'currency', currency: 'CLP'})}</button></li>
            </ul>
        </nav> 
    )
}
export default Navbar;