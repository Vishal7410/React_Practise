import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { FOOD_IMG_CDN, SWIGGY_APP_URL } from "./Contant/Contant";
const RestaurantMenu = () => {
  const param = useParams();
  const { Id } = useParams();
  console.log(param);
  const [restaurant, setrestaurant] = useState({});

  useEffect(() => {
    getRestaurantInfo();
  }, []);

  async function getRestaurantInfo() {
    const data = await fetch(SWIGGY_APP_URL
      
    );
    const json = await data.json();
    console.log(json.data);
    setrestaurant(json?.data?.cards[4]?.card?.card?.gridElements?.infoWithStyle?.restaurants[2]?.info)
    // console.log(setrestaurant);
  }

  return (
    <div>
      <h1>Restraunt id: {Id}</h1>
      <img src={FOOD_IMG_CDN + restaurant?.cloudinaryImageId
} alt="" />
      <h2>Any Apears {restaurant.name}</h2>
     

      <h2>Namste</h2>
    </div>
  );
};
export default RestaurantMenu;
