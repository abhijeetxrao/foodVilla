import React from 'react'
import axios from 'axios'

function Home() {
  const fetchRestaurants = async () => {
  try {
    
    const response = await axios.get(
      '/swiggy/dapi/restaurants/list/v5?lat=26.5106395&lng=83.7849277&is-seo-homepage-enabled=true&page_type=DESKTOP_WEB_LISTING'
    );
    console.log(response);
  } catch (error) {
    console.error("Error fetching Swiggy data:", error);
  }
}

  fetchRestaurants();
  return (
    <div>Home</div>
  )
}

export default Home