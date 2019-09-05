import React, { Component } from 'react'

interface ICounterState {
	currentCount: number
	currentYRotation: number
}

export class Counter extends Component<{}, ICounterState> {
	rotationInterval: NodeJS.Timeout | null

	constructor(props: any) {
		super(props)
		this.state = {
			currentCount: 1,
			currentYRotation: 0
		}
		this.rotationInterval = null
	}

	public componentDidMount() {
		this.addInterval()
	}

	public componentWillUnmount() {
		this.resetInterval()
	}

	public render() {
		return (
			<div>
				<h1>Counter</h1>
				<img
					src="/pyramid.svg" alt="Pyramid SVG"
					style={{
						transform: `rotate3d(0, 1, 0, ${this.state.currentYRotation}deg)`
					}} />
				<p>Current count: <strong>{this.state.currentCount}</strong></p>
				<button onClick={this.incrementCounter}>Increment</button>
			</div>
		)
	}

	private addInterval() {
		this.rotationInterval = setInterval(() => {
			this.setState(state => ({ currentYRotation: (state.currentYRotation + 1) % 360 }))
		}, 1000 / 60 / this.state.currentCount)
	}

	private resetInterval() {
		if (this.rotationInterval === null) {
			return
		}
		clearInterval(this.rotationInterval)
	}

	private incrementCounter = () => {
		this.setState(state => ({ currentCount: state.currentCount + 1 }))
		this.resetInterval()
		this.addInterval()
	}
}
