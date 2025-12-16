import React, {useEffect, useState} from 'react'
import { useParams } from "react-router";
import axios from "axios"



function RestaurantMenu() {
  const {id} = useParams();
  console.log(id);
const  [itemCategories, setItemCategories] =  useState([null])
 

  const fetchRes = async()=>{
    const response = await axios.get("/swiggy/mapi/menu/pl?page-type=REGULAR_MENU&complete-menu=true&lat=28.5131443&lng=77.479608&restaurantId=1084122&submitAction=ENTER")

    const cards = response?.data.data?.cards?.find(card => card?.groupedCard)?.groupedCard?.cardGroupMap?.REGULAR?.cards;
  
   setItemCategories(cards.filter(c => c?.card?.card?.["@type"] ==="type.googleapis.com/swiggy.presentation.food.v2.ItemCategory")) ;
  //  console.log(itemCategories,"hfvsdfgh")
 
};


  useEffect(()=>{
      fetchRes()
  },[])

  return (
    <div>
      <h1>Restaurant menu</h1>
      <p>Restaurant ID: {id}</p>
      <ul>

          {/* {itemCategories[0]?.map((item)=> console.log(item?.card?.card?.itemCard,"xvhsxvsx") )}    */}
          {console.log(itemCategories[0] && itemCategories[0].card.card.itemCards[1].card.info.name)}
          { itemCategories[0] && itemCategories[0].card.card.itemCards?.map((data,index)=><li key ={index}>{data.item}</li>)}
      </ul>
    </div>
  )
}

export default RestaurantMenu