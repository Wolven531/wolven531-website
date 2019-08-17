import React, { Component } from 'react'
import {
	Col,
	// Grid,
	// Jumbotron,
	Row,
	// Well
} from 'react-bootstrap'
// import Container from 'react-bootstrap/Container'
import { NavMenu } from './NavMenu/NavMenu'

import './layout.css'

export class Layout extends Component {
	render() {
		return (
			// <Container fluid>
			// <Jumbotron fluid>
			// <Grid>
			// <Well>
			<div className="layout">
				<Row>
					<Col sm={3}>
						<NavMenu />
					</Col>
					<Col sm={9}>{this.props.children}</Col>
				</Row>
				{/* </Container> */}
				{/* </Jumbotron> */}
				{/* </Grid> */}
				{/* </Well> */}
			</div>
		)
	}
}
