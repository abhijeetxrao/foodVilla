import { CartProvider } from './utils/CartContext.jsx' // Import Provider

function App() {
  return (
    <CartProvider> {/* Wrap everything here */}
      <div>
        <Routes>
          <Route path = '/' element = {<Layout/>}>
            {/* ... your existing routes ... */}
          </Route>
        </Routes>
      </div>
    </CartProvider>
  )
}
