import "./card.css"

export function Card(props){
    let quantyDolars = ["", ""];
    function calcDolars(whiteDolars) {
      for (let step = 0; step < whiteDolars; step++) {
        quantyDolars[0] = quantyDolars[0] + "$";
      }
  
      let tempGreyQuanty = 4 - whiteDolars;
  
      for (let step = 0; step < tempGreyQuanty; step++) {
        quantyDolars[1] = quantyDolars[1] + "$";
      }
      return quantyDolars;
    }
    calcDolars(props.price);
    return(
    <div className="container-card">    
    <img src= {props.photo} alt="imageHotel" />
    <p>{props.name}</p>
    <p>{props.description}</p>  
    <div>
    {props.city} , {props.country}
    </div>
    <div>
        <p>{props.rooms} habitaciones </p>
    </div>
    <div>
        <p>{props.price} </p>
        <span className="whiteDolars">{quantyDolars[0]}</span>
        <span className="greyDolars">{quantyDolars[1]}</span>
    </div>
    <button className="card-button">Reservar</button>
    </div>    
    )
}