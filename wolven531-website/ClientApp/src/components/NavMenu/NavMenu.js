import React, { Component } from 'react'
// import { Nav, Navbar, NavItem } from 'react-bootstrap'
import { Nav, Navbar, NavItem } from 'react-bootstrap'
import { LinkContainer } from 'react-router-bootstrap'

import './NavMenu.css'

export class NavMenu extends Component {
	render() {
		return (
			// <Navbar inverse fixedTop fluid collapseOnSelect>
			<Navbar fixed="top" fluid variant="dark">
				{/* <Navbar.Collapse> */}
					<Nav>
						<LinkContainer to={'/'} exact>
							<NavItem>
								Home
							</NavItem>
						</LinkContainer>
						<LinkContainer to={'/counter'}>
							<NavItem>
								Counter
							</NavItem>
						</LinkContainer>
						<LinkContainer to={'/fetchdata'}>
							<NavItem>
								Fetch data
							</NavItem>
						</LinkContainer>
					</Nav>
				{/* </Navbar.Collapse> */}
			</Navbar>
		)
	}
}
