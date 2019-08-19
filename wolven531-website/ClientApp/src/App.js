import React, { Component } from 'react'
import { Route } from 'react-router'

import { Counter } from './components/Counter'
import { FetchData } from './components/FetchData'
import { Home } from './components/Home/Home'
import { Layout } from './components/Layout/Layout'

export default class App extends Component {
  render() {
    return (
      <Layout>
        <Route exact path='/' component={Home} />
        <Route path='/counter' component={Counter} />
        <Route path='/fetchdata' component={FetchData} />
      </Layout>
    )
  }
}
