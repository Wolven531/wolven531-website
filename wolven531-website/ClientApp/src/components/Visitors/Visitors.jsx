import React, { Component } from 'react'

class Visitors extends Component {
	componentDidMount() {
		window.document.title = 'Visitors - Wolven531'
	}

	render() {
		return (
			<div>
				<h2>Visitors</h2>
			</div>
		)
	}
}

export { Visitors }
