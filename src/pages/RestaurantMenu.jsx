import { useParams } from "react-router-dom";
import { useContext } from "react";
import useRestaurant from "../utils/useRestaurant.jsx";
import { CartContext } from "../utils/CartContext.jsx";

function RestaurantMenu() {
  const { id } = useParams();
  const { itemCategories, cloudinaryImageId } = useRestaurant(id);
  const { addToCart, items } = useContext(CartContext);

  // Helper to check if item is already in cart to show count
  const getItemCount = (itemId) => {
    const item = items.find((i) => i.id === itemId);
    return item ? item.quantity : 0;
  };

  return (
    <div className="max-w-4xl mx-auto p-6">
      {/* Header Section */}
      <div className="flex flex-col md:flex-row gap-8 items-center border-b pb-8 mb-8">
        {cloudinaryImageId && (
          <img
            className="w-full md:w-80 h-52 object-cover rounded-2xl shadow-lg hover:scale-[1.02] transition-transform"
            src={`https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto/${cloudinaryImageId}`}
            alt="restaurant"
          />
        )}
        <div className="flex-1 text-center md:text-left">
          <h1 className="text-4xl font-black text-gray-800 tracking-tight">Restaurant Menu</h1>
          <p className="text-gray-500 mt-2 font-medium">Restaurant ID: {id}</p>
          <div className="mt-4 flex gap-4 justify-center md:justify-start">
            <span className="bg-green-100 text-green-700 px-3 py-1 rounded-full text-sm font-bold">★ 4.2</span>
            <span className="bg-orange-100 text-orange-700 px-3 py-1 rounded-full text-sm font-bold">30-40 mins</span>
          </div>
        </div>
      </div>

      {/* Menu Categories */}
      <div className="space-y-8">
        {itemCategories.map((category, index) => (
          <div key={index} className="bg-gray-50 rounded-3xl p-6 shadow-sm">
            <h2 className="text-2xl font-bold text-gray-800 mb-6 flex items-center gap-2">
              {category?.card?.card?.title}
              <span className="text-sm text-gray-400">({category?.card?.card?.itemCards?.length})</span>
            </h2>

            <div className="grid gap-6">
              {category?.card?.card?.itemCards?.map((item) => {
                const itemInfo = item.card.info;
                const count = getItemCount(itemInfo.id);

                return (
                  <div 
                    key={itemInfo.id} 
                    className="bg-white p-4 rounded-2xl flex justify-between items-center hover:shadow-md transition-shadow border border-gray-100"
                  >
                    <div className="flex-1 pr-4">
                      <h3 className="text-lg font-bold text-gray-800">{itemInfo.name}</h3>
                      <p className="text-sm font-semibold text-gray-600 mt-1">
                        ₹{(itemInfo.price || itemInfo.defaultPrice) / 100}
                      </p>
                      <p className="text-xs text-gray-400 mt-2 line-clamp-2 italic font-medium">
                        {itemInfo.description}
                      </p>
                    </div>

                    <div className="relative flex flex-col items-center">
                      {itemInfo.imageId ? (
                        <img 
                          src={`https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_208/${itemInfo.imageId}`}
                          className="w-32 h-24 object-cover rounded-xl shadow-inner"
                          alt={itemInfo.name}
                        />
                      ) : (
                        <div className="w-32 h-24 bg-gray-100 rounded-xl flex items-center justify-center text-gray-300 text-xs">No Image</div>
                      )}
                      
                      {/* Interactive Add Button */}
                      <button 
                        onClick={() => addToCart(itemInfo)}
                        className={`absolute -bottom-2 px-6 py-2 rounded-lg font-bold text-sm shadow-md transition-all active:scale-95
                          ${count > 0 ? 'bg-orange-500 text-white' : 'bg-white text-green-600 border border-gray-200 hover:bg-gray-50'}`}
                      >
                        {count > 0 ? `ADDED (${count})` : "ADD"}
                      </button>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default RestaurantMenu;