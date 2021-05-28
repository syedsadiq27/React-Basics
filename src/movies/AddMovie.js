import React, { useContext, useState } from 'react'
import { MovieContext } from "../context/MovieContext"

function AddMovie() {

    const [movies, setMovies] = useContext(MovieContext);
    const [name, setName] = useState('');
    const [price, setPrice] = useState('');

    const updateName = (e) => {
        setName(e.target.value);

    }
    const updatePrice = (e) => {
        setPrice(e.target.value);
    }

    const addMovie = (e) => {
        e.preventDefault();
        setMovies(prevMovies => [
            ...prevMovies,
            {
                name: name,
                price: price
            }
        ])
    }


    return (
        <form>
            <input type="text" onChange={updateName}></input>
            <input type="text" onChange={updatePrice}></input>
            <button onClick={addMovie}>Add Movie</button>
        </form>
    )
}

export default AddMovie
