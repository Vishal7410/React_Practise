import { useEffect, useState } from "react";
import Cards from "../Cards/Cards";
//import { restaurantList } from "../Contant/Contant";
import ShimmerUI from "../Shimmer_UI/ShimmerUI";
import { SWIGGY_APP_URL } from "../Contant/Contant";
import { Link } from "react-router-dom";
import { filterData } from "../../utils/helper";
import useOnline from "../../utils/useOnline";



const Body = () => { 
  const [allRestaurants, setAllRestaurants] = useState([]);
  const [filteredRestaurants, setFilteredRestaurants] = useState([]);
  const [searchText, setsearchTxt] = useState("");

  
  useEffect(() => { 
    // API Call    
    getRestaurants();
  }, [searchText]);

  async function getRestaurants() {
    const data = await fetch(SWIGGY_APP_URL);
    const json = await data.json();
      console.log(json);
   // optional Chaining
   setAllRestaurants(json?.data?.cards[4]?.card?.card?.gridElements?.infoWithStyle?.restaurants);
   setFilteredRestaurants(json?.data?.cards[4]?.card?.card?.gridElements?.infoWithStyle?.restaurants);

  }

   console.log("Render");
   
   const isOnline = useOnline();
   
   if(!isOnline){
    return <h1>You are Offline Please Check your Internet connection!! </h1>;
   }
   
   // not render component (Early return)
   if (!allRestaurants) return null;

  //  if (filteredRestaurants?.length === 0)
  //  return <h1> No Restaurants match your Filter !!</h1>

   //Conditional Rendering 
  return (allRestaurants.length===0)?<ShimmerUI/>:(
    <>
      <input
        type="text"
        placeholder="XYZ"
        className="search_input"
        value={searchText}
        onChange={
          (e) => {
            setsearchTxt(e.target.value);
          }

          // console.log(e.target.value)
        }
      />
      <button
        onClick={() => {
          // Need to filter the data
          const data = filterData(searchText, allRestaurants); // we need input box to search text here [searchTxt] is input and [resturant] where you have to search the text

          // update the state - restaurant
          setFilteredRestaurants(data);
        }}
      >
        Search
      </button>
      <p>Heres the Search Text we write the updated Value</p>
      <div className="body_card">
       
       {/* you have to write logic for No restuarant found here
        */}
        {filteredRestaurants.map((restaurant) => {
          //{restaurantList.map((restaurant, index ) => {
          // Why we not use index as a key ??

          return (
            // eslint-disable-next-line react/jsx-key
            <Link to={"/restaurant/" + restaurant?.info?.Id}
            key={restaurant?.info?.Id} >
            
              <Cards {...restaurant.info}/>
              </Link>
           
            // Why we not use index as a key ??
            // To find out every item should have the unique id
          ); 
        })}
      </div>
    </>
  );
};

export default Body;
