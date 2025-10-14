import Navbar from './components/Navbar'
import Home from './pages/Home'
import Footer from './components/Footer'
import Pizza from './pages/Pizza'
import Cart from './pages/Cart'
import Register from './pages/Register'
import LoginPage from './pages/LoginPage'
import NotFound from './pages/NotFound'
import Profile from './pages/Profile'
import { CartProvider } from './context/CartProvider'
import { BrowserRouter,  Route, Routes, Navigate } from 'react-router-dom'
import { UserProvider, UserContext } from './context/UserProvider'
import { useContext } from 'react'




function AppRoutes() {
  const { token } = useContext(UserContext);
  return (
    <div className='flex flex-col min-h-screen'>
            <Navbar />
            <main className='flex flex-col flex-grow items-center'>
              <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/register" element={token ? <Navigate to="/" replace /> : <Register />} />
                <Route path="/login" element={token ? <Navigate to="/" replace /> : <LoginPage />} />
                <Route path="/cart" element={<Cart />} />
                <Route path="/pizza/:id" element={<Pizza />} />
                <Route path="/profile" element={token ? <Profile /> : <Navigate to="/login" />} />
                <Route path="/404" element={<NotFound />} />      
              </Routes>
            </main>
            <Footer />
          </div>
  ) 
}


function App() {
  return (
    <UserProvider>
      <CartProvider>
        <BrowserRouter>
          <AppRoutes />
        </BrowserRouter>
      </CartProvider>
    </UserProvider>
  )
}

export default App
