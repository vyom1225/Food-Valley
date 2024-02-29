import RestaurantCard from "./RestaurantCard.js"
import resData from "../utils/resData.js"
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

export default Body;