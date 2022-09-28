
import React from 'react'
import logo from '../../assets/images/Homepage/logo.png'
import './Footer.scss'
import { FaVk, FaWhatsapp, FaPhone } from 'react-icons/fa';
const Footer = () => {
    return (
        <footer className="site-footer">
            <div className="site-footer-shape wow slideInLeft animated" data-wow-delay="100ms" data-wow-duration="2500ms"
                style={{ backgroundImage: 'url(https://qondri-html.vercel.app/assets/images/shapes/site-footer-shape.png)' }}>
            </div>
            <div className="site-footer__top">
                <div className="container mx-auto ">
                    <div className="grid grid-cols-3">
                        <div>
                            <div>
                                <div className="footer-widget__logo">
                                    <a href="index.html"><img src={logo} alt="" /></a>
                                </div>
                                <div className="footer-widget__about-text-box">
                                    <p className="footer-widget__about-text">Доверьте свои вещи профессионалам!”</p>
                                </div>
                                <div className="site-footer__social">
                                    <a href="#"><FaVk /></a>
                                    <a href="#"><FaWhatsapp /></a>
                                </div>
                            </div>
                        </div>
                        <div className="col-xl-3 col-lg-6 col-md-6 wow fadeInUp animated" data-wow-delay="200ms" >
                            <div className="footer-widget__column footer-widget__links clearfix">
                                <h3 className="footer-widget__title">Карта сайта</h3>
                                <ul className="footer-widget__links-list list-unstyled clearfix">
                                    <li><a href="services.html">Акции</a></li>
                                    <li><a href="dry-cleaning.html">Услуги</a></li>
                                    <li><a href="prices.html">Отзывы</a></li>
                                    <li><a href="contact.html">Контакты</a></li>
                                    <li><a href="contact.html">Телефоны</a></li>
                                </ul>
                            </div>
                        </div>
                        <div className="col-xl-3 col-lg-6 col-md-6 wow fadeInUp animated" data-wow-delay="300ms" >
                            <div className="footer-widget__column footer-widget__contact clearfix">
                                <h3 className="footer-widget__title">Контакты</h3>
                                <p className="footer-widget__contact-text">66 Road Broklyn Street, 600
                                    New York, USA</p>
                                <ul className="list-unstyled footer-widget__contact-list">
                                    <li className='flex items-center'>
                                        <FaPhone color='#fff'/>
                                        <div className="text">
                                            <a href="tel:83912016164">8 (391) 201-61-64</a>
                                        </div>
                                    </li>
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className="site-footer__bottom">
                <div className="container mx-auto ">
                    <div className="row">
                        <div className="col-xl-12">
                            <div className="site-footer__bottom-inner">
                                <p className="site-footer__bottom-text">© Copyright 2022
                                </p>
                                <ul className="list-unstyled site-footer__bottom-menu">
                                    <li><a href="about.html">Gang</a></li>
                                    <li><span>/</span></li>
                                    <li><a href="about.html">Privacy Policy</a></li>
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </footer>
    )
}

export default Footer