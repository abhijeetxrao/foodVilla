import { CartProvider } from './utils/CartContext.jsx' // Import Provider

function App() {
  return (
    <CartProvider> 
      <div>
        <Routes>
          <Route path = '/' element = {<Layout/>}>
           
          </Route>
        </Routes>
      </div>
    </CartProvider>
  )
}
