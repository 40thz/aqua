import Delivery from '@components/Delivery/Delivery'
import Discount from '@components/Discount/Discount'
import FeedBack from '@components/FeedBack/FeedBack'
import Header from '@components/Header/Header'
import { Services } from '@components/Services/Services'
import Slider from '@components/Slider/Slider'
import SociumDiscount from '@components/SociumDiscount/SociumDiscount'
import Adresses from '@components/Adresses/Adresses'
import React from 'react'
import Footer from '@components/Footer/Footer'

const HomePage = () => {
	return (
		<>
			<Header />
			<Slider />
			<Discount />
			<SociumDiscount />
			<Services />
			<Delivery />
			<FeedBack />
			<Adresses />
			<Footer />
		</>
	)
}

export default HomePage
