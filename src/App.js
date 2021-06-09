import { useEffect, useState } from "react";
import "./App.css";
import { HotelList } from "./components/hotellist/hotellist.jsx";
import { Header } from "./components/header/header";
import { hotelsData } from "./components/hotels";
import { Filters } from "./components/filter/filter";
import {
  dateToUnix,
  beforeDateStatus,
  dateUnixFromInput,
} from "./components/utils/dateutils";

function App() {
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
    // setDate({ ...date, [key]: value });
    if (beforeDateStatus(value)) {
      alert(`Seleccione una fecha igual o posterior a la fecha de hoy`);
    } else {
      if (key === "from") {
        const newDate = { ...date, [key]: value };
        setDate(newDate);
      } else if (
        key === "to" &&
        dateUnixFromInput(value) >= dateUnixFromInput(date.from)
      ) {
        const newDate = { ...date, [key]: value };
        setDate(newDate);
        if (newDate.from !== "" && newDate.to !== "") {
          const newDateUnix = dateToUnix(newDate);
          setDateUnix(newDateUnix);
        } else {
          alert(`la fecha HASTA debe ser mayor a la fecha DESDE`);
        }
      }
    }
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
  };

  const dateFilteredHotels = () => {
    let newHotelsFilter = [...hotelsData];
    if (date.from !== "" && date.to !== "") {
      // const date = new Date(date);
      // const dateFromUnix = new Date("${date.from} 00:00:00").valueOf();
      // const dateToUnix = new Date("${date.to} 00:00:00").valueOf();
      newHotelsFilter = hotelsData.filter((hotel) => {
        const canFrom = dateUnix.from >= hotel.availablilityFrom;
        const canTo = dateUnix.to <= hotel.availabilityTo;
        return canFrom && canTo;
      });
    }
    setFilterHotels(newHotelsFilter);
  };

  useEffect(dateFilteredHotels, [date, dateUnix.from, dateUnix.to]);

  useEffect(() => {
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

    const filterHotels = hotelsData.filter((hotel) => {
      return (
        filterBySize(hotel) && filterByCountry(hotel) && filterByPrice(hotel)
      );
    });
    setFilterHotels(filterHotels);
  }, [size, price, country]);
  return (
    <div className="App">
      <Header />
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
      </div>
    </div>
  );
}

export default App;
// setHotels(newHotels);

/// const newFilterHotels = () => (newHotels = [...hotelsData]);
// const availableFrom = new Date(hotel.availabilityFrom);
// const availableTo = new Date(hotel.availabilityTo);

// useEffect(filterHotels, [date, country, price, size]);
// console.log("hotels", hotels);
