import React from 'react'

import { useRoutes } from '@routing/routes'

function App() {
	const routes = useRoutes()

	return (
		<div>
			<div className='App'>{routes}</div>
		</div>
	)
}

export default App
