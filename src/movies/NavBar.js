import React, { useContext } from 'react'
import { MovieContext } from "../context/MovieContext"

function NavBar() {

    const [movies, setMovies] = useContext(MovieContext);
    return (
        <div>
            <h2>Count of Movies: {movies.length}</h2>
        </div>
    )
}

export default NavBar
