import React, { Component, Fragment } from 'react'

import { NavMenu } from './NavMenu'

export class Layout extends Component {
    displayName = Layout.name

    render() {
        return (
            <Fragment>
                <NavMenu />
                {this.props.children}
            </Fragment>
        )
    }
}
