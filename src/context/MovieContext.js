import React, { createContext, useState } from 'react';

export const MovieContext = createContext();

export function MovieProvider(props) {
    const [movies, setMovie] = useState([{
        name: "Harry Potter",
        price: "$10"
    },
    {
        name: "Marvel",
        price: "$10"
    },
    {
        name: "Normal Movie",
        price: "$10"
    },
    {
        name: "Spiderman",
        price: "$20"
    }]);
    return (
        <MovieContext.Provider value={[movies, setMovie]}>
            { props.children}
        </MovieContext.Provider >
    )
}