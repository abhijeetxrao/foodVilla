import React from 'react'
import axios from 'axios'

function Home() {
  const fetchData = async()=>{
   const response = await axios.get("https://www.swiggy.com/dapi/restaurants/list/v5?lat=26.5106395&lng=83.7849277&is-seo-homepage-enabled=true&page_type=DESKTOP_WEB_LISTING")
   console.log(response);
  }

  fetchData();
  return (
    <div>Home</div>
  )
}

export default Home