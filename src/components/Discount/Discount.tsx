import Button from '@components/Button/Button'
import React from 'react'
import './Discount.scss'

const Discount = () => {
	return (
		<section className='discount'>
			<div className='overlay' />

			<div className='discount_inside '>
				<div className='discount_title text-[70px] text-white font-bold'>
					Действующая программа
					<br /> лояльности <span className='percent'>10% </span>
					Дисконтная карта
				</div>
				<Button name='Узнать подробнее' />
			</div>
		</section>
	)
}

export default Discount
