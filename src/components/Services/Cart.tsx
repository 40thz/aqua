import React from 'react'
import icon from '../../assets/images/washIcon.png'
const Cart = () => {
    return (
        <div className="services-one__single">
            <div className="services-one__img">
                <img src="https://qondri-html.vercel.app/assets/images/services/services-1-1.jpg" alt="" />
                <div className="services-one__icon">
                    <span className="w-[65px]">
                        <img src={icon} alt="" />
                    </span>
                </div>
            </div>
            <div className="services-one__content">
                <h3 className="services-one__title"><a href="dry-cleaning.html">Кожа</a></h3>
                <div className="services-one__btn-box">
                    <a href="dry-cleaning.html" className="thm-btn services-one__btn">Подробнее <span className="icon-right-arrow"></span></a>
                </div>
            </div>
        </div>
    )
}

export default Cart