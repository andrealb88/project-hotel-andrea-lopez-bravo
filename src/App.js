
import {useState} from "react";
import './App.css';
import { HotelList } from './components/HOTELLIST/hotellist.jsx';
import { Header } from './components/HEADER/header';
import{hotelsData} from './components/hotels.js';
import { Filters } from "./components/FILTER/filter.jsx";

 function App() {
  const [dateFrom, setDateFrom] = useState();
  const [dateTo, setDateTo] = useState();
  const [country, setCountry] = useState("Todos los paises");
  const [price, setPrice] = useState("cualquier precio");
  const [size, setSize] = useState("all");


  const handlerDateFrom = (e) => {
    setDateFrom(e.target.vale);
  };
  const handlerDateTo = (e) =>{
    setDateTo(e.target.vale);
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

const newHotelsData = hotelsData.filter ((hotel) =>{
  return(
    (size === "all" ? true : 
                                        size === "small" ? hotel.rooms <= 10 :
                                        size === "Hotel mediano" ? hotel.rooms > 10 && hotel.rooms <=20:
                                        hotel.rooms > 20) &&
    (country === "Todos los paises" ? true : 
                                            hotel.country === country ) 
   /*  (price === "cualquier precio" ? true :
                                          price === "$"? hotel.price === 1 :
                                          price === "$$"? hotel.price === 2 :
                                          price === "$$$"? hotel.price === 3 :
                                          price === "$$$$"? hotel.price === 4 )
                                           */
  )
}) 

  return (
    <div className="App">
    <Header/>
    <Filters
    handlerDateFrom = {handlerDateFrom}
    dateFrom ={dateFrom}
    handlerDateTo = {handlerDateTo}
    dateTo = {dateTo}
    handlerCountry= {handlerCountry}
    country = {country}
    handlerPrice = {handlerPrice}
    price = {price}
    handlerSize = {handlerSize}
    size = {size}
    />
     <div className="result-card">
    <HotelList hotels={newHotelsData}
    />
     </div>
    </div>
  );
}

export default App;
