import "./header.css";
import {
  hasProp,
  hasAvailableFrom,
  getNaturalMonth
} from "../utils/headerUtils.jsx";


export let Header = (props) => {
  return (
    <div className="header-generalFont">
      <div className="header-title">Hoteles</div>
      <div className="header-date">
        {hasAvailableFrom(props.date.From) && (
          <p>
            desde el &nbsp;{props.date.from} &nbsp;
            {getNaturalMonth(props.numberMonthFrom)} de {props.numberYearFrom}
            &nbsp;
          </p>
        )}
        {hasAvailableFrom(props.date.to) && (
          <p>
            hasta el &nbsp;{props.date.to}&nbsp;
            {getNaturalMonth(props.numberMonthTo)} de {props.numberYearTo}&nbsp;
          </p>
        )}
        {hasProp(props.country) && <p>en {props.country}&nbsp;</p>}
        {hasProp(props.size) && <p>tamaño&nbsp;{props.size}</p>}
        <span></span>
      </div>
    </div>
  );
};
