export function Filters(props) {
  return (
    <div className="filters">
      <div className="filter-container">
      <input
      value={props.dateFrom}
      onChange={props.handlerDateFrom}
      className="input"
      type="date"
    ></input>
      <input
      value={props.dateTo}
      onChange={props.handlerDateTo}
      className="input"
      type="date"
    ></input>
    <select value={props.country} onChange={props.handlerCountry} className="select">
      <option value="Todos los paises">Todos los paises</option>
      <option value="Argentina">Argentina</option>
      <option value="Brasil">Brasil</option>
      <option value="Chile">Chile</option>
      <option value="Uruguay">Uruguay</option>
    </select>
    <select value={props.price} onChange={props.handlerPrice} className="select">
      <option value="cualquier precio">Cualquier precio</option>
      <option value="1">$</option>
      <option value="2">$$</option>
      <option value="3">$$$</option>
      <option value="4">$$$$</option>
    </select>
    <select value={props.size} onChange={props.handlerSize} className="select">
      <option value="all">Cualquier tamaño</option>
      <option value="small">Hotel pequeño</option>
      <option value="medium">Hotel mediano</option>
      <option value="big">Hotel grande</option>
    </select>
      </div>
    </div>
  );
}

