import React from 'react'
import classes from './OAuthBox.module.css'

import fbIcon from '../../../../../assets/img/icons/facebook_circle.svg'
import twitterIcon from '../../../../../assets/img/icons/twitter_circle.svg'
import googleIcon from '../../../../../assets/img/icons/google_circle.png'
import amazonIcon from '../../../../../assets/img/icons/amzon_circle.png'


const OAuthBox = () => {
    return (

        <div className={classes.OAuthBox}>
            <p >or sign in using</p>
            <ul>
                <li key="1" ><a href="/" > <img src={fbIcon} alt='' /> </a></li>
                <li key="2" ><a href="/" > <img src={twitterIcon} alt='' /> </a></li>
                <li key="3" ><a href="/" > <img src={googleIcon} alt='' /> </a></li>
                <li key="4" ><a href="/"> <img src={amazonIcon} alt='' /> </a></li>
            </ul>
        </div>

    )
}

export default OAuthBox;