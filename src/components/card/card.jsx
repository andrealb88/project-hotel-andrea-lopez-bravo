import React from "react";
import "./card.css";
import { alertReserve } from "../../utils/cardUtils.jsx";

export function Card(props) {
  let quantyDolars = ["", ""];
  function calcDolars(whiteDolars) {
    for (let step = 0; step < whiteDolars; step++) {
      quantyDolars[0] = quantyDolars[0] + "$";
    }

    let tempGreyQuanty = 4 - whiteDolars;

    for (let step = 0; step < tempGreyQuanty; step++) {
      quantyDolars[1] = quantyDolars[1] + "$";
    }
    return quantyDolars;
  }
  calcDolars(props.price);
  return (
    <div className="container-card">
      <img src={props.photo} alt="imageHotel" />
      <p className="hotel-title">{props.name}</p>
      <p className="description">{props.description}</p>
      <div className="location-room-price">
        <div className="big-container">
          <div className="blue-container">
            <img
              className="svgCardLocate"
              src="./assets/svg/svgLocate.svg"
              height="20"
              alt="locate"
            />
          </div>
          <div className="box-text">
            <p className="location">
              {props.city} ,{props.country}
            </p>
          </div>
        </div>
        <div className="big-container-flex-row">
          <div className="blue-container">
            <img
              className="svgCardLocate"
              src="./assets/svg/svgCardRooms.svg"
              height="15"
              alt="locate"
            />
          </div>
          <div className="box-text">
            <p>{props.rooms} habitaciones </p>
          </div>
          <div className="price-container">
            <span className="whiteDolars">{quantyDolars[0]}</span>
            <span className="greyDolars">{quantyDolars[1]}</span>
          </div>
        </div>
      </div>

      <button className="card-button" onClick={alertReserve}>
        Reservar
      </button>
    </div>
  );
}
