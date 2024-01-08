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
    name,
    cloudinaryImageId,
    slaString,
    costForTwoString,
    cuisines,
    locality,
    area,
  }) => {
    // console.log(restaurant);
    return (
      <div className="Cards">
        <img
          className="Card_Image"
          src={
             FOOD_IMG_CDN +
            // eslint-disable-next-line react/prop-types
            cloudinaryImageId
          }
        />
  
        <div className="set_aline">
          <h3 className="Item_heading">{name}</h3>
  
          <h4>{costForTwoString}</h4>
          <h4>{slaString}</h4>
          <br />
  
          <div className="Card_Details">
            <p>{cuisines}</p>
            <p>{locality}</p>
  
            {/* <p>Locality: {restaurant.data?.locality}</p>  restaurant.data?.locality */}
            <p>{area}</p>
          </div>
        </div>
      </div>
    );
  };
  export default Cards;