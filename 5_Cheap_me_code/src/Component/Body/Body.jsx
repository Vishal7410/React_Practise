import Cards from "../Cards/Cards";
import { restaurantList } from "../Contant/Contant";

export const Body = () => {
    return (
      <div className="body_card">
       {restaurantList.map((restaurant ) => {
  
        //{restaurantList.map((restaurant, index ) => {
          // Why we not use index as a key ??  
  
        
        return(
         <Cards {...restaurant.data} key={restaurant.data.id}/> 
          // Why we not use index as a key ??  
        )
      })}
      
  
        {/* Instated of these you can do these also */}
        {/* <Cards
        //Instade of these you can you these
  
          // name={restaurantList[0].data?.name} // These is reason we used the ...sprade operator
          // cuisines={restaurantList[0].data?.cuisines}
          
          {...restaurantList[0].data}
        />
        <Cards
          {...restaurantList[1].data} // See How you do these...with the help of these use can you all your data without getting one by it give all data in one oprator with using these
        // So,  you got it how you do know
         />                            
        <Cards
          {...restaurantList[2].data} 
  
           />
          
          */}
          
       
      </div>
    );
  };