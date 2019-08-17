import React, { Component } from 'react'
import { Glyphicon, Nav, Navbar, NavItem } from 'react-bootstrap'
import { LinkContainer } from 'react-router-bootstrap'

import './NavMenu.css'

export class NavMenu extends Component {
	render() {
		return (
			<Navbar inverse fixedTop fluid collapseOnSelect>
				<Navbar.Collapse>
					<Nav>
						<LinkContainer to={'/'} exact>
							<NavItem>
								{/* <Glyphicon glyph="home" /> Home */}
								Home
							</NavItem>
						</LinkContainer>
						<LinkContainer to={'/counter'}>
							<NavItem>
								{/* <Glyphicon glyph="education" /> Counter */}
								Counter
							</NavItem>
						</LinkContainer>
						<LinkContainer to={'/fetchdata'}>
							<NavItem>
								{/* <Glyphicon glyph="th-list" /> Fetch data */}
								Fetch data
							</NavItem>
						</LinkContainer>
					</Nav>
				</Navbar.Collapse>
			</Navbar>
		)
	}
}
