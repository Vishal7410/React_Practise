import { useState } from "react";
import Cards from "../Cards/Cards";
import { restaurantList } from "../Contant/Contant";

function filterData(searchText, restaurants) {
  const filterData =  restaurants.filter((restaurant) =>
  restaurant.data.name.includes(searchText)
  );
  return filterData;
 // console.log(filterData);
}
// console.log(filterData);

 const Body = () => {
  
  
     const [restaurants, setRestaurants] = useState(restaurantList);
     const [searchText, setsearchTxt ] = useState("");
 // const[SearchBtn, setSearchBtn] =useState("");
 


  return (
    <>

    <input 
    type="text"
    placeholder="XYZ"
    className="search_input"
    value={searchText}
    onChange={(e)=> 
      { setsearchTxt(e.target.value)}
     
      // console.log(e.target.value)
    }
     />
    <button onClick={()=> {
     

// Need to filter the data
const data = filterData(searchText, restaurants); // we need input box to search text here [searchTxt] is input and [resturant] where you have to search the text

// update the state - restaurant
    setRestaurants(data);

      
    }}
    >Search</button>
    <p>Heres the Search Text we write the updated Value</p>
   
     <div className="body_card">
      {restaurants.map((restaurant) => {
        //{restaurantList.map((restaurant, index ) => {
        // Why we not use index as a key ??

        return (
          <Cards {...restaurant.data} key={restaurant.data.id} />
          // Why we not use index as a key ??
          // To find out every item should have the unique id
        );
      })}
     
    </div>
    
    </>
   
  );
};

export default Body;
