import { Route, Routes } from 'react-router-dom'
import './App.css'
import Navbar from './components/Navbar.jsx'
import Home from './pages/Home.jsx'
import About from './pages/About.jsx'
import Cart from './pages/Cart.jsx'
import Contact from './pages/Contact.jsx'
import Layout from './components/Layout.jsx'
import RestaurantMenu from './pages/RestaurantMenu.jsx'
import Profile from './pages/Profile.jsx'

function App() {
  

  return (
    <div>
      <Routes>
        <Route path = '/' element = {<Layout/>}>
          <Route index element = {<Home/>}/>
          <Route path = '/about' element = {<About/>}>
            <Route path='profile' element = {<Profile/>}/>
          </Route>
          <Route path = '/contact' element = {<Contact/>}/>
          <Route path = '/cart' element = {<Cart/>}/>
          <Route path = '/restaurant/:id' element = {<RestaurantMenu/>}/>
        </Route>
      </Routes>
    </div>
  )
}

export default App
