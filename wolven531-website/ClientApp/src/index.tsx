import * as React from 'react'
import * as ReactDOM from 'react-dom'
import { Provider } from 'react-redux'
import { ConnectedRouter } from 'connected-react-router'
import { createBrowserHistory } from 'history'

import configureStore from './store/configureStore'

import { App } from './components/App/App'

import registerServiceWorker from './registerServiceWorker'

import './index.css'

// Create browser history to use in the Redux store
const baseUrl = document.getElementsByTagName('base')[0].getAttribute('href') as string
const history = createBrowserHistory({ basename: baseUrl })
const rootElement = document.getElementById('root')

// Get the application-wide store instance, prepopulating with state from the server where available.
const store = configureStore(history)

ReactDOM.render(
	<Provider store={store}>
		<ConnectedRouter history={history}>
			<App />
		</ConnectedRouter>
	</Provider>,
	rootElement)

registerServiceWorker()
