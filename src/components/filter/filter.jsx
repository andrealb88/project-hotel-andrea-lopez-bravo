import "./filter.css";

export function Filters(props) {
  return (
    <div className="filters">
      <div className="filter-container">
        <label className="filter-label">
          <img
            src="./assets/svg/svgIngreso.svg"
            height="15"
            alt="svg-ingreso"
          />
          <input
            type="date"
            value={props.date.from}
            className="filter-input-date"
            onChange={({ target }) => props.handlerDate("from", target.value)}
          ></input>
        </label>
        <label className="filter-label">
          <img src="./assets/svg/svgEgreso.svg" height="15" alt="svg-Egreso" />
          <input
            type="date"
            value={props.date.to}
            className="filter-input-date"
            onChange={({ target }) => props.handlerDate("to", target.value)}
          ></input>
        </label>
        <label className="filter-label">
          <img
            className="imgWorld"
            src="./assets/svg/svgWorld.svg"
            height="15"
            alt="svg-world"
          />
          <select
            value={props.country}
            onChange={props.handlerCountry}
            className="select-filter"
          >
            <option disabled value="All">
              {" "}
              Seleccione el país
            </option>
            <option value="todos los paises">Todos los paises</option>
            <option value="Argentina">Argentina</option>
            <option value="Brasil">Brasil</option>
            <option value="Chile">Chile</option>
            <option value="Uruguay">Uruguay</option>
          </select>
        </label>
        <label className="filter-label">
          <img
            className="imgDolar"
            src="./assets/svg/svgDolar.svg"
            height="15"
            alt="svg-ingreso"
          />
          <select
            value={props.price}
            onChange={props.handlerPrice}
            className="select-filter"
          >
            <option disabled value="All">
              {" "}
              Seleccione el precio
            </option>
            <option value="cualquier precio">Cualquier precio</option>
            <option value="1">$</option>
            <option value="2">$$</option>
            <option value="3">$$$</option>
            <option value="4">$$$$</option>
          </select>
        </label>
        <label className="filter-label">
          <img src="./assets/svg/svgRooms.svg" height="15" alt="svg-size" />
          <select
            value={props.size}
            onChange={props.handlerSize}
            className="select-filter"
          >
            <option disabled value="All">
              {" "}
              Seleccione el tamaño
            </option>
            <option value="cualquier tamaño">Cualquier tamaño</option>
            <option value="small">Hotel pequeño</option>
            <option value="medium">Hotel mediano</option>
            <option value="big">Hotel grande</option>
          </select>
        </label>
        <button className="buttonReset" onClick={props.handlerReset}>
          Limpiar filtros
        </button>
      </div>
    </div>
  );
}
