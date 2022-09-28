import React from 'react'
import './Advantages.scss'
import Cart from './Cart'
const Advantages = () => {
	return (
		<div className='container mx-auto'>
			<div className='grid grid-cols-3 -translate-y-[56px] z-40 relative'>
				<Cart
					title='100% гарантия качества'
					subtitle='Аквалоск — это индивидуальная чистка, только проверенные технологии и средсва, лучшее качество для Вас!'
				/>
				<Cart
					title='Опыт работы более 20 лет'
					subtitle=' Сочетание традиций и инноваций в заботе о Ваших вещах. Сделайте свою жизнь проще - доверьтесь профессионалам в вопросах чистоты!'
				/>
				<Cart
					title='Весь спектр услуг'
					subtitle='Вернем былой лоск натуральным и искусственным тканям и мехам, а также комбинированным изделиям и предметам интерьера'
				/>
			</div>
		</div>
	)
}

export default Advantages
