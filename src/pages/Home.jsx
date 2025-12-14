import React, { useState, useEffect } from "react";
import axios from "axios";
import Card from "../components/Card.jsx";
import ShimmerUI from "../components/ShimmerUI.jsx"
function Home() {

  const [restaurant, setRestaurant] = useState([])

  useEffect(() => {

    fetchRestaurants();
  }, []);

  const fetchRestaurants = async () => {
      try {
        const response = await axios.get(
          "/swiggy/dapi/restaurants/list/v5?lat=28.5131443&lng=77.479608&is-seo-homepage-enabled=true&page_type=DESKTOP_WEB_LISTING"
        );
        const cards = response?.data?.data?.cards;

        const restaurantCard = cards.find(
          (c) => c?.card?.card?.gridElements?.infoWithStyle?.restaurants
        );

        const restaurants =
          restaurantCard?.card?.card?.gridElements?.infoWithStyle?.restaurants;
          setRestaurant(restaurants);
          console.log(restaurants);
      } catch (error) {
        console.error("Error fetching Swiggy data:", error);
      }
    };

  return (restaurant.length===0?(<ShimmerUI/>):
    (<div className="flex flex-wrap gap-4 m-2">
      {restaurant.map((res)=><Card key = {res.info.id} props={res}/>)}
    </div>))
    }
  ;


export default Home;
