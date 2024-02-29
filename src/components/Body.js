import RestaurantCard from "./RestaurantCard.js"
import resData from "../utils/resData.js"
import {useState} from "react";
const Body = ()=>{
    const [filterBtnName,setfilterBtnName] = useState("Top Rated Restaurants");
    const [listOfRestaurants,setlistOfRestaurants] = useState(resData);
    return (<div className = "body">
    <div className = "filter-btn">
        <button onClick={()=>{
            if(listOfRestaurants===resData){
                setfilterBtnName("All Restaurants");
                setlistOfRestaurants(listOfRestaurants.filter((res)=>{
                    return res.info.avgRating >=4.5;
                }));
            }else{
                setfilterBtnName("Top Rated Restaurants");
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