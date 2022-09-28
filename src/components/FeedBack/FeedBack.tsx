import React from 'react'

import { Swiper, SwiperSlide } from 'swiper/react';
import cn from 'classnames'
import SwiperCore, { Pagination } from 'swiper';
import icon from '../../assets/images/quotes.png'
import 'swiper/css';
import './FeedBack.scss';

const FeedBack = () => {
    const [currentSlide, setSlide] = React.useState(0);
    const arrImg = [
        'http://websmirno.site/viktor/prolaundry/images/blog-slider-img01.jpg',
        'http://websmirno.site/viktor/prolaundry/images/blog-slider-img01.jpg',
        'http://websmirno.site/viktor/prolaundry/images/blog-slider-img01.jpg',
        'http://websmirno.site/viktor/prolaundry/images/blog-slider-img01.jpg'
    ]
    SwiperCore.use([Pagination]);
    return (
        <div className="feedback container mx-auto px-[100px] pt-[60px]">
            <div className='grid grid-cols-2 gap-[90px] justify-center items-center'>
                <div className='feedback_images grid grid-cols-2 gap-[30px]'>
                    {arrImg.map((src, i) => (
                        <div className='feedback_img relative'>
                            {currentSlide === i && <div className='absolute top-[50%] left-[50%] translate-y-[-50%] translate-x-[-50%] bg-blue  px-[25px] py-[30px] rounded-[100%]'>
                                <img src={icon} alt="" />
                            </div>}
                            {currentSlide !== i && <div className='absolute top-0 left-0 bg-gray opacity-40 w-[100%] h-[100%]'></div>}
                            <img src={src} alt="" />
                        </div>
                    ))}
                </div>
                <div className='h-[100%]'>
                    <Swiper
                        className='h-[100%]'
                        spaceBetween={50}
                        slidesPerView={1}
                        onSlideChange={(e) => setSlide(e.activeIndex)}
                        pagination={{
                            clickable: true
                        }}
                    >
                        <SwiperSlide className='flex flex-col justify-between h-[100%] py-[60px]'>
                            <div className='flex flex-col gap-[5px]'>
                                <div className='text-[#323232] text-[32px] font-bold mb-5'>The Quality of Work Was<br /> Excellent!</div>
                                <div className='text-[#7b7b7b]'>
                                    Хочу поблагодарить химчистку за хорошую работу. Свадебное платье почистили здорово и я смогла его продать по хорошей цене. На платье внизу было куча кружев и они были все пыльные, из химчистки платье пришло белоснежным вплоть до самых маленьких кружавчиков..
                                </div>
                            </div>
                            <div className='font-bold mt-[100px]'>- Лидия</div>
                        </SwiperSlide>
                        <SwiperSlide className='flex flex-col justify-between h-[100%] py-[60px]'>
                            <div className='flex flex-col gap-[5px]'>
                                <div className='text-[#323232] text-[32px] font-bold mb-5'>The Quality of Work Was<br /> Excellent!</div>
                                <div className='text-[#7b7b7b]'>
                                    Хочу поблагодарить химчистку за хорошую работу. Свадебное платье почистили здорово и я смогла его продать по хорошей цене. На платье внизу было куча кружев и они были все пыльные, из химчистки платье пришло белоснежным вплоть до самых маленьких кружавчиков..
                                </div>
                            </div>
                            <div className='font-bold mt-[100px]'>- Лидия</div>
                        </SwiperSlide>
                        <SwiperSlide className='flex flex-col justify-between h-[100%] py-[60px]'>
                            <div className='flex flex-col gap-[5px]'>
                                <div className='text-[#323232] text-[32px] font-bold mb-5'>The Quality of Work Was<br /> Excellent!</div>
                                <div className='text-[#7b7b7b]'>
                                    Хочу поблагодарить химчистку за хорошую работу. Свадебное платье почистили здорово и я смогла его продать по хорошей цене. На платье внизу было куча кружев и они были все пыльные, из химчистки платье пришло белоснежным вплоть до самых маленьких кружавчиков..
                                </div>
                            </div>
                            <div className='font-bold mt-[100px]'>- Лидия</div>
                        </SwiperSlide>
                        <SwiperSlide className='flex flex-col justify-between h-[100%] py-[60px]'>
                            <div className='flex flex-col gap-[5px]'>
                                <div className='text-[#323232] text-[32px] font-bold mb-5'>The Quality of Work Was<br /> Excellent!</div>
                                <div className='text-[#7b7b7b]'>
                                    Хочу поблагодарить химчистку за хорошую работу. Свадебное платье почистили здорово и я смогла его продать по хорошей цене. На платье внизу было куча кружев и они были все пыльные, из химчистки платье пришло белоснежным вплоть до самых маленьких кружавчиков..
                                </div>
                            </div>
                            <div className='font-bold mt-[100px]'>- Лидия</div>
                        </SwiperSlide>
                    </Swiper>
                </div>
            </div>
        </div>
    )
}

export default FeedBack