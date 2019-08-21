import React, { Component } from 'react'

class Visitors extends Component {
	componentDidMount() {
		window.document.title = 'Visitors - Wolven531'
		// let results = ''
		fetch('api/visitors')
			.then(resp => {
				if (resp.status !== 200) {
					console.log(`Response status was not 200; instead status=${resp.status}`)
					return
				}
				console.log(resp)
				return resp.text()
				// return resp.body
				// const streamReader = resp.body.getReader()
				// streamReader.read()
				// 	.then()
				// 	.catch()

				// return resp.json()
			})
			.then(respText => {
				console.log(respText)
			})
			// .then(responseStream => {
			// 	// const textStream = new TextEncoderStream()
			// 	// responseStream.pipeThrough(textStream)
			// 	// return textStream.readable
			// 	responseStream.getReader().read().then(({ done, value }) => {
			// 		if (done) {
			// 			responseStream.getReader().releaseLock()
			// 			console.log(results)
			// 			return
			// 		}
			// 		results += value
			// 	})
			// })
			//// .then(readableStream => {
			//// 	console.log(readableStream)
			//// })
			// .then(respJson => {
			// 	console.log(respJson)
			// })
			.catch(err => {
				console.error(err)
			})
	}

	render() {
		return (
			<div>
				<h2>Visitors</h2>
			</div>
		)
	}
}

export { Visitors }
