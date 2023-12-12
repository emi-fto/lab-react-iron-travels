import travelPlansData from "../assets/travel-plans.json";
import { useState } from 'react';

function TravelList () {
    const [travels, setTravels] = useState(travelPlansData);
    
    return (
        <div>
          <h2>Travel List</h2>
          {travels.map(travel => {
            return (
                <div key={travel.id} className="TravelCard">
                    <img src={travel.image} alt="destinations images"/>
                    <h3>{travel.destination} {travel.days} Days</h3>
                    <p>{travel.description}</p>
                    <p><b>Price: </b> {travel.totalCost} €</p>
                </div> 
              )
          })}
        </div>
      );
}

export default TravelList;