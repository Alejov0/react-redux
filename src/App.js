import React from 'react'
import { connect } from 'react-redux'

function App({ user }) {
	return (
		<div className="app">
			<h1>React App</h1>
			<p>User: {JSON.stringify(user)}</p>
		</div>
	)
}

export default connect((state) => ({ user: state.user }))(App)
