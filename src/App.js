import { useEffect, useState } from "react";
import "./App.css";
import { HotelList } from "./components/hotellist/hotellist.jsx";
import { Header } from "./components/header/header";
import { hotelsData } from "./components/hotels.js";
import { Filters } from "./components/filter/filter.jsx";

function App() {
  const [hotels, setHotels] = useState(hotelsData);
  const [dateFrom, setDateFrom] = useState("");
  const [dateTo, setDateTo] = useState("");
  const [country, setCountry] = useState("Todos los paises");
  const [price, setPrice] = useState("cualquier precio");
  const [size, setSize] = useState("all");

  const handlerDateFrom = (e) => {
    setDateFrom(e.target.value);
  };
  const handlerDateTo = (e) => {
    setDateTo(e.target.value);
  };
  const handlerCountry = (e) => {
    setCountry(e.target.value);
  };
  const handlerPrice = (e) => {
    setPrice(e.target.value);
  };
  const handlerSize = (e) => {
    setSize(e.target.value);
  };

  const filterHotels = () => {
    let newHotels = [...hotelsData];
    if (size !== "all") {
      newHotels = newHotels.filter((hotel) =>
        size === "small"
          ? hotel.rooms <= 10
          : size === "medium"
          ? hotel.rooms > 10 && hotel.rooms <= 20
          : hotel.rooms > 20
      );
    }
    if (price !== "cualquier precio") {
      newHotels = newHotels.filter((hotel) => {
        return price === "$"
          ? hotel.price === 1
          : price === "$$"
          ? hotel.price === 2
          : price === "$$$"
          ? hotel.price === 3
          : hotel.price === 4;
      });
    }
    if (dateFrom !== "" && dateTo !== "") {
      const newDateFrom = new Date(dateFrom);
      const newDateTo = new Date(dateTo);
      newHotels = newHotels.filter((hotel) => {
        const availableFrom = new Date(hotel.availabilityFrom);
        const availableTo = new Date(hotel.availabilityTo);
        const canFrom = newDateFrom >= availableFrom;
        const canTo = newDateTo <= availableTo;

        return canFrom && canTo;
      });
    }
    setHotels(newHotels);
  };

  //   return(
  //     (size === "all" ? true :

  //     (country === "Todos los paises" ? true :
  //                                             hotel.country === country ) /* && */
  // // /*  (price === "cualquier precio" ? true :
  //                                           price === "$"? hotel.price === 1 :
  //                                           price === "$$"? hotel.price === 2 :
  //                                           price === "$$$"? hotel.price === 3 :
  //                                           price === "$$$$"? hotel.price === 4 )    */

  //                                          )
  //   )
  // })
  useEffect(filterHotels, [dateFrom, dateTo, country, price, size]);
  console.log("hotels", hotels);
  return (
    <div className="App">
      <Header />
      <Filters
        handlerDateFrom={handlerDateFrom}
        dateFrom={dateFrom}
        handlerDateTo={handlerDateTo}
        dateTo={dateTo}
        handlerCountry={handlerCountry}
        country={country}
        handlerPrice={handlerPrice}
        price={price}
        handlerSize={handlerSize}
        size={size}
      />
      <div className="result-card">
        <HotelList hotels={hotels} />
      </div>
    </div>
  );
}

export default App;
