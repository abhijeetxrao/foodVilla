import React, { useState, useEffect } from "react";
import axios from "axios";
import Card from "../components/Card.jsx"
import ShimmerUI from "../components/ShimmerUI.jsx"
import useStatus from "../utils/useStatus.jsx"

function Home() {

  const [restaurant, setRestaurant] = useState([])
  const [filteredRes, setFilteredRes] = useState([]);
  const[input,setInput] = useState("")
  const status = useStatus();

  // useEffect(()=>{
  //   filterData();
  // },[input])

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
          setFilteredRes(restaurants);
          console.log(restaurants);
      } catch (error) {
        console.error("Error fetching Swiggy data:", error);
      }
    };

    useEffect(() => {
    fetchRestaurants();
  }, []);


    const filterData = ()=>{
      const data = restaurant.filter((res)=>res.info.name.toLowerCase().includes(input.toLowerCase()));
      setFilteredRes(data);
      console.log(data)
    }

    if(!status){
      return <h1>You are offline</h1>
    }

  return (filteredRes.length===0?(<ShimmerUI/>):
    (<div >
      <div className="">
        <input className="p-2 text-white bg-cyan-600 text-lg rounded-xl m-4" placeholder="Enter Restaurant" value={input} onChange={(e)=>setInput(e.target.value)}/>
        <button onClick = {filterData} className="bg-blue-500 text-white p-2 m-4 font-semibold rounded-lg hover:scale-95 transition-shadow cursor-pointer">Search</button>
      </div>
      <div className="flex flex-wrap gap-4 m-2">
        {filteredRes.map((res)=><Card key = {res.info.id} props={res}/>)}
      </div>
    </div>))
    }
  ;


export default Home;
