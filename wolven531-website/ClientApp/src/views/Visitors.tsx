import React, { Component, ChangeEvent } from 'react'

import { Api } from '../api'

import { Loading } from '../components/Loading/Loading'
import { VisitorList } from '../components/VisitorList/VisitorList'

interface IVisitorsState {
	isLoading: boolean
	visitorName: string
	visitors: string[]
}

class Visitors extends Component<{}, IVisitorsState> {
	private api: Api

	constructor(props: any) {
		super(props)

		this.api = props.Api || new Api()
		this.state = {
			isLoading: true,
			visitorName: '',
			visitors: []
		}
	}

	public componentDidMount() {
		window.document.title = 'Visitors - Wolven531'

		this.init()
	}

	public render() {
		const { isLoading, visitorName, visitors } = this.state

		return (
			<div className="visitors">
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
					: <VisitorList visitors={visitors} />
				}
			</div>
		)
	}

	private handleNameChange = (evt: ChangeEvent<HTMLInputElement>) => {
		this.setState({ visitorName: evt.target.value })
	}

	private handleRegistration = () => {
		const visitorName = this.state.visitorName
		this.api.addVisitor(visitorName)
			.then(respJson => {
				this.setState({
					visitorName: '',
					visitors: this.state.visitors.concat(this.state.visitorName)
				})
			})
	}

	private init = () => {
		this.api.getVisitors()
			.then(visitors => {
				this.setState({ isLoading: false, visitors })
			})
	}
}

export { Visitors }
