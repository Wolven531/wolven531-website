import React, { Component } from 'react'
import { NavLink } from 'react-router-dom'

import './NavMenu.css'

export class NavMenu extends Component {
	render() {
		return (
			<nav>
				<NavLink to="/">Home</NavLink>
				<NavLink to="/counter">Counter</NavLink>
				<NavLink to="/fetchdata">Fetch data</NavLink>
			</nav>
		)
	}
}
