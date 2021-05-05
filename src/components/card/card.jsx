import "./card.css"

export function Card(props){
    return(
    <div>    
    <p>{props.name}</p>
    <p>{props.description}</p>  
    <div>
        <p>{props.location} </p> 
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