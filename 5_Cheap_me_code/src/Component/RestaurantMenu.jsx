import { useEffect, useState } from "react";
import {useParams } from "react-router-dom";
import { FOOD_IMG_CDN, SWIGGY_APP_URL } from "./Contant/Contant";
import ShimmerUI from "./Shimmer_UI/ShimmerUI";
import useRestaurant from "../utils/useRestaurant";
const RestaurantMenu = () => {
  // const param = useParams();
  // const { Id } = useParams();
  // console.log(param);
  //const [restaurant, setrestaurant] = useState(null);

  const {Id} = useParams();

  const restraunt = useRestaurant(Id);

 
    // console.log(setrestaurant);
    // ?.restaurants[2]?.info
        
  
  return !restraunt ? (
     <ShimmerUI />
  ) : (
    <div className="menu_restaurant">
      <div>
        <h1>Restraunt id: {Id}</h1>
        <img src={FOOD_IMG_CDN+restraunt?.cloudinaryImageId} alt="" />
        <h2>{restraunt?.name}</h2>
        <h3>{restraunt?.areaName}</h3>
        <h3>{restraunt?.costForTwo}</h3>
        <h3>{restraunt?.avgRating}stars</h3>
      </div>

      <div>
        {/* {console.log(restaurant)} */}

      <h1>Menu</h1>



      {/* <ul>
        {Object.values(restaurant?.name).map((item)=> (
        <li key={item.id}>{item.name}</li>))}
      </ul> */}
    
      </div>
    </div>
  )
}

export default RestaurantMenu;
