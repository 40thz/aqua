import React from 'react'

import { Swiper, SwiperSlide } from 'swiper/react'
import { EffectFade, Navigation } from 'swiper'

import 'swiper/css'
import './Slider.scss'
import Button from '../Button/Button'
import Advantages from '@components/Advantages/Advantages'

const Slider = () => {
	return (
		<div className='main__slider h-[93vh]'>
			<div className='slider__controll'>
				<div className='container mx-auto h-[100%] w-[100%] relative'>
					<div className='absolute right-0 top-[50%] translate-x-[-50%] flex flex-col gap-3'>
						<div className='swiper-button prev'>
							<svg
								className='w-[20px]'
								version='1.1'
								id='Layer_1'
								xmlns='http://www.w3.org/2000/svg'
								xmlnsXlink='http://www.w3.org/1999/xlink'
								x='0px'
								y='0px'
								width='64px'
								height='64px'
								viewBox='0 0 64 64'
								enableBackground='new 0 0 64 64'
								xmlSpace='preserve'>
								<g>
									<polyline
										fill='none'
										stroke='#000000'
										strokeWidth='2'
										strokeLinejoin='bevel'
										strokeMiterlimit='10'
										points='27,15 44,32 
		27,49 	'
									/>
								</g>
							</svg>
						</div>
						<div className='swiper-button next'>
							{' '}
							<svg
								className='w-[20px]'
								version='1.1'
								id='Layer_1'
								xmlns='http://www.w3.org/2000/svg'
								xmlnsXlink='http://www.w3.org/1999/xlink'
								x='0px'
								y='0px'
								width='64px'
								height='64px'
								viewBox='0 0 64 64'
								enableBackground='new 0 0 64 64'
								xmlSpace='preserve'>
								<g>
									<polyline
										fill='none'
										stroke='#000000'
										strokeWidth='2'
										strokeLinejoin='bevel'
										strokeMiterlimit='10'
										points='27,15 44,32 
		27,49 	'
									/>
								</g>
							</svg>
						</div>
					</div>
				</div>
			</div>
			<Swiper
				modules={[EffectFade, Navigation]}
				navigation={{
					nextEl: '.swiper-button.next',
					prevEl: '.swiper-button.prev',
				}}
				spaceBetween={0}
				slidesPerView={1}
				effect='fade'>
				<SwiperSlide>
					<div className='slider-bg'>
						<img
							src='https://qondri-html.vercel.app/assets/images/backgrounds/main-slider-1-1.jpg'
							alt=''
						/>
					</div>

					<div className='absolute top-0 left-0 z-10 w-[100%] h-[100%]'>
						<div className='container mx-auto h-[100%] flex  justify-center flex-col'>
							<div className='slider_head'>
								<p className='text-white text-[18px] mb-[10px]'>
									Химчистка & прачечная 1
								</p>
								<div className='text-white text-[60px] font-bold leading-[120%]'>
									Опыт работы более 20 лет <br />
									Доверьте свои вещи <br />
									профессионалам!
								</div>
							</div>
							<div className='slider_bottom'>
								<Button name='Позвонить' />
							</div>
						</div>
					</div>
					<div className='overaly' />
				</SwiperSlide>
				<SwiperSlide>
					<div className='slider-bg'>
						<img
							src='https://qondri-html.vercel.app/assets/images/backgrounds/main-slider-1-2.jpg'
							alt=''
						/>
					</div>
					<div className='absolute top-0 left-0 z-10 w-[100%] h-[100%]'>
						<div className='container mx-auto h-[100%] flex  justify-center flex-col'>
							<div className='slider_head'>
								<p className='text-white text-[20px] mb-[10px]'>
									Химчистка & прачечная 2
								</p>
								<div className='text-white text-[60px] font-bold leading-[120%]'>
									Опыт работы более 20 лет <br />
									Доверьте свои вещи <br />
									профессионалам!
								</div>
							</div>
							<div className='slider_bottom'>
								<Button name='Позвонить' />
							</div>
						</div>
					</div>
					<div className='overaly' />
				</SwiperSlide>
				<SwiperSlide>
					<div className='slider-bg'>
						<img
							src='https://qondri-html.vercel.app/assets/images/backgrounds/main-slider-1-1.jpg'
							alt=''
						/>
					</div>
					<div className='absolute top-0 left-0 z-10 w-[100%] h-[100%]'>
						<div className='container mx-auto h-[100%] flex  justify-center flex-col'>
							<div className='slider_head'>
								<p className='text-white text-[20px] mb-[10px]'>
									Химчистка & прачечная 3
								</p>
								<div className='text-white text-[60px] font-bold leading-[120%]'>
									Опыт работы более 20 лет <br />
									Доверьте свои вещи <br />
									профессионалам!
								</div>
							</div>
							<div className='slider_bottom'>
								<Button name='Позвонить' />
							</div>
						</div>
					</div>
					<div className='overaly' />
				</SwiperSlide>
				<SwiperSlide>
					<div className='slider-bg'>
						<img
							src='https://qondri-html.vercel.app/assets/images/backgrounds/main-slider-1-2.jpg'
							alt=''
						/>
					</div>
					<div className='absolute top-0 left-0 z-10 w-[100%] h-[100%]'>
						<div className='container mx-auto h-[100%] flex  justify-center flex-col'>
							<div className='slider_head'>
								<p className='text-white text-[20px] mb-[10px]'>
									Химчистка & прачечная 4
								</p>
								<div className='text-white text-[60px] font-bold leading-[120%]'>
									Опыт работы более 20 лет <br />
									Доверьте свои вещи <br />
									профессионалам!
								</div>
							</div>
							<div className='slider_bottom'>
								<Button name='Позвонить' />
							</div>
						</div>
					</div>
					<div className='overaly' />
				</SwiperSlide>
			</Swiper>
			<Advantages />
		</div>
	)
}

export default Slider
