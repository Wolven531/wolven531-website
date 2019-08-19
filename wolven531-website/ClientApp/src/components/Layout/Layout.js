import React, { Component } from 'react'

import { NavMenu } from '../NavMenu/NavMenu'

import './layout.css'

export class Layout extends Component {
	render() {
		return (
			<div id="layout">
				<div id="header" style={{ gridArea: 'header' }}>
					<h1>Wolven531</h1>
				</div>
				<div style={{ gridArea: 'sidebar' }}>
					<NavMenu />
				</div>
				<div id="mainContent" style={{ gridArea: 'main' }}>
					{this.props.children}
				</div>
			</div>
		)
	}
}
