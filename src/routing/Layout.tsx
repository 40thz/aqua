import React from 'react'
import { Outlet } from 'react-router-dom'

const Layout = () => {
	return (
		<section id='main'>
			<Outlet />
		</section>
	)
}

export default Layout
