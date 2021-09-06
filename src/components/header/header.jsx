import "./header.css";
import { getNaturalDate } from "../../utils/headerUtils.jsx";
import React from "react";

export let Header = (props) => {
  return (
    <header className="header">
      <div className="flex-row">
        <h1 className="header-title">Hoteles</h1>
      </div>
      <h2 className="font-roboto-detail-header">
        {`Búsqueda para hoteles: 
      ${props.size === "All" ? "" : `tamaño ${props.size} -`} 
      ${props.price === "All" ? "" : `nivel de precio: ${props.price} -`} 
      ${
        !props.date.from ? "" : `desde el ${getNaturalDate(props.date.from)} -`
      } 
      ${!props.date.to ? "" : `hasta el ${getNaturalDate(props.date.to)} -`} 
      ${props.country === "All" ? "" : `en ${props.country}`}
      `}
      </h2>
    </header>
  );
};
