import React from 'react'
import './Button.scss'
const Button = ({ name }: { name: string }) => {
	return (
		<div className="btn-box">
			<a href="dry-cleaning.html" className="thm-btn btn flex items-center gap-3">{name} <span>
				<svg
					width='14px'
					height='24px'
					viewBox='0 0 1024 1024'
					xmlns='http://www.w3.org/2000/svg'>
					<path
						fill='currentColor'
						d='M754.752 480H160a32 32 0 100 64h594.752L521.344 777.344a32 32 0 0045.312 45.312l288-288a32 32 0 000-45.312l-288-288a32 32 0 10-45.312 45.312L754.752 480z'
					/>
				</svg>
			</span>
			</a>
		</div>
	)
}

export default Button
