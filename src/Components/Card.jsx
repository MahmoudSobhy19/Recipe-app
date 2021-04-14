import React from 'react';
import { Link } from "react-router-dom";


const Card = (props) => {
    return ( 
        <div className="card">
            <img src={props.image_url} alt={props.title}/>
            <Link to={`/${props.recipe_id}`}><h3>{props.title}</h3></Link>
        </div> 
    );
}
 
export default Card;