import React, { Component } from 'react'

import { NavMenu } from './NavMenu/NavMenu'

import './layout.css'

export class Layout extends Component {
	render() {
		return (
			<div className="layout">
				<div style={{ gridArea: 'sidebar' }}>
					<NavMenu />
				</div>
				{this.props.children}
			</div>
		)
	}
}
