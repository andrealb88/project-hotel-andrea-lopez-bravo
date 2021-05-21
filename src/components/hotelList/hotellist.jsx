import { Card } from "../card/card.jsx";

export function HotelList(props) {
 return props.hotels.map ((hotel,index) =>{
    return ( 
            <Card
            key={index}
            description={hotel.description}
            photo={hotel.photo}
            name={hotel.name}
            city= {hotel.city}
            country={hotel.country}
            rooms={hotel.rooms}
            price={hotel.price}
        />
         ); 
   
    })} 