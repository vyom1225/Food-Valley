import IMG_URL from "../utils/constants.js"
const RestaurantCard =(res)=>{
      const{
         name,
         cuisines,
         cloudinaryImageId,
         avgRating,
      } = res.props;
     return (<div className = "res-card">
         <div className="res-logo-container">
             <img className ="res-logo" alt="restaurant image" src={IMG_URL+cloudinaryImageId}></img>
         </div>
         <div className="res-details">
             <h3>{name}</h3>
             <h4>{cuisines.join(", ")}</h4>
             <h4>Ratings: {avgRating}</h4>
         </div>
     </div> );
 };
 export default RestaurantCard;