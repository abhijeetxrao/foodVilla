import React, { useEffect, useState } from "react";
import { useParams } from "react-router";
import useRestaurant  from "../utils/useRestaurant.jsx";


function RestaurantMenu() {
  const { id } = useParams();
  console.log(id)
   const {itemCategories,cloudinaryImageId} = useRestaurant(id);
  return (
    <div>
      <h1>Restaurant menu</h1>
      <p>Restaurant ID: {id}</p>
      <div className="flex gap-8">

        {cloudinaryImageId && (
          <img
            className="w-64 h-48 object-cover rounded-lg"
            src={
              "https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto/" +
              cloudinaryImageId
            }
            alt="restaurant"
          />
        )}

        <ul className="text-cyan-800 font-bold">
          {itemCategories.map((category) =>
            category?.card?.card?.itemCards?.map((item) => (
              <li key={item.card.info.id}>
                {item.card.info.name}
              </li>
            ))
          )}
        </ul>
      </div>
    </div>
  )
}

export default RestaurantMenu