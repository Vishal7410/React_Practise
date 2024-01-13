import { FOOD_IMG_CDN } from "../Contant/Contant";

// const CardData =  {
//   image: "https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_660/dkds8g7ak8rneieejko6",
//   name: "Birayani",
//   cusines : ["Burger","American"],// these is an array if you to do in the multilple item and you want to sepration then it will be show
//   rating: "4.2",
//   tagline : "North indian, Chinese, best pulav"

// }

// learn about the optional chaining and all ..
// const card = {user?.image?.data?.name}

 const Cards = ({
  cloudinaryImageId,
  name,
  cuisines,
  areaName,
  sla,
  costForTwo,
  avgRatingString,
    //areaName,
   // differentiatedUi
    

  }) => {
    // console.log(restaurant);
    return (
      <div className="Cards">
        
        <img
          className="Card_Image"
          src={
             FOOD_IMG_CDN+cloudinaryImageId
          }
        /> <br />
  
        <div className="set_aline">
          <h3 className="Item_heading">{name}</h3>
  
          <h4>{areaName}</h4>
          <h4>{sla?.slaString}</h4>
          
  
          <div className="Card_Details">
            <h4>{cuisines.join(", ")} </h4>  
            {/* <h5>{costForTwo}</h5>     */}
            <p>Avg.Rating {avgRatingString}</p> 
  
            {/* <p>Locality: {restaurant.data?.locality}</p>  restaurant.data?.locality */}
            <p>{costForTwo}</p>
          </div>
        </div>
      </div>
    );
  };
  export default Cards;