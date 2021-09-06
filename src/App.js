import React from "react";
import { useEffect, useState } from "react";
import "./App.css";
import { HotelList } from "./components/hotellist/hotellist.jsx";
import { Header } from "./components/header/header";
import { Error } from "./components/error/error";
import { hotelsData } from "./hotels";
import { Filters } from "./components/filter/filter";
import { Card } from "./components/card/card";
import { dateToUnix, beforeDateStatus } from "./utils/dateUtils";
import { Footer } from "./components/footer/footer";

export default function App() {
  const [size, setSize] = useState("All");
  const [filterHotels, setFilterHotels] = useState([hotelsData]);
  const [price, setPrice] = useState("All");
  const [country, setCountry] = useState("All");
  const [date, setDate] = useState({
    from: "",
    to: "",
  });
  const [dateUnix, setDateUnix] = useState({
    from: "",
    to: "",
  });
  const [numberMonthTo, setNumberMonthTo] = useState();
  const [numberYearTo, setNumberYearTo] = useState();
  const [numberMonthFrom, setNumberMonthFrom] = useState();
  const [numberYearFrom, setNumberYearFrom] = useState();

  const handlerCountry = (e) => {
    const country = e.target.value;
    setCountry(country);
  };
  const handlerPrice = (e) => {
    const price = e.target.value;
    setPrice(price);
  };
  const handlerSize = (e) => {
    const size = e.target.value;
    setSize(size);
  };
  const handlerDate = (key, value) => {
    if (beforeDateStatus(value)) {
      alert(`Seleccione una fecha igual o posterior a la fecha de hoy`);
    } else {
      const newDate = { ...date, [key]: value };

      if (new Date(newDate.from) > new Date(newDate.to)) {
        alert(`la fecha DESDE debe ser menor a la fecha HASTA`);
      } else if (new Date(newDate.to) < new Date(newDate.from)) {
        alert(`la fecha HASTA debe ser mayor a la fecha DESDE`);
      } else setDate(newDate);
      if (newDate.from !== "" && newDate.to !== "") {
        const newDateUnix = dateToUnix(newDate);
        setDateUnix(newDateUnix);
      }
    }
  };
  const handlerNumberMonthTo = (e) => {
    const numberMonthTo = e.target.value;
    setNumberMonthTo(numberMonthTo);
  };
  const handlerNumberMonthFrom = (e) => {
    const numberMonthFrom = e.target.value;
    setNumberMonthFrom(numberMonthFrom);
  };
  const handlerNumberYearTo = (e) => {
    const numberYearTo = e.target.value;
    setNumberYearTo(numberYearTo);
  };
  const handlerNumberYearFrom = (e) => {
    const numberYearFrom = e.target.value;
    setNumberYearFrom(numberYearFrom);
  };
  const handlerReset = (e) => {
    const userDateEmpty = {
      from: "",
      to: "",
    };
    setDate(userDateEmpty);
    setDateUnix(userDateEmpty);
    setCountry("All");
    setPrice("All");
    setSize("All");
    setNumberMonthFrom("");
    setNumberMonthTo("");
    setNumberYearTo("");
    setNumberYearFrom("");
  };
  useEffect(() => {
    const filterByDate = (hotel) =>
      (!dateUnix.from || dateUnix.from >= hotel.availabilityFrom) &&
      (!dateUnix.to || dateUnix.to <= hotel.availabilityTo);
    const filterBySize = (hotel) => {
      if (size === "All") {
        return true;
      } else if (size === "small") {
        return hotel.rooms <= 10;
      } else if (size === "medium") {
        return hotel.rooms > 10 && hotel.rooms <= 20;
      } else return hotel.rooms > 20;
    };
    const filterByCountry = (hotel) => {
      if (country === "All") {
        return true;
      } else return country === hotel.country;
    };
    const filterByPrice = (hotel) => {
      if (price === "All") {
        return true;
      } else if (price === "1") {
        return hotel.price === 1;
      } else if (price === "2") {
        return hotel.price === 2;
      } else if (price === "3") {
        return hotel.price === 3;
      } else return hotel.price === 4;
    };

    const filterHotels = hotelsData.filter(
      (hotel) =>
        filterBySize(hotel) &&
        filterByCountry(hotel) &&
        filterByPrice(hotel) &&
        filterByDate(hotel)
    );
    setFilterHotels(filterHotels);
  }, [size, price, country, date]);
  return (
    <div className="App">
      <Header
        date={date}
        country={country}
        price={price}
        size={size}
        handlerNumberMonthTo={handlerNumberMonthTo}
        numberMonthTo={numberMonthTo}
        handlerNumberYearTo={handlerNumberYearTo}
        numberYearTo={numberYearTo}
        handlerNumberYearFrom={handlerNumberYearFrom}
        numberYearFrom={numberYearFrom}
        handlerNumberMonthFrom={handlerNumberMonthFrom}
        numberMonthFrom={numberMonthFrom}
      />
      <Filters
        handlerDate={handlerDate}
        date={date}
        handlerCountry={handlerCountry}
        country={country}
        handlerPrice={handlerPrice}
        price={price}
        handlerSize={handlerSize}
        size={size}
        handlerReset={handlerReset}
      />
      <div className="result-card">
        <HotelList filterHotels={filterHotels} />
        <div className="container-cards">
          {filterHotels.length > 0 ? (
            filterHotels.map((hotel, index) => (
              <Card
                key={index}
                name={hotel.name}
                photo={hotel.photo}
                description={hotel.description}
                rooms={hotel.rooms}
                city={hotel.city}
                country={hotel.country}
                price={hotel.price}
              />
            ))
          ) : (
            <Error />
          )}
        </div>
      </div>
      <Footer />
    </div>
  );
}
