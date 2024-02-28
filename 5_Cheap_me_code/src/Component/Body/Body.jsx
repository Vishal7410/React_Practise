import { useEffect, useState } from "react";

import BiyaniCards  from "../Cards/BiryaniCards"
//import { restaurantList } from "../Contant/Contant";
import ShimmerUI from "../Shimmer_UI/ShimmerUI";
import { SWIGGY_APP_URL, swiggy_menu_api_URL } from "../Contant/Contant";
import { Link } from "react-router-dom";
import { filterData } from "../../utils/helper";
import useOnline from "../../utils/useOnline";
import RestaurantCard,{WithOpenCard} from "../Cards/RestaurantCards";

const Body = () => {
  const [allRestaurants, setAllRestaurants] = useState([]);
  const [filteredRestaurants, setFilteredRestaurants] = useState([]);
  const [searchText, setsearchTxt] = useState("");

  const [biryanies, setBiryanies] = useState([])


  const RestaurantCardOpen = WithOpenCard(RestaurantCard)



  console.log("Body Biryani here ", biryanies);

  console.log(" body render allRestaurants", allRestaurants);

  useEffect(() => {
    // API Call
    getRestaurants();
   
  }, [searchText]);

  async function getRestaurants() {
    const data = await fetch(SWIGGY_APP_URL);
    const json = await data.json();
    console.log("App_URL",json);
    // optional Chaining
    setAllRestaurants(
      json?.data?.cards[4]?.card?.card?.gridElements?.infoWithStyle?.restaurants
    );
   
    setFilteredRestaurants(
      json?.data?.cards[4]?.card?.card?.gridElements?.infoWithStyle?.restaurants
    );

    setBiryanies(
      json?.data.cards[0]?.card?.card?.gridElements?.infoWithStyle?.info
    )
    // console.log("biryami", biryanies);

  }




  console.log("Render");

  const isOnline = useOnline();

  if (!isOnline) {
    return <h1>You are Offline Please Check your Internet connection!! </h1>;
  }

  // not render component (Early return)
  if (!allRestaurants) return null;

  //  if (filteredRestaurants?.length === 0)
  //  return <h1> No Restaurants match your Filter !!</h1>

  //Conditional Rendering
  return allRestaurants.length === 0 ? (
    <ShimmerUI />
  ) : (
    <>
      <input
        type="text"
        placeholder="XYZ"
        className="ml-10 border border-solid border-black"
        value={searchText}
        onChange={
          (e) => {
            setsearchTxt(e.target.value);
          }

          // console.log(e.target.value)
        }
      />
      
      <button
        className="px-4 py-1  bg-green-800 m-4 rounded-3xl border-solid"
        onClick={() => {
          // Need to filter the data
          const data = filterData(searchText, allRestaurants); // we need input box to search text here [searchTxt] is input and [resturant] where you have to search the text

          // update the state - restaurant
          setFilteredRestaurants(data);
        }}
      >
        Search
      </button>

      {/* <p className="ml-8">Heres the Search Text we write the updated Value</p> */}

      <div className="flex flex-wrap gap-5 ">
        {/* you have to write logic for No restuarant found here
         */}
        {filteredRestaurants.map((restaurant ) => {
          //{restaurantList.map((restaurant, index ) => {
          // Why we not use index as a key ??

          return (
            // eslint-disable-next-line react/jsx-key

            <Link
             
              key={restaurant?.info?.id}
              to={`/restaurants/${restaurant?.info?.id}`}
            >

{/* /* if the restaurant is open then add a promoted label to it  */ }
              {
             ( restaurant.info.isOpen) ?
               <RestaurantCardOpen {...restaurant?.info}/>
                : <RestaurantCard {...restaurant?.info} />
              }

             

            {/* <RestaurantCard  {...restaurant?.info} />

              */}
            </Link>

            //  {/* Why we not use index as a key ??
            //  To find out every item should have the unique id */}
          );
        })}
      </div>

      

     
      {
          biryanies.map((Biryani)=> {
            return (
              // eslint-disable-next-line react/jsx-key
              <>
            <div className="flex flex-wrap" >

              <Link>
              <BiyaniCards {...Biryani }    />
              </Link>
           

            </div>

              

              
              </>
             
             
            )
          })
        }
  
    </>
  );
};

export default Body;
