import React, { Component } from 'react'

import { Loading } from '../Loading/Loading'

class Visitors extends Component {
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
		fetch('api/visitors')
			.then(resp => {
				if (resp.status !== 200) {
					throw new Error(`Response status was not 200; instead status=${resp.status}`)
				}
				return resp.json() // resp.text()
			})
			.then(visitors => {
				this.setState({ isLoading: false, visitors })
			})
			.catch(err => {
				alert(err)
			})
	}

	render() {
		const { isLoading, visitorName, visitors } = this.state

		return (
			<div>
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
					: <div className="visitor-list">
						<h3>Visitor List ({visitors.length})</h3>
						<ul>
							{visitors.map(visitor => (
								<li key={visitor}>{visitor}</li>
							))}
						</ul>
					</div>
				}
			</div>
		)
	}
}

export { Visitors }
