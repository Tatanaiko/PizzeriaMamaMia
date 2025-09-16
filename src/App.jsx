import Navbar from './components/Navbar'
import Home from './components/Home' 
import Footer from './components/Footer'
import Pizza from './components/Pizza'
import Cart from './components/Cart'
import Register from './components/Register'
import LoginPage from './components/LoginPage'


function App() {
  return (
    <div className='flex flex-col min-h-screen'>
      <Navbar />
      <main className='flex flex-col flex-grow items-center justify-center'>
        {/* <Home /> */}
        {/* <Register /> */}
        {/* <LoginPage /> */}
        {/* <Cart /> */}
        <Pizza />
      </main>
      <Footer />
    </div>
  )
}

export default App
