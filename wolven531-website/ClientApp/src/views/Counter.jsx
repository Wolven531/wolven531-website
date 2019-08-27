import React, { Component } from 'react'

export class Counter extends Component {
	constructor(props) {
		super(props)
		this.state = { currentCount: 0 }
	}

	incrementCounter = () => {
		this.setState({
			currentCount: this.state.currentCount + 1
		})
	}

	render() {
		return (
			<div>
				<h1>Counter</h1>
				<p>Current count: <strong>{this.state.currentCount}</strong></p>
				<button onClick={this.incrementCounter}>Increment</button>
			</div>
		)
	}
}