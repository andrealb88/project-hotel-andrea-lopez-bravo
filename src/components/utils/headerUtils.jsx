

export const getNaturalDate = (date) => {
  let d = new Date(date + " 00:00"),
    month = d.getMonth(),
    day = d.getDate(),
    year = d.getFullYear();

  if (month === 0) {
    month = "Enero";
  } else if (month === 1) {
    month = "Febrero";
  } else if (month === 2) {
    month = "Marzo";
  } else if (month === 3) {
    month = "Abril";
  } else if (month === 4) {
    month = "Mayo";
  } else if (month === 5) {
    month = "Junio";
  } else if (month === 6) {
    month = "Julio";
  } else if (month === 7) {
    month = "Agosto";
  } else if (month === 8) {
    month = "Septiembre";
  } else if (month === 9) {
    month = "Octubre";
  } else if (month === 10) {
    month = "Noviembre";
  } else month = "Diciembre";

  return `${day} de ${month} del ${year}`;
};
