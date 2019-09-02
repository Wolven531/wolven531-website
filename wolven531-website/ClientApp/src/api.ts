class Api {
	public static addVisitor = (visitorName: string) => {
		return fetch('api/visitors', {
			body: JSON.stringify({ name: visitorName }),
			// body: JSON.stringify({ name: this.state.visitorName }),
			// cache: 'no-cache', // *default, no-cache, reload, force-cache, only-if-cached
			// credentials: 'same-origin', // include, *same-origin, omit
			method: 'POST', // *GET, POST, PUT, DELETE, etc.
			// mode: 'cors', // no-cors, cors, *same-origin
			headers: {
				'Content-Type': 'application/json; charset=utf-8'
				// 'Content-Type': 'application/x-www-form-urlencoded'
			}
			// redirect: 'follow', // manual, *follow, error
			// referrer: 'no-referrer', // no-referrer, *client
		})
			.then(resp => resp.json())
			.then(respJson => {
				if (respJson.error) {
					throw new Error(`Poorly formatted request. Error:\n\n${respJson.error}`)
				}
				return respJson
			})
			.catch(err => {
				alert(err)
			})
	}

	public static getVisitors = () => {
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
