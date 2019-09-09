import React, { Component } from 'react'

interface ISpinningSVGProps {
	description: string
	rotation: number
	sourcePath: string
}

class SpinningSVG extends Component<ISpinningSVGProps, {}> {
	// public componentDidMount() {
	// }

	// public componentWillUnmount() {
	// }

	public render() {
		return (
			<img
				src={this.props.sourcePath} alt={this.props.description}
				style={{
					transform: `rotate3d(0, 1, 0, ${this.props.rotation}deg)`
				}} />
		)
	}
}

export { SpinningSVG }
