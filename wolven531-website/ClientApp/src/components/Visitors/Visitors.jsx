import React, { Component } from 'react'

class Visitors extends Component {
	state = {
		isLoading: true,
		visitors: []
	}

	componentDidMount() {
		window.document.title = 'Visitors - Wolven531'

		fetch('api/visitors')
			.then(resp => {
				if (resp.status !== 200) {
					console.log(`Response status was not 200; instead status=${resp.status}`)
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
		const { isLoading, visitors } = this.state

		return (
			<div>
				<h2>Visitors</h2>
				{isLoading
					? <p>Loading...</p>
					: <div>
						<h3>Visitor List ({visitors.length})</h3>
						<ul>
							{visitors.map(visitor =>
								<li>{visitor}</li>)
							}
						</ul>
					</div>
				}
			</div>
		)
	}
}

export { Visitors }
