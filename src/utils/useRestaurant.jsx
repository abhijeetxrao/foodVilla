import {useState, useEffect} from 'react'
import axios from "axios";
const useRestaurant = (id)=>{
  const [itemCategories, setItemCategories] = useState([]);
  const [cloudinaryImageId, setCloudinaryImageId] = useState(null);

  useEffect(() => {
    fetchRes();
  }, []);

  const fetchRes = async () => {
    const response = await axios.get(
      `/swiggy/mapi/menu/pl?page-type=REGULAR_MENU&complete-menu=true&lat=28.5131443&lng=77.479608&restaurantId=${id}&submitAction=ENTER`
    );

    const restaurantCard = response.data.data.cards.find(
      (c) =>
        c?.card?.card?.["@type"] ===
        "type.googleapis.com/swiggy.presentation.food.v2.Restaurant"
    );

    const imageId = restaurantCard?.card?.card?.info?.cloudinaryImageId;
    setCloudinaryImageId(imageId);

    const cards = response?.data?.data?.cards?.find(
      (card) => card?.groupedCard
    )?.groupedCard?.cardGroupMap?.REGULAR?.cards;

    const categories = cards?.filter(
      (c) =>
        c?.card?.card?.["@type"] ===
        "type.googleapis.com/swiggy.presentation.food.v2.ItemCategory"
    );

    setItemCategories(categories || []);
    console.log(itemCategories);
  }
  return {itemCategories,cloudinaryImageId};
}

export default useRestaurant;