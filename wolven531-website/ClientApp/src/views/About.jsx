import React, { Component } from 'react'

import './About.css'

class About extends Component {
	componentDidMount() {
		window.document.title = 'About - Wolven531'
	}

	render() {
		return (
			<div className="about">
				<p>This website is designed using dotnet core (C#), TypeScript, and React</p>
				<p>&copy; Anthony Williams 2019</p>
			</div>
		)
	}
}

export { About }
