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
		fetch('api/visitors', {
			body: JSON.stringify({ name: this.state.visitorName }),
			// cache: 'no-cache', // *default, no-cache, reload, force-cache, only-if-cached
			// credentials: 'same-origin', // include, *same-origin, omit
			method: 'POST', // *GET, POST, PUT, DELETE, etc.
			// mode: 'cors', // no-cors, cors, *same-origin
			headers: {
				'Content-Type': 'application/json; charset=utf-8'
				// 'Content-Type': 'application/x-www-form-urlencoded'
			}
			// redirect: 'follow', // manual, *follow, error
			// referrer: 'no-referrer', // no-referrer, *client
		})
			.then(resp => resp.json())
			.then(respJson => {
				if (respJson.error) {
					throw new Error(`Poorly formatted request. Error:\n\n${respJson.error}`)
				}
				this.setState({
					visitorName: '',
					visitors: this.state.visitors.concat(this.state.visitorName)
				})
			})
			.catch(err => {
				alert(err)
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
