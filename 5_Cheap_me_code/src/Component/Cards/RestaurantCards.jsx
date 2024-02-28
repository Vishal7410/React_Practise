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

const RestaurantCard = ({
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
    <>
      <div className="m-4 p-4 w-[200px] overflow-hidden whitespace-nowrap bg-red-200">
       
          <img
            src={FOOD_IMG_CDN + cloudinaryImageId}
            alt=""
            className="res-logo"
          />
        

      
          <h3>{name}</h3>

          <h4>{areaName}</h4>
          <h4>{sla?.slaString}</h4>
          <h4 >{cuisines.join(",")} </h4>
            {/* <h5>{costForTwo}</h5>     */}
          <h4>Avg.Rating {avgRatingString}</h4>

            {/* <p>Locality: {restaurant.data?.locality}</p>  restaurant.data?.locality */}
            <h4>{costForTwo}</h4>
         
       
      </div>
    </>
  );
};


//Higher order function for the which is open restroaunt and close

// input - RestaurantCard ==>> RestaurantCard is OPen

export const WithOpenCard = (RestaurantCard) => {
  // eslint-disable-next-line react/display-name
  return(props)=> {
    return(
      <div>
        <label className="absolute bg-black text-white  ml-2 rounded-lg" >Open Now</label>
        <RestaurantCard {...props}/>
      
      </div>
    );
    
  };
};






export default RestaurantCard;















//   <div className="">
//     <div className=" object-contain w-50 h-100 bg-red-400">
//       <img

//         src={FOOD_IMG_CDN + cloudinaryImageId}
//       />

//       <div className="">
//         <h3 className="">{name}</h3>

//         <h4>{areaName}</h4>
//         <h4>{sla?.slaString}</h4>

//         <div className="">
//           <h4>{cuisines.join(", ")} </h4>
//           {/* <h5>{costForTwo}</h5>     */}
//           <p>Avg.Rating {avgRatingString}</p>

//           {/* <p>Locality: {restaurant.data?.locality}</p>  restaurant.data?.locality */}
//           <p>{costForTwo}</p>
//         </div>
//       </div>
//     </div>
//   </div>
// );
//};
