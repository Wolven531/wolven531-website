import React, { Component } from 'react'
import { NavLink } from 'react-router-dom'

import './NavMenu.css'

export class NavMenu extends Component {
	render() {
		return (
			<nav style={{}}>
				<NavLink to="/">Home</NavLink>
				<br/>
				<NavLink to="/counter">Counter</NavLink>
				<br/>
				<NavLink to="/fetchdata">Fetch data</NavLink>
			</nav>
		)
	}
}
