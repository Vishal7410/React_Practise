import { useEffect, useState } from "react";
import { SWIGGY_APP_URL } from "../Component/Contant/Contant";

const useRestaurant = (
  {
    id,
    
  }
) => {
    const [restaurant, setRestaurant] = useState(null);

    console.log("menu Api Check " + restaurant);

    //it will get data from API

    useEffect(() => {
        getRestaurantInfo(id);
      }, []);
    
      async function getRestaurantInfo() {
        const restaurantId = id;
        const data = await fetch(`SWIGGY_APP_URL/${restaurantId}` );
        const json = await data.json();
        console.log(" check Json Data", json.data);
        setRestaurant(
          json?.data?.cards[4]?.card?.card?.gridElements?.infoWithStyle?.restaurants?.info
          // json?.data?.cards[4]?.card?.card?.brands
         // json.data
        );

        console.log("restrount data Check " + restaurant);




     //return resturant data 

    return restaurant
}
}
export default useRestaurant;