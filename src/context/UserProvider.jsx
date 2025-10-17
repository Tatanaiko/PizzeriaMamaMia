import { createContext, useState } from "react"

export const UserContext = createContext();

export function UserProvider({ children }) {

    const [token, setToken] = useState(() => localStorage.getItem("token") || null);
    const [email, setEmail] = useState(null);



    async function login({email, password}) {
        try {
            const res = await fetch("http://localhost:5000/api/auth/login", {
                method: "POST",
                headers: {
                    "Content-Type": "application/json"
                },
                body: JSON.stringify({email, password})
            });

            const data = await res.json();
            setToken(data.token)
            setEmail(data.email)
            localStorage.setItem("token", data.token);

        } catch (error) {
            console.error("error", error.message);
        }
        
    }


    async function register({email, password}) {
        try {
            const res = await fetch("http://localhost:5000/api/auth/register", {
                method: "POST",
                headers: {
                    "Content-Type": "application/json"
                },
                body: JSON.stringify({email, password})
            });

            const data = await res.json();
            setToken(data.token);
            setEmail(data.email);
            localStorage.setItem("token", data.token);

            return data;
        } catch (error) {
            console.error("error", error.message);
        }
        
    }

    async function getProfile() {
        if (!token) return;
        try {
            const res = await fetch("http://localhost:5000/api/auth/me", {
                method: "GET",
                headers: {
                    Authorization: `Bearer ${token}`
                }
            });

            const data = await res.json();
            setEmail(data.email);
            return data
        } catch (error) {
            console.error("error", error.message)
        }
        
    }

    const logout = () => {
        setToken(null);
        setEmail(null);
        localStorage.removeItem("token");

    }

    return (
        <UserContext.Provider value={{token, logout, email, login, register, getProfile}}>
            {children}
        </ UserContext.Provider>
    )
}

