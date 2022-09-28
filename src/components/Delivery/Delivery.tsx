import Button from '@components/Button/Button'
import React from 'react'
import './Delivery.scss'
const Delivery = () => {
    return (
        <div
            style={{ backgroundBlendMode: 'soft-light', animation: 'bgSlide 20s linear infinite' }}
            className='
            delivery
            bg-[url(https://qondri-html.vercel.app/assets/images/shapes/cta-one-shape.png)]
            bg-no-repeat
            bg-cover 
            bg-center
            bg-[#89b92e]
            mt-[60px]
            flex
            justify-between
            items-center
            text-white'>
            <div className="relative container mx-auto flex justify-between items-center px-[100px] gap-[200px]">
                <div className='relative  w-[460px]'>
                    <div className='absolute top-[-200px] left-[0px]'>
                        <img src="https://qondri-html.vercel.app/assets/images/resources/cta-one-car.png" alt="" />
                    </div>
                </div>
                <div className='flex items-center gap-[100px]'>
                <div className='text-[30px] font-bold w-[100%] '>
                    Выезд курьера бесплатно <br />от 1 000 руб.
                </div>
                <div className='py-[130px]'>
                    <Button name='Позвонить' />
                </div>
                </div>
            </div>
        </div>
    )
}

export default Delivery