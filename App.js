import React from "react";
import ReactDOM from "react-dom/client";
import logo from './food-mansion.jpg';
import {resData} from "./resData.js";
const Header = ()=>(
    <div className = "header">
        <div className = "logo-container">
            <img src = {logo} className = "logo"></img>
        </div>
        <div className = "list-container">
            <ul>
                <li>Home</li>
                <li>About Us</li>
                <li>Login</li>
                <li>Contact Us</li>
            </ul>
        </div>
    </div>
)

const RestaurantCard =(res)=>{
     const {
       cloudinaryImageId,
       cuisines,
       avgRating,
       areaName,
    } = res
    return (<div className = "res-card">
            <img className ="res-logo" alt="restaurant image" src={"https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_660/"+ cloudinaryImageId}></img>
        
        <h4>{cuisines.join(", ")}</h4>
        <h4>{avgRating}</h4>
        <h4>{areaName}</h4>
    </div> )
};

const Body = ()=>(
    <div className = "body">
    <div className = "search-bar">
        <button>Search</button>
    </div>
    <div className = "res-container">
        {resData.map((res) =>(
            <RestaurantCard key={res.info.id} props={res.info} />
        ))}
    </div>
    </div>
)



const AppLayout = () => (
        <>
            <Header/>
            <Body/>
        </>
)
const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<AppLayout/>);
