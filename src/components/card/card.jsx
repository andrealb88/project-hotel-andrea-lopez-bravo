import "./card.css"

export function Card(props){
    return(
    <div className="container-card">    
    <img src= {props.photo} alt="imageHotel" />
    <p>{props.name}</p>
    <p>{props.description}</p>  
    <div>
        <p>{props.city} </p> 
    </div>
    <div>
    <p>{props.country}</p>
    </div>
    <div>
        <p>{props.rooms} habitaciones </p>
    </div>
    <div>
        <p>{props.price} </p>
    </div>
    </div>    

    )
}