import React from 'react'

const VisitorList = ({ visitors }: { visitors: string[] }) => {
	return (
		<div className="visitor-list">
			<h3>Visitor List ({visitors.length})</h3>
			<ul>
				{visitors.map((visitor: string) => (
					<li key={visitor}>{visitor}</li>
				))}
			</ul>
		</div>
	)
}

export { VisitorList }
