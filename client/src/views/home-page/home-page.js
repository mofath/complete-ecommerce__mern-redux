import React, { useState, useRef, useEffect } from 'react'
import './home-page.css'
import mainbanner from '../../assets/header-banner03.jpg'

import Signup from './components/signup/signup'
import Login from './components/login/login';
import Message from './components/message/message'
import OAuthBox from './components/oAuth/oAuth'
import RecommendedProducts from './components/recommended-products/recomnded-products'
import SliderWrapper from './components/recommended-products/slider-wrapper'
import CategoriesShow from './components/categories-show/categories-show'

function HomePage () {
    const [message, setMessage] = useState(null);

    function updateMessage(newValue) {
        setMessage(newValue);
    }

    useEffect(() => {
        const timer = setTimeout(() => setMessage(null), 2000);
        return () => clearTimeout(timer);
    }, [message])


    return (
        <div className="homepage-wrapper">
            <div className="homepage-content vertical-layout">

                <div className="message-wrapper">
                    {message ? <Message message={message} /> : null}
                </div>


                <div className="header">
                    <sction className="sec02 horizontal-layout container">
                        <div className="vertical-layout logo-wrapper">
                            <h1 className="logo"><span>Golden</span>Shop</h1>
                        </div>

                        <div className="vertical-layout login-wrapper">
                            <Login message={message} loginMessage={updateMessage} />
                        </div>
                    </sction>

                    <sction className="sec03 horizontal-layout container">
                        <div className="vertical-layout main-banner-wrapper">
                            <img src={mainbanner} alt="headline" className='mainbanner' />
                        </div>
                        <div className="vertical-layout signup-wrapper">
                            <Signup message={message} signupMessage={updateMessage} />
                            <div className="oauth-box">
                                <OAuthBox />
                            </div>
                        </div>
                    </sction>
                </div>

                <sction className="sec04 card container">
                    <CategoriesShow />
                </sction>

                <sction className="sec05">
                    <SliderWrapper>
                        <RecommendedProducts />
                    </SliderWrapper>
                </sction>

            </div>

        </div >
    )
}

export default HomePage;