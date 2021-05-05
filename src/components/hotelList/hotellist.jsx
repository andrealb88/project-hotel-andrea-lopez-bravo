import { Card } from "./card/card.jsx";

export function HotelList(props) {
    return props.hotelsData.map(function (hotel) {
        return (
            <Card
                key={hotel.name}
                description={hotel.description}
                name={hotel.name}
                location={hotel.location}
                rooms={hotel.rooms}
                price={hotel.price}
            />
        );
    });
 }
console.log(HotelList(props))