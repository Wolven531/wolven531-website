import React, { Component, Fragment } from 'react'

import { NavMenu } from './NavMenu/NavMenu'

export class Layout extends Component {
    render() {
        return (
            <Fragment>
                <NavMenu />
                {this.props.children}
            </Fragment>
        )
    }
}
