import { validateEmail, validatePassword } from "../components/Validations"
import { useState } from "react";

function LoginPage() {

    const [formData, setFormData] = useState({
        email:'',
        password: '',
    })

    const [error, setError] = useState({});
    const [success, setSuccess] = useState("");


    const handleChange = (e) => {
        const {name, value}  = e.target; 
        setFormData (prevFormData => ({
            ...prevFormData,
            [name]: value.trim()
        }))
        setError(prevError => ({
            ...prevError,
            [name]: ''
        }))
        setSuccess("");
    };

    const validateForm = (data) => {
        let newError = {};
    
        newError.email = validateEmail(data.email);
        newError.password = validatePassword(data.password);

        setError(newError);
    
        const complete = Object.values(newError).every(err => err === "");
    
        return complete;
    };

    
    const handleSubmit = (e) => {
        e.preventDefault();
        const valid = validateForm(formData);
        if (valid){
            setSuccess("Login exitoso");
            cleanForm();
        }
    }

    const cleanForm = () => {
        setFormData({
            email: "",
            password: "",
            });
            setError({});
    };


    return (
    <div className="flex flex-col w-full max-w-2xl mx-auto p-4">
        <h1 className="text-5xl pb-2">Login</h1>
        <form onSubmit={handleSubmit} className="flex flex-col gap-3">
            <div className="flex flex-col gap-2">
                <label htmlFor="email">Email</label>
                <input
                    type="email"
                    id="email"
                    name="email"
                    placeholder="Enter your email"
                    value={formData.email}
                    onChange={handleChange}
                    className="border rounded p-1 border-gray-300"
                ></input>
                {error.email && <span className="text-red-500 text-xs">{error.email}</span>}
            </div>
            <div className="flex flex-col gap-2">
                <label htmlFor="password">Contraseña</label>
                <input
                    type="password"
                    id="password"
                    name="password"
                    placeholder="Enter your password"
                    value={formData.password}
                    onChange={handleChange}
                    className="border rounded p-1 border-gray-300"
                ></input>
                {error.password && <span className="text-red-500 text-xs">{error.password}</span>}
            </div>
            <button onClick={handleSubmit}
                type="submit"
                className="bg-blue-400 text-white p-1 rounded"        
            >Log In</button>
            {success && (
                <span className="text-green-500 text-xs text-center">Logeo exitoso</span>
            )}
        </form>
    </div>
    )
}

export default LoginPage