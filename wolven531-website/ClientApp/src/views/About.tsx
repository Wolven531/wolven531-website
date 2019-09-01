import React, { Component } from 'react'

class About extends Component {
	componentDidMount() {
		window.document.title = 'About - Wolven531'
	}

	render() {
		return (
			<div className="about">
				<table>
					<thead>
						<tr>
							<th>Language</th>
							<th>Skill Level</th>
						</tr>
					</thead>
					<tbody>
						<tr>
							<td>C#</td>
							<td>4 of 5</td>
						</tr>
						<tr>
							<td>JavaScript</td>
							<td>5 of 5</td>
						</tr>
						<tr>
							<td>TypeScript</td>
							<td>5 of 5</td>
						</tr>
					</tbody>
				</table>
				<p>This website is designed using dotnet core (C#), TypeScript, and React</p>
				<p>&copy; Anthony Williams 2019</p>
			</div>
		)
	}
}

export { About }
