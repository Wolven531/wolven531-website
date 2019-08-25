import React, { Component } from 'react'
import { Route } from 'react-router'

import { About } from '../About/About'
import { Counter } from '../Counter'
import { FetchData } from '../FetchData'
import { Home } from '../Home/Home'
import { Layout } from '../Layout/Layout'
import { Visitors } from '../Visitors/Visitors'

class App extends Component {
	render() {
		return (
			<Layout>
				<Route exact path='/' component={Home} />
				<Route path='/counter' component={Counter} />
				<Route path='/fetchdata' component={FetchData} />
				<Route path='/visitors' component={Visitors} />
				<Route path='/about' component={About} />
			</Layout>
		)
	}
}

export { App }
