import { Link } from "react-router-dom";
import React, { useState, useEffect} from 'react';
import Nav from './Nav';

const Recipe = (props) => {

    const [recipe, setRecipe] = useState([]);

    useEffect(() => {
        loaditem();
    },[]);
    
    const loaditem = () => {
        fetch(`https://forkify-api.herokuapp.com/api/get?rId=${props.match.params.id}`)
        .then(res => res.json())
        .then(result => {
            setRecipe(result.recipe);
        })
    }

    return ( 
        <>
            <Nav/>
            <div className="recipe">
                <Link to={`/`}><button className="button">Back</button></Link>
                <img src={recipe.image_url} alt={recipe.title}/>
                <div>
                    <h2 className="orange">{recipe.title}</h2>
                    <h3>Ingredients</h3>
                    <ul>
                        {recipe.ingredients && recipe.ingredients.map(el=><li key={el}>{el}</li>)}
                    </ul>
                    <h4>Publisher: {recipe.publisher}</h4>
                    <h4>Social Rank: <span className="orange">{parseInt(recipe.social_rank)} % </span></h4>
                </div>
            </div>
        </>
     );
}
 
export default Recipe;