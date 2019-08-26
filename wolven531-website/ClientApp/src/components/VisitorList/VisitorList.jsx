import React from 'react'

const VisitorList = ({visitors}) => {
	return (
		<div className="visitor-list">
			<h3>Visitor List ({visitors.length})</h3>
			<ul>
				{visitors.map(visitor => (
					<li key={visitor}>{visitor}</li>
				))}
			</ul>
		</div>
	)
}

export { VisitorList }
