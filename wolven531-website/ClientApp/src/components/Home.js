import React, { Component } from 'react'

export class Home extends Component {
    displayName = Home.name

    componentDidMount() {
        window.document.title = 'Home - Wolven531'
    }

    render() {
        return (
            <div>
                <h1>Wolven531</h1>
                <p>Welcome to Anthony Williams' personal website</p>
                <p>It is still under [<a href="https://github.com/Wolven531/wolven531-website" target="_blank">active</a>] construction</p>
            </div>
        )
    }
}
