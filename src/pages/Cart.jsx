import React, { useContext } from "react";
import { CartContext } from "../utils/CartContext";
import { Link } from "react-router-dom";

function Cart() {
  const { items, clearCart, removeFromCart, updateQuantity, totalPrice } = useContext(CartContext);

  if (items.length === 0) {
    return (
      <div className="flex flex-col items-center justify-center min-h-[70vh] px-4">
        <img 
          src="https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto/2xempty_cart_ybi09u" 
          alt="empty cart" 
          className="w-80 mb-6"
        />
        <h2 className="text-2xl font-bold text-gray-800">Your cart is empty</h2>
        <p className="text-gray-500 mt-2 text-center">You can go to home page to view more restaurants.</p>
        <Link 
          to="/" 
          className="mt-6 bg-orange-500 text-white px-8 py-3 rounded-lg font-bold hover:bg-orange-600 transition-all shadow-lg active:scale-95"
        >
          SEE RESTAURANTS NEAR YOU
        </Link>
      </div>
    );
  }

  return (
    <div className="max-w-5xl mx-auto p-6 md:py-12">
      <div className="flex justify-between items-end mb-8 border-b pb-4">
        <div>
          <h1 className="text-4xl font-black text-gray-800 tracking-tight">Cart</h1>
          <p className="text-gray-500 font-medium">{items.length} Items in your bag</p>
        </div>
        <button 
          onClick={clearCart}
          className="text-red-500 font-bold text-sm hover:underline cursor-pointer"
        >
          CLEAR ALL
        </button>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
        {/* Left: Items List */}
        <div className="lg:col-span-2 space-y-6">
          {items.map((item) => (
            <div key={item.id} className="flex items-center gap-4 bg-white p-4 rounded-2xl shadow-sm border border-gray-100">
              <img 
                src={`https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_208/${item.imageId}`}
                className="w-24 h-24 object-cover rounded-xl"
                alt={item.name}
              />
              <div className="flex-1">
                <h3 className="font-bold text-gray-800 text-lg">{item.name}</h3>
                <p className="text-gray-500 text-sm font-medium">₹{(item.price || item.defaultPrice) / 100}</p>
                
                <div className="flex items-center gap-4 mt-3">
                  {/* Quantity Toggles */}
                  <div className="flex items-center border border-gray-200 rounded-lg overflow-hidden">
                    <button 
                      onClick={() => updateQuantity(item.id, 'decrement')}
                      className="px-3 py-1 hover:bg-gray-100 text-gray-600 font-bold"
                    >-</button>
                    <span className="px-3 py-1 bg-gray-50 text-orange-600 font-black">{item.quantity}</span>
                    <button 
                      onClick={() => updateQuantity(item.id, 'increment')}
                      className="px-3 py-1 hover:bg-gray-100 text-gray-600 font-bold"
                    >+</button>
                  </div>
                  <button 
                    onClick={() => removeFromCart(item.id)}
                    className="text-xs text-gray-400 hover:text-red-500 font-bold underline"
                  >
                    REMOVE
                  </button>
                </div>
              </div>
              <div className="text-right font-bold text-gray-800">
                ₹{((item.price || item.defaultPrice) / 100) * item.quantity}
              </div>
            </div>
          ))}
        </div>

        {/* Right: Order Summary */}
        <div className="lg:col-span-1">
          <div className="bg-gray-50 p-6 rounded-3xl sticky top-24">
            <h2 className="text-xl font-bold text-gray-800 mb-6">Bill Details</h2>
            <div className="space-y-3 pb-6 border-b border-gray-200">
              <div className="flex justify-between text-gray-600 text-sm">
                <span>Item Total</span>
                <span>₹{totalPrice.toFixed(2)}</span>
              </div>
              <div className="flex justify-between text-gray-600 text-sm">
                <span>Delivery Fee</span>
                <span className="text-green-600 font-bold italic font-sans">FREE</span>
              </div>
              <div className="flex justify-between text-gray-600 text-sm">
                <span>Platform Fee</span>
                <span>₹5.00</span>
              </div>
            </div>
            <div className="flex justify-between items-center py-6">
              <span className="text-lg font-black text-gray-800 uppercase">To Pay</span>
              <span className="text-xl font-black text-orange-500">₹{(totalPrice + 5).toFixed(2)}</span>
            </div>
            <button className="w-full bg-orange-500 text-white py-4 rounded-2xl font-black text-lg shadow-lg shadow-orange-200 hover:bg-orange-600 transition-all active:scale-95">
              PROCEED TO CHECKOUT
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Cart;