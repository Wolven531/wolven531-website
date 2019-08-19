import React, { Component } from 'react'

import './Home.css'

export class Home extends Component {
	componentDidMount() {
		window.document.title = 'Home - Wolven531'
	}

	render() {
		return (
			<div className="home">
				<p>Welcome to Anthony Williams' personal website</p>
				<p>
					It is still under [
					<a
						href="https://github.com/Wolven531/wolven531-website"
						target="_blank"
						rel="noopener noreferrer"
					>
						active
					</a>
					] construction
				</p>
			</div>
		)
	}
}
