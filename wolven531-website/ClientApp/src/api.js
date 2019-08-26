class Api {
	getVisitors = () => {
		return fetch('api/visitors')
			.then(resp => {
				if (resp.status !== 200) {
					throw new Error(`Response status was not 200; instead status=${resp.status}`)
				}
				return resp.json() // resp.text()
			})
			.catch(err => {
				alert(err)
			})
	}
}

export { Api }
