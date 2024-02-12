import { useEffect, useState } from "react";
import { SWIGGY_APP_URL } from "../Component/Contant/Contant";

const useRestaurant = (Id) => {
    const [restaurant, setRestaurant] = useState(null);

    //it will get data from API

    useEffect(() => {
        getRestaurantInfo();
      }, []);
    
      async function getRestaurantInfo() {
        const data = await fetch(SWIGGY_APP_URL+Id );
        const json = await data.json();
        // console.log(json.data);
        setRestaurant(
          json?.data?.cards[4]?.card?.card?.gridElements?.infoWithStyle?.restaurants[2]?.info
        );


     //return resturant data 

    return restaurant
}
}
export default useRestaurant;