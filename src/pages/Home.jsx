import React, { useState, useEffect } from "react";
import axios from "axios";
import Card from "../components/Card.jsx";
import {ShimmerUI} from "../components/ShimmerUI.jsx";
import useStatus from "../utils/useStatus.jsx";

function Home() {
  const [restaurant, setRestaurant] = useState([]);
  const [filteredRes, setFilteredRes] = useState([]);
  const [input, setInput] = useState("");
  const status = useStatus();

  const fetchRestaurants = async () => {
    try {
      const response = await axios.get(
        "/swiggy/dapi/restaurants/list/v5?lat=28.5131443&lng=77.479608&is-seo-homepage-enabled=true&page_type=DESKTOP_WEB_LISTING"
      );
      const cards = response?.data?.data?.cards;
      const restaurantCard = cards.find(
        (c) => c?.card?.card?.gridElements?.infoWithStyle?.restaurants
      );
      const restaurants = restaurantCard?.card?.card?.gridElements?.infoWithStyle?.restaurants;
      setRestaurant(restaurants || []);
      setFilteredRes(restaurants || []);
    } catch (error) {
      console.error("Error fetching Swiggy data:", error);
    }
  };

  useEffect(() => {
    fetchRestaurants();
  }, []);

  const filterData = () => {
    const data = restaurant.filter((res) =>
      res.info.name.toLowerCase().includes(input.toLowerCase())
    );
    setFilteredRes(data);
  };

  if (!status) {
    return (
      <div className="flex flex-col items-center justify-center h-screen">
        <h1 className="text-2xl font-bold text-red-500">🔴 You are offline</h1>
        <p className="text-gray-500">Please check your internet connection.</p>
      </div>
    );
  }

  return restaurant.length === 0 ? (
    <ShimmerUI />
  ) : (
    <div className="max-w-7xl mx-auto px-4">
      {/* Search Section */}
      <div className="flex flex-col md:flex-row items-center justify-center py-10 gap-4">
        <div className="relative w-full max-w-lg group">
          <input
            className="w-full p-4 pl-6 text-gray-700 bg-gray-100 border-none rounded-full shadow-inner focus:ring-2 focus:ring-orange-400 focus:bg-white transition-all duration-300 outline-none"
            placeholder="Search for restaurants, cuisines..."
            value={input}
            onChange={(e) => setInput(e.target.value)}
          />
        </div>
        <button
          onClick={filterData}
          className="bg-orange-500 hover:bg-orange-600 text-white px-8 py-4 font-bold rounded-full shadow-lg hover:shadow-orange-200 active:scale-90 transition-all duration-200 cursor-pointer"
        >
          Search
        </button>
      </div>

      <hr className="mb-8 border-gray-100" />

      {/* Results Section */}
      {filteredRes.length === 0 ? (
        <div className="text-center py-20">
          <h2 className="text-xl text-gray-400">No restaurants found matching "{input}"</h2>
        </div>
      ) : (
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8 mb-10">
          {filteredRes.map((res) => (
            <div key={res.info.id} className="hover:scale-[0.98] transition-transform duration-300">
              <Card props={res} />
            </div>
          ))}
        </div>
      )}
    </div>
  );
}

export default Home;