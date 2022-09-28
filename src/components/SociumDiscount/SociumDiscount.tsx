import React from 'react'
import './SociumDiscount.scss'
const SociumDiscount = () => {
    return (
        <div className="socialDiscount container mx-auto">
            <div
                style={{ backgroundBlendMode: ' soft-light' }}
                className='
              bg-[url(https://qondri-html.vercel.app/assets/images/shapes/commercial-shape-1.png)]
              bg-no-repeat
              bg-cover 
            bg-blue
              -translate-y-[60px]
              p-[100px]
              flex
              justify-between
              items-center
              text-white'>
                <div className='flex flex-col gap-3'>
                    <div className="title text-[20px]">
                        Социальные скидки
                    </div>
                    <div className="subtitle text-[50px] font-bold leading-[100%]">
                        Социальные <br />скидки
                    </div>
                </div>
                <div></div>
                <div className='flex flex-col'>
                    <ul className='only:py-22320'>
                        <li>5% Скидка студентам</li>
                        <li>10% Скидка пенсионерам</li>
                        <li>10% Скидка инвалидам ВОВ и многодетным семьям</li>
                        <li>50% Скидка на чистку детской одежды (до 34 размера)</li>
                        <li>Скидка по купону согласно указанному номиналу</li>
                    </ul>
                    <span className='mt-[20px] text-[12px] text-right'>*при предъявлении подтверждающих документов</span>
                </div>
                <div>
                    <img src="https://qondri-html.vercel.app/assets/images/resources/commercial-img-1.jpg" alt="" />
                </div>
            </div>
        </div >
    )
}

export default SociumDiscount