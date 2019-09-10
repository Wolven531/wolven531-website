import React, { Component } from 'react'

interface ISpinningSVGProps {
	description: string
	intervalDuration: number
	rotationalJump: number
	sourcePath: string
}

interface ISpinningSVGState {
	currentRotationY: number
}

class SpinningSVG extends Component<ISpinningSVGProps, ISpinningSVGState> {
	private rotationInterval?: NodeJS.Timeout

	constructor(props: ISpinningSVGProps) {
		super(props)
		this.state = {
			currentRotationY: 0
		}
	}

	public componentDidMount() {
		this.reset()
		this.start()
	}

	public componentDidUpdate(prevProps: ISpinningSVGProps) {
		if (prevProps.intervalDuration !== this.props.intervalDuration) {
			this.reset()
			this.start()
		}
	}

	public render() {
		return (
			<img
				src={this.props.sourcePath} alt={this.props.description}
				style={{
					transform: `rotate3d(0, 1, 0, ${this.state.currentRotationY}deg)`
				}} />
		)
	}

	public reset = () => {
		if (this.rotationInterval === undefined) {
			return
		}
		clearInterval(this.rotationInterval)
		this.rotationInterval = undefined
	}

	public start = () => {
		this.rotationInterval = setInterval(() => {
			this.setState(state => ({ currentRotationY: (state.currentRotationY + this.props.rotationalJump) % 360 }))
		}, this.props.intervalDuration)
	}
}

export { SpinningSVG }
