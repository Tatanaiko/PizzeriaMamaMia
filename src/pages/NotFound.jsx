import { Link } from "react-router-dom"
function NotFound() {
    return (
        <div className="text-center flex flex-col gap-2">
            <p className="text-8xl">404</p>
            <span className="text-2xl">NOT FOUND</span>
            <span className="text-sm">No encontramos la página que buscas :'c</span>
            <Link to="/">Haz clíck aquí para redirigirte a la pagina princial</Link>
        </div>
    )
}

export default NotFound