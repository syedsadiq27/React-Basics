import React from 'react'

function Welcome(props) {
    // { props.name = "Asha" }

    let { name, age } = props
    return (
        <div>
            <h1> Welcome {name}</h1>
            <p> age is {age}</p>
        </div>
    )
}

export default Welcome
