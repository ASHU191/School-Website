import { Outlet } from 'react-router-dom'
import './App.css'
import Navbar from './components/Navbar'
import { scrollToTop } from "../src/Utils";
import scrollUp from "../src/assets/Home/arrowUp.png";
import Footer from "./components/Footer";


function App() {

  return (
    <>
    <Navbar />
    <Outlet />
    <img
      onClick={scrollToTop}
      className="w-10 h-10 right-4 bottom-4 fixed cursor-pointer z-10 md:w-12 md:h-12 lg:w-16 lg:h-16"
      src={scrollUp}
      alt="Scroll to top"
    />
      <Footer />
  </>
  
  )
}

export default App
