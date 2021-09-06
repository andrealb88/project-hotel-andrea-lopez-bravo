import React from "react";

export const Error = () => {
  return (
    <div className="container-no-result">
      <h2 className="font-roboto">Lo sentimos</h2>
      <img className="not-found" src="images/not-found.png" alt="" />
      <p className="font-roboto">
        No se han encontrado resultados coincidentes con la busqueda.
        <br />
        Le sugerimos realizar una nueva busqueda.
        <br />
        Para inicializar una nueva busqueda debe limpiar los filtros
        preexistentes.
      </p>
    </div>
  );
};