import"./header.css"


export function Header() {
  return (
    <header className= "header">
      <p className="header-title">Hoteles</p>
      <p className="header-date">
          Desde <b>el martes, 1 de enero de 2019</b>
          hasta el<b>miercoles, 2 de enero 2019</b>
      </p>
    </header>
  );
}
