import RestaurantCard from "./RestaurantCard.js"
import resData from "../utils/resData.js"
import {useState} from "react";

let filterBtnName = "Top Rated Restaurants";
const Body = ()=>{
    const [listOfRestaurants,setlistOfRestaurants] = useState(resData);
    return (<div className = "body">
    <div className = "filter-btn">
        <button onClick={()=>{
            if(listOfRestaurants===resData){
                filterBtnName ="All Restaurants"
                setlistOfRestaurants(listOfRestaurants.filter((res)=>{
                    return res.info.avgRating >=4.5;
                }));
            }else{
                filterBtnName = "Top Rated Restaurants";
                setlistOfRestaurants(resData);
            }
        }    
        }>{filterBtnName}</button>
    </div>
    <div className = "res-container">
        {listOfRestaurants.map((res) =>(
            <RestaurantCard key={res.info.id} props={res.info} />
        ))}
    </div>
    </div>
    )
}

export default Body;