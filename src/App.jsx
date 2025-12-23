import { Route, Routes } from 'react-router-dom'
import { lazy, Suspense } from 'react'
import './App.css'
import Navbar from './components/Navbar.jsx'
import Home from './pages/Home.jsx'
import About from './pages/About.jsx'
import Cart from './pages/Cart.jsx'
import Contact from './pages/Contact.jsx'
import Layout from './components/Layout.jsx'
import RestaurantMenu from './pages/RestaurantMenu.jsx'
import Profile from './pages/Profile.jsx'


import { CartProvider } from './utils/CartContext.jsx' 

const InstaMart = lazy(() => import('./pages/InstaMart.jsx'))

function App() {
  return (
   
    <CartProvider>
      <div>
        <Routes>
          <Route path='/' element={<Layout />}>
            <Route index element={<Home />} />
            <Route path='/about' element={<About />}>
              <Route path='profile' element={<Profile />} />
            </Route>
            <Route path='/contact' element={<Contact />} />
            <Route path='/cart' element={<Cart />} />
            <Route path='/restaurant/:id' element={<RestaurantMenu />} />
            <Route 
              path='/instamart' 
              element={
                <Suspense fallback={<h1>Loading...</h1>}>
                  <InstaMart />
                </Suspense>
              } 
            />
          </Route>
        </Routes>
      </div>
    </CartProvider>
  )
}

export default App