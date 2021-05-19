import React, { Component } from 'react'

export default class Hello extends Component {
    constructor() {
        super()
        this.state = {
            message: "Plese Subscribe",
            value: "subscribe now",
        }
    }



    subscribe() {
        this.setState({
            message: "Thannk you",
            value: "subscribed"
        })
    }



    render() {
        const { message, value } = this.state
        return (
            <div>
                <h1>{this.state.message}</h1>
                <button onClick={() => this.subscribe()}> {message}</button>
            </div>
        )
    }
}
