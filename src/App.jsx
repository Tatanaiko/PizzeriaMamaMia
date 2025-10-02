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
import { BrowserRouter,  Route, Routes } from 'react-router-dom'




function App() {
  return (
    <CartProvider>
      <BrowserRouter>
        <div className='flex flex-col min-h-screen'>
          <Navbar />
          <main className='flex flex-col flex-grow items-center'>
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/register" element={<Register />} />
              <Route path="/login" element={<LoginPage />} />
              <Route path="/cart" element={<Cart />} />
              <Route path="/pizza/p001" element={<Pizza />} />
              <Route path="/profile" element={<Profile />} />
              <Route path="/404" element={<NotFound />} />      
            </Routes>
          </main>
          <Footer />
        </div>
      </BrowserRouter>
    </CartProvider>
  )
}

export default App
