import { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";
import { FOOD_IMG_CDN, SWIGGY_APP_URL } from "./Contant/Contant";
import ShimmerUI from "./Shimmer_UI/ShimmerUI";
const RestaurantMenu = () => {
  const param = useParams();
  const { Id } = useParams();
  console.log(param);
  const [restaurant, setrestaurant] = useState({});

  useEffect(() => {
    getRestaurantInfo();
  }, []);

  async function getRestaurantInfo() {
    const data = await fetch(SWIGGY_APP_URL);
    const json = await data.json();
    console.log(json.data);
    setrestaurant(
      json?.data?.cards[4]?.card?.card?.gridElements?.infoWithStyle?.restaurants[2]?.info
    );
    // console.log(setrestaurant);
    // ?.restaurants[2]?.info
        
  }
  if (!restaurant) {
    return <ShimmerUI />;
  }

  return (
    <div className="menu_restaurant">
      <div>
        <h1>Restraunt id: {Id}</h1>
        <img src={FOOD_IMG_CDN+restaurant?.cloudinaryImageId} alt="" />
        <h2>{restaurant?.name}</h2>
        <h3>{restaurant?.areaName}</h3>
        <h3>{restaurant?.costForTwo}</h3>
        <h3>{restaurant?.avgRating}stars</h3>
      </div>

      {/* <div>{console.log(restaurant?.restaurants)}</div>



      <ul>
        {restaurant?.restaurants.map((item)=> (<li key={item.id}>{item.name}</li>))}
      </ul> */}




    </div>
  );
};
export default RestaurantMenu;
