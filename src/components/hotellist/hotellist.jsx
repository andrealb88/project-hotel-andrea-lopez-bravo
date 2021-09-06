import { Card } from "../card/card.jsx";
import React from "react";

export function HotelList(props) {
  return props.filterHotels.map((hotel, index) => {
    return (
      <Card
        key={index}
        description={hotel.description}
        photo={hotel.photo}
        name={hotel.name}
        city={hotel.city}
        country={hotel.country}
        rooms={hotel.rooms}
        price={hotel.price}
      />
    );
  });
}
