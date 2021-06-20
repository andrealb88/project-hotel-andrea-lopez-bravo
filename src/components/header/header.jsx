import "./header.css";
import { getNaturalDate } from "../utils/headerUtils.jsx";

export let Header = (props) => {
  return (
    <header className="header">
      <div className="flex-row">
        <h1 className="header-title">Hoteles</h1>
      </div>
      <h2 className="font-roboto-detail-header">{`Búsqueda para hoteles: 
      ${props.size === "all" ? "cualquier tamaño" : props.size}, 
      de precio ${
        props.price === "all" ? "indefinido" : `nivel: ${props.price}`
      }, 
      desde el ${!props.date.from ? "___" : getNaturalDate(props.date.from)} 
      hasta el ${!props.date.to ? "___" : getNaturalDate(props.date.to)} 
      en ${props.country === "all" ? "todos los países" : props.country}`}</h2>
    </header>
  );
};
