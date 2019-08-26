import React, { Component } from 'react'

import { Api } from '../../api'

import { Loading } from '../Loading/Loading'
import { VisitorList } from '../VisitorList/VisitorList'

class Visitors extends Component {
	api
	state = {
		isLoading: true,
		visitorName: '',
		visitors: []
	}

	componentDidMount() {
		window.document.title = 'Visitors - Wolven531'

		this.init()
	}

	handleNameChange = evt => {
		this.setState({ visitorName: evt.target.value })
	}

	handleRegistration = () => {
		const visitorName = this.state.visitorName
		this.api.addVisitor(visitorName)
			.then(respJson => {
				this.setState({
					visitorName: '',
					visitors: this.state.visitors.concat(this.state.visitorName)
				})
			})
	}

	init = () => {
		this.api = new Api()
		this.api.getVisitors()
			.then(visitors => {
				this.setState({ isLoading: false, visitors })
			})
	}

	render() {
		const { isLoading, visitorName, visitors } = this.state

		return (
			<div className="visitors">
				<h2>Visitors</h2>
				<div className="visitor-form">
					<input
						type="text"
						placeholder="Visitor name"
						onChange={this.handleNameChange}
						value={visitorName}
					/>
					<br />
					<button onClick={this.handleRegistration}>Register</button>
				</div>
				{isLoading
					? <Loading />
					: <VisitorList visitors={visitors} />
				}
			</div>
		)
	}
}

export { Visitors }
