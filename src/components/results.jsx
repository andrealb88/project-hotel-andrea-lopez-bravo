/* import "../header.css";
import { Filters } from "./filter.jsx";

export function HotelResults(props) {
    const listFilter = props.hotelsData.filter((data) => {
        return (
          (props.countries === "todos los paises"
            ? true
            : data.countries === props.countries) &&
          (props.prices === "Cualquier precio" ? true : data.prices === props.prices)
          (props.size === "Cualquier tamaño" ? true : data.size === props.size)
        );
      });
      return (
          <div className ="results-filter">
              {listFilter.length > 0 ? (
                  listFilter.map((objeto) => {
                      return (
                        <Filters
                          state={objeto.stateDate}
                          handler={objeto.stateDate}
                          state={objeto.stateCountries}
                          handler={objeto.stateCountries}
                         />
                      );
                    })
                 ) : (
                     <p>No se encontraron resultados</p>
                 )}
              </div>
        );
    }
 */


