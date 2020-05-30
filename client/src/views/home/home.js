import React, { useState, useRef, useEffect } from 'react'
import './home.css'
import logo from '../../assets/header-logo.png'
import ad from '../../assets/ad.jpg'
import headline from '../../assets/headline.png'

import Signup from './components/signup/signup'
import Login from './components/login/login';
import Populars from './components/populars/populars';
import Message from './components/message/message'
import Navlink from './components/oAuth/oAuth'



const Home = () => {
    const [message, setMessage] = useState(null);
    let timerID = useRef(null);

    function updateMessage(newValue) {
        setMessage(newValue);
    }

    useEffect(() => {
        timerID = setTimeout(() => {
            setMessage(null)
        }, 2000)
    }, [message])

    return (
        <div className='wrapper'>

            <div className='header'>
                <div className='container'>
                    {/* **************** section 1 ***************** */}
                    <section className='sec01'>
                        <div className='row'>

                            {/* **************** logo ***************** */}
                            <div className='col-md-6 logo-wrapper'>
                                <img src={logo} alt="logo" className='logo' />
                            </div>

                            {/* ******************* login wrapper **************** */}
                            <div className='col-md-6 login-wrapper'>
                                <Login message={message} loginMessage={updateMessage} />
                            </div>

                        </div>
                    </section>

                    <hr className="solid" />


                    {/* **************** section 2 ***************** */}
                    <section className='row sec02'>
                        <div className='col-md-7 headline-wrapper'>
                            <img src={headline} alt="headline" className='headline' />
                            {message ? <Message message={message} /> : null}
                        </div>

                        <div className='col-md-5 register-box'>
                            <div className='signup-wrapper'>
                                <Signup message={message} signupMessage={updateMessage} />
                            </div>
                            <div className='third-party-signin-box'>
                                <Navlink />
                            </div>
                        </div>
                    </section>
                </div>
            </div>


            {/* **************** section 3 ***************** */}
            <div className='container body'>
                <section className='row sec03'>

                    <div className='col-md-7 '>
                        <Populars />
                    </div>

                    <div className='col-md-5 '>
                        <img src={ad} alt="logo" className='ad' />
                    </div>
                </section>
            </div>
        </div >
    )
}

export default Home;