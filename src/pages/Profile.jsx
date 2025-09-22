import userImg from '../assets/descarga.jpg'

function User() {
    return (
        <div className='min-h-screen w-full bg-black flex items-center justify-center text-white'>
            <div className='flex flex-col gap-3 w-full max-w-md p-5'>
                    <div className="flex flex-col h-60 items-center gap-3 mt-3">
                        <img src={userImg} alt="userImg" className='rounded-full object-cover w-32 h-32'></img>
                        <h2 className='text-3xl font-bold'>Tiare Linco</h2>
                        <p className='text-md'>tmlincot@gmail.com</p>
                    </div>
                    <div className='flex flex-col gap-4 p-6 cursor-pointer tracking-widest'>
                        <div className='flex gap-x-4 items-center border-2 border-white rounded p-2 font-bold justify-center hover:bg-white hover:text-black transition'>
                            <p className="text-2xl">👤</p>
                            <p>Mi perfil</p>
                        </div>
                        <div className='flex items-center gap-x-4 border-2 border-white rounded p-2  font-bold justify-center hover:bg-white hover:text-black transition'>
                            <p className="text-2xl">📩</p>
                            <p>Mis mensajes</p>
                        </div>
                        <div className='flex items-center gap-x-4 border-2 border-white rounded p-2 justify-center font-bold hover:bg-white hover:text-black transition'>
                            <p className="text-2xl">🍕 </p>
                            <p>Mis favoritos</p>
                        </div>
                        <div className='flex items-center gap-x-4 border-2 border-white rounded p-2 justify-center font-bold hover:bg-white hover:text-black transition'>
                            <p className="text-2xl">📜</p>
                            <p>Mis Pedidos</p>
                        </div>
                        <div className='flex items-center gap-x-4 border-2 border-white rounded p-2 justify-center font-bold hover:bg-white hover:text-black transition'>
                            <p className="text-2xl">🛒</p>
                            <p>Mi carrito</p>
                        </div>
                        <button className='cursor-pointer border-2 mt-8 border-white rounded justify-center font-bold text-white p-3 text-3xl hover:bg-white hover:text-black transition'>Cerrar sesión</button>
                    </div>
               
            </div>
        </div>
    )
}


function Profile() {
    return (
        <User />
    )
}

export default Profile