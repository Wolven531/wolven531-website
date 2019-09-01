import React, { Component } from 'react'
import { Route } from 'react-router'

// views
import { About } from '../../views/About'
import { Counter } from '../../views/Counter'
import { Visitors } from '../../views/Visitors'

// components
import { Home } from '../Home/Home'
import { Layout } from '../Layout/Layout'

class App extends Component {
	render() {
		return (
			<Layout>
				<Route exact path='/' component={Home} />
				<Route path='/visitors' component={Visitors} />
				<Route path='/counter' component={Counter} />
				<Route path='/about' component={About} />
			</Layout>
		)
	}
}

export { App }
