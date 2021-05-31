import React from 'react'

function MovieLists({ name, price }) {
    // let [name, price] = props
    // name = "batman"
    // price = "$100"
    return (

        <div>
            <h3>{name}</h3>
            <h5>{price}  </h5>
        </div>
    )
}

export default MovieLists
