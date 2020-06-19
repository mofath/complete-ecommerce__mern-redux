import React from 'react'
import './oAuth.css'
const fbIcon = "https://s.gr-assets.com/assets/gr/share_module/share_facebook_circle-ecf94fc18c887e845025d979d27f758d.svg"
const twitterIcon = "https://s.gr-assets.com/assets/gr/share_module/share_twitter_circle-1e3cc199af6bf2bd798502acf873657a.svg"
const googleIcon = "https://s.gr-assets.com/assets/gr/third_party/google_circle-694153be668f0720f058e755b6f136c6.png"
const amazonIcon = "https://s.gr-assets.com/assets/gr/third_party/amazon_circle-5596868f0d928f2945f3374b01f5e10b.png"

const NavLInk = () => {
    return (

        <div class="oauth-social-icons-wrapper">
            <p className='oauth-text'>or sign in using</p>
            <ul class="oauth-social-list">
                <li className='oauth-item'><a href="/" > <img className="oauth-social-icon" src={fbIcon} alt='' /> </a></li>
                <li className='oauth-item'><a href="/" > <img className="oauth-social-icon" src={twitterIcon} alt='' /> </a></li>
                <li className='oauth-item'><a href="/" > <img className="oauth-social-icon" src={googleIcon} alt='' /> </a></li>
                <li className='oauth-item'><a href="/"> <img className="oauth-social-icon" src={amazonIcon} alt='' /> </a></li>
            </ul>
        </div>

    )
}

export default NavLInk;