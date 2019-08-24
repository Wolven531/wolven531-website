import React, { Component } from 'react'

class Visitors extends Component {
	state = {
		isLoading: true,
		visitorName: '',
		visitors: []
	}

	handleRegistration = () => {
		fetch('api/visitors', {
			body: JSON.stringify({ name: this.state.visitorName }),
			// cache: 'no-cache', // *default, no-cache, reload, force-cache, only-if-cached
			// credentials: 'same-origin', // include, *same-origin, omit
			method: 'POST', // *GET, POST, PUT, DELETE, etc.
			// mode: 'cors', // no-cors, cors, *same-origin
			headers: {
				// 'Content-Type': 'application/json'
				'Content-Type': 'application/json; charset=utf-8'
				// 'Content-Type': 'application/x-www-form-urlencoded',
			}
			// redirect: 'follow', // manual, *follow, error
			// referrer: 'no-referrer', // no-referrer, *client
		})
		.then(resp => {
			console.log(`posted and got response status = ${resp.status}`)
			return resp.json()
		})
		.then(respJson => {
			console.log('response was', respJson)
		})
		.catch(err => {
			console.error(err)
		})
	}

	handleVisitorNameChange = evt => {
		this.setState({ visitorName: evt.target.value })
	}

	componentDidMount() {
		window.document.title = 'Visitors - Wolven531'

		fetch('api/visitors')
			.then(resp => {
				if (resp.status !== 200) {
					console.log(
						`Response status was not 200; instead status=${
							resp.status
						}`
					)
					return
				}
				// console.log(resp)
				return resp.json() // resp.text()
			})
			// .then(respText => {
			// 	console.log(respText)
			// })
			.then(visitors => {
				this.setState({ isLoading: false, visitors })
			})
			.catch(err => {
				console.error(err)
			})
	}

	render() {
		const { isLoading, visitorName, visitors } = this.state

		return (
			<div>
				<h2>Visitors</h2>
				<div>
					<input
						type="text"
						placeholder="Visitor name"
						onChange={this.handleVisitorNameChange}
						value={visitorName}
					/>
					<br />
					<button onClick={this.handleRegistration}>Register</button>
				</div>
				{isLoading ? (
					<p>Loading...</p>
				) : (
					<div>
						<h3>Visitor List ({visitors.length})</h3>
						<ul>
							{visitors.map(visitor => (
								<li key={visitor}>{visitor}</li>
							))}
						</ul>
					</div>
				)}
			</div>
		)
	}
}

export { Visitors }
