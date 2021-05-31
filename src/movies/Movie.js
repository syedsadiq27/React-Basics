import React, { useState, useContext } from 'react'
import MovieLists from './MovieLists'
import NavBar from './NavBar'
import { MovieContext } from "../context/MovieContext"

function Movie() {

    const [movies, setMovies] = useContext(MovieContext)

    return (
        <div>

            {movies.map((movie) => {
                return (

                    <>
                        <MovieLists name={movie.name} price={movie.price} />


                    </>



                )
            })}


        </div>
    )
}

export default Movie
