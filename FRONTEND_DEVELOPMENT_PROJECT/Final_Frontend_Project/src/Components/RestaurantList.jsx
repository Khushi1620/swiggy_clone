import { useEffect, useState } from "react";
import RestCard from "./RestCard";
import Shimmer from "./Shimmer";
import headerRestaurant from "../assets/headerRestaurant.jpg"

export default function RestaurantList() {

    const [RestData, setRestData] = useState([]);

    useEffect(()=> {
       async function fetchData() {
         const proxyServerRequest = "https://thingproxy.freeboard.io/fetch/"
         const swiggyApi = "https://www.swiggy.com/dapi/restaurants/list/v5?lat=28.65420&lng=77.23730&is-seo-homepage-enabled=true";
         const response = await fetch(proxyServerRequest+swiggyApi);
         const data = await response.json();
         setRestData(data.data.cards[1].card.card.gridElements.infoWithStyle.restaurants);
       }
       fetchData();
    }, [])
    // Shimmer effect 
    if (RestData.length == 0) {
        return <Shimmer></Shimmer>
    }
    return(
       <div className="w-[80%] mx-auto mt-20 relative">
        <img className="h-90 w-800 rounded-4xl mb-20" src={headerRestaurant} alt="" />
        <h1 className="text-4xl absolute top-50 left-10 text-white font-bold">Explore Top Restaurants For</h1>
        <h1 className="text-4xl absolute top-61 left-10 text-white font-bold">Food Delivery at Home</h1>
        <h1 className="text-4xl font-extrabold">Restaurants with online food delivery in Delhi</h1>
        <div className="flex flex-wrap mx-auto mt-8 gap-5">
            {
              RestData.map((RestInfo)=><RestCard key={RestInfo.info.id} RestInfo={RestInfo}></RestCard>)
            }
        </div>
        </div>
    )
}