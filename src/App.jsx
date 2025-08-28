import Navbar from './components/Navbar'
import Home from './components/Home' 
import Footer from './components/Footer'
import Register from './components/Register'
import LoginPage from './components/LoginPage'


function App() {
  return (
    <div className='flex flex-col min-h-screen'>
      <Navbar />
      <main className='flex flex-grow items-center justify-center'>
        {/* <Home /> */}
        {/* <Register /> */}
        <LoginPage />
      </main>
      <Footer />
    </div>
  )
}

export default App
