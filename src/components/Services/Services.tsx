import React from 'react'
import Cart from './Cart'

import { Swiper, SwiperSlide } from 'swiper/react';


import 'swiper/css';
import './Service.scss'
import SwiperCore, { Pagination } from 'swiper';
export const Services = () => {

    SwiperCore.use([Pagination]);
    return (
        <div className='services container mx-auto text-center px-[100px]'>
            <div className='mb-[30px] text-[50px] text-[#183862] font-bold'>
                Услуги
            </div>
            <div>
                <Swiper
                    slidesPerView={3}
                    spaceBetween={50}
                    pagination={{
                        clickable: true
                    }}
                >
                    <SwiperSlide> <Cart /></SwiperSlide>
                    <SwiperSlide> <Cart /></SwiperSlide>
                    <SwiperSlide> <Cart /></SwiperSlide>
                    <SwiperSlide> <Cart /></SwiperSlide>
                    <SwiperSlide> <Cart /></SwiperSlide>
                    <SwiperSlide> <Cart /></SwiperSlide>
                    <SwiperSlide> <Cart /></SwiperSlide>
                    <SwiperSlide> <Cart /></SwiperSlide>
                </Swiper>
            </div>
        </div>
    )
}
