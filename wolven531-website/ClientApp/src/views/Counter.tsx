import React, { Component } from 'react'

interface ICounterState {
	buttonEnabled: boolean
	currentCount: number
	currentRotationY: number
}

export class Counter extends Component<{}, ICounterState> {
	private static MAX_COUNT = 10
	private static STORAGE_KEY = 'wolven531-website.counter.currentCount'

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
	}

	public componentWillUnmount() {
		this.resetInterval()
		this.saveToLocal()
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
				<br />
				<button onClick={this.saveToLocal}>Save (local)</button>
			</div>
		)
	}

	private addInterval = (count?: number) => {
		count = count !== undefined ? count : this.state.currentCount

		this.rotationInterval = setInterval(() => {
			this.setState(state => ({ currentRotationY: (state.currentRotationY + 1) % 360 }))
		}, 1000 / 60 - count)
	}

	private incrementCounter = () => {
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

	private loadFromLocal = () => {
		if (!window || !window.localStorage) {
			this.resetInterval()
			this.addInterval()
			return
		}
		const storageCurrentCount = window.localStorage.getItem(Counter.STORAGE_KEY)
		if (!storageCurrentCount || storageCurrentCount.length < 1) {
			this.resetInterval()
			this.addInterval()
			return
		}
		const currentCount = parseInt(storageCurrentCount, 10)
		const buttonEnabled = currentCount < Counter.MAX_COUNT
		this.setState({ buttonEnabled, currentCount })
		this.resetInterval()
		this.addInterval(currentCount)
	}

	private resetInterval = () => {
		if (this.rotationInterval === undefined) {
			return
		}
		clearInterval(this.rotationInterval)
		this.rotationInterval = undefined
	}

	private saveToLocal = () => {
		if (!window || !window.localStorage) {
			return
		}
		window.localStorage.setItem(Counter.STORAGE_KEY, String(this.state.currentCount))
	}
}
