export function hasProp(propToCheck) {
    if (propToCheck === "todos") {
      return false;
    } else {
      return true;
    }
  }
  
  /* export function hasCountry(propCountry) {
    if (propCountry === "todos") {
      return false;
    } else {
      return true;
    }
  } */
  
  export function hasAvailableFrom(propsNumbersDate) {
    if (!propsNumbersDate) {
      return false;
    } else {
      return true;
    }
  }
  
  export function getNaturalMonth(numberMonth) {
    const months = [
      "Enero",
      "Febrero",
      "Marzo",
      "Abril",
      "Mayo",
      "Junio",
      "Julio",
      "Agosto",
      "Septiembre",
      "Octubre",
      "Noviembre",
      "Diciembre"
    ];
    let naturalMonth = "";
    switch (numberMonth) {
      case 0:
        naturalMonth = months[0];
        break;
      case 1:
        naturalMonth = months[1];
        break;
      case 2:
        naturalMonth = months[2];
        break;
      case 3:
        naturalMonth = months[3];
        break;
      case 4:
        naturalMonth = months[4];
        break;
      case 5:
        naturalMonth = months[5];
        break;
      case 6:
        naturalMonth = months[6];
        break;
      case 7:
        naturalMonth = months[7];
        break;
      case 8:
        naturalMonth = months[8];
        break;
      case 9:
        naturalMonth = months[9];
        break;
      case 10:
        naturalMonth = months[10];
        break;
      case 11:
        naturalMonth = months[11];
        break;
      default:
        break;
    }
    return naturalMonth;
  }
  