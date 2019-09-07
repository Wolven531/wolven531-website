import React, { Component } from 'react'

interface ICounterState {
	buttonEnabled: boolean
	currentCount: number
	currentRotationY: number
}

export class Counter extends Component<{}, ICounterState> {
	private static MAX_COUNT = 10

	private rotationInterval?: NodeJS.Timeout

	constructor(props: any) {
		super(props)
		this.state = {
			buttonEnabled: true,
			currentCount: 1,
			currentRotationY: 0
		}
	}

	public componentDidMount() {
		this.loadFromLocal()
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
						transform: `rotate3d(0, 1, 0, ${this.state.currentRotationY}deg)`
					}} />
				<p>Current count: <strong>{this.state.currentCount}</strong></p>
				<button
					disabled={!this.state.buttonEnabled}
					onClick={this.incrementCounter}>Increment</button>
			</div>
		)
	}

	private addInterval() {
		this.rotationInterval = setInterval(() => {
			this.setState(state => ({ currentRotationY: (state.currentRotationY + 1) % 360 }))
		}, 1000 / 60 / this.state.currentCount)
	}

	private incrementCounter() {
		if (!this.state.buttonEnabled) {
			return
		}
		this.setState(state => ({
			buttonEnabled: state.currentCount + 1 < Counter.MAX_COUNT,
			currentCount: state.currentCount + 1
		}), () => {
			this.resetInterval()
			this.addInterval()
		})
	}

	private loadFromLocal() {
		if (!window || !window.localStorage) {
			return
		}
		const storageCurrentCount = window.localStorage.getItem('wolven531-website.counter.currentCount')
		if (!storageCurrentCount || storageCurrentCount.length < 1) {
			return
		}
		const currentCount = parseInt(storageCurrentCount, 10)
		this.setState({ currentCount })
	}

	private resetInterval() {
		if (this.rotationInterval === undefined) {
			return
		}
		clearInterval(this.rotationInterval)
		this.rotationInterval = undefined
	}
}
