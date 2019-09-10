import React, { Component } from 'react'

import { SpinningSVG } from '../components/SpinningSVG/SpinningSVG'

import './Counter.css'

interface ICounterState {
	buttonEnabled: boolean
	currentCount: number
}

class Counter extends Component<{}, ICounterState> {
	private static MAX_COUNT = 10
	private static STORAGE_KEY = 'wolven531-website.counter.currentCount'

	constructor(props: any) {
		super(props)
		this.state = {
			buttonEnabled: true,
			currentCount: 1
		}
	}

	public componentDidMount() {
		this.loadFromLocal()
	}

	public componentWillUnmount() {
		this.saveToLocal()
	}

	public render() {
		return (
			<div className="counter">
				<h1>Counter</h1>
				<SpinningSVG
					description="Pyramid SVG"
					intervalDuration={1000 / 60 - this.state.currentCount}
					sourcePath="/pyramid.svg"
					/>
				<p>Current count: <strong>{this.state.currentCount}</strong></p>
				<button
					disabled={!this.state.buttonEnabled}
					onClick={this.incrementCounter}>Increment</button>
				<br />
				<button onClick={this.saveToLocal}>Save (local)</button>
			</div>
		)
	}

	private incrementCounter = () => {
		if (!this.state.buttonEnabled) {
			return
		}
		this.setState(state => ({
			buttonEnabled: state.currentCount + 1 < Counter.MAX_COUNT,
			currentCount: state.currentCount + 1
		}))
	}

	private loadFromLocal = () => {
		if (!window || !window.localStorage) {
			return
		}
		const storageCurrentCount = window.localStorage.getItem(Counter.STORAGE_KEY)
		if (!storageCurrentCount || storageCurrentCount.length < 1) {
			return
		}
		const currentCount = parseInt(storageCurrentCount, 10)
		const buttonEnabled = currentCount < Counter.MAX_COUNT
		this.setState({ buttonEnabled, currentCount })
	}

	private saveToLocal = () => {
		if (!window || !window.localStorage) {
			return
		}
		window.localStorage.setItem(Counter.STORAGE_KEY, String(this.state.currentCount))
	}
}

export { Counter }
