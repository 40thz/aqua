import { Route, Routes } from 'react-router-dom'

import Layout from './Layout'

import HomePage from '@pages/HomePage'

export const useRoutes = () => {
	return (
		<>
			<Routes>
				<Route path='/' element={<Layout />}>
					<Route path='/' element={<HomePage />} />
					<Route path='*' element={<div>NotFound</div>} />
				</Route>
			</Routes>
		</>
	)
}
