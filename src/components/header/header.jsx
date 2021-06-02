import "./header.css";
import {
  hasProp,
  hasAvailableFrom,
  getNaturalMonth
} from "./components/utils/header.jsx";



// export function Header(props) {
//   let naturalDate = (date) => {
//     let d = new Date(date + " 00:00"),
//         month = d.getMonth(),
//         day = d.getDate(),
//         year = d.getFullYear();

//     if (month === 0) {
//         month = "Enero"
//     } else if (month === 1){
//         month =  "Febrero"
//     } else if (month === 2){
//         month = "Marzo"
//     } else if (month === 3){
//         month = "Abril"
//     } else if (month === 4){
//         month = "Mayo"
//     } else if (month === 5){
//         month = "Junio"
//     } else if (month === 6){
//         month = "Julio"
//     } else if (month === 7){
//         month = "Agosto"
//     } else if (month === 8){
//         month = "Septiembre"
//     } else if (month === 9){
//         month = "Octubre"
//     } else if (month === 10){
//         month = "Noviembre"
//     } else  month = "Diciembre"

//     return  `${day} de ${month} del ${year}`   
//   }
//   return (
//     <header className= "header">
//       <p className="header-title">Reserva de Hoteles</p>
//       <h2 className="header-date">
//       {`Buscas hotel en ${props.country === "All" ? "todos los paises" : props.country}
//             con un precio ${props.price === "All" ? "cualquier precio": `${props.price}`} 
//             de un tamaño ${props.size === "All" ? "cualquier tamaño" : props.size}
//             desde la fecha: ${!props.date.from ? "_____" : naturalDate(props.date.from)}
//             hasta ${!props.date.to ? "_____" : naturalDate(props.date.to)}`}
//       </h2>
//     </header>
//   );
// }


export let Header = (props) => {
  return (
    <div className="header generalFont">
      <p className="header-title">Hoteles</p>
      <p className="header-date">
        {hasAvailableFrom(props.numberDateFrom) && (
          <p>
            desde el &nbsp;
            {props.date.from} &nbsp;
            {getNaturalMonth(props.numberMonthFrom)} de {props.numberYearFrom}
            &nbsp;
          </p>
        )}
        {hasAvailableFrom(props.numberDateTo) && (
          <p>
            hasta el &nbsp;{props.date.to}&nbsp;
            {getNaturalMonth(props.numberMonthTo)} de {props.numberYearTo}&nbsp;
          </p>
        )}
        {hasProp(props.country) && <p>en {props.country}&nbsp;</p>}
        {hasProp(props.size) && <p>tamaño&nbsp;{props.size}</p>}
        <span></span>
      </p>
    </div>
  );
};

