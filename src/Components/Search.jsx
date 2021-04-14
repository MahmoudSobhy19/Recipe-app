import React,{ useState } from 'react';
import Card from "./Card";

const Search = () => {

    const [search, setSearch] = useState("");
    const [results, setResult] = useState([]);

    const change = (e) => {
        setSearch(e.target.value);
    }

    const submit = (e) => {

        e.preventDefault(); 

        fetch(`https://forkify-api.herokuapp.com/api/search?q=${search}`)
        .then(res => res.json())
        .then(result => {
            setResult(result.recipes);
        })
    }

    return ( 
        <div className="search">
            <form>
                <input type="text" name="search" onChange={change} placeholder="What Recipe You Need ?"/>
                <button className="button" onClick={submit}>Search</button>
            </form>
            <div>
                {
                    results &&
                    <ul>
                        {results.map(el =><li key={el.recipe_id}><Card {...el}/></li>)}
                    </ul>
                }
            </div>
        </div>
     );
}
 
export default Search;