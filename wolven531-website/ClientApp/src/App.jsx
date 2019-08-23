import React, { Component } from 'react'
import { Route } from 'react-router'

import { About } from './components/About/About'
import { Counter } from './components/Counter'
import { FetchData } from './components/FetchData'
import { Home } from './components/Home/Home'
import { Layout } from './components/Layout/Layout'
import { Visitors } from './components/Visitors/Visitors'

export default class App extends Component {
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
