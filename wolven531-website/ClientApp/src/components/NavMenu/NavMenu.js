import React, { Component } from 'react'
import { Link } from 'react-router-dom'

import './NavMenu.css'

export class NavMenu extends Component {
    render() {
        return (
            <nav>
                <Link to={'/'} exact={String(true)}>
                    Home
                </Link>
                <br />
                <Link to={'/counter'}>
                    Counter
                </Link>
                <br />
                <Link to={'/fetchdata'}>
                    Fetch data
                </Link>
            </nav>
        )
    }
}
