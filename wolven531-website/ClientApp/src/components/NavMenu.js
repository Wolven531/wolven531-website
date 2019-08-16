import React, { Component, Fragment } from 'react'
import { Link } from 'react-router-dom'

import './NavMenu.css'

export class NavMenu extends Component {
    displayName = NavMenu.name

    render() {
        return (
            <Fragment>
                <Link to={'/'}>wolven531_website</Link>
                <nav>
                    <Link to={'/'} exact>
                        Home
                    </Link>
                    <Link to={'/counter'}>
                        Counter
                    </Link>
                    <Link to={'/fetchdata'}>
                        Fetch data
                    </Link>
                </nav>
            </Fragment>
        )
    }
}
