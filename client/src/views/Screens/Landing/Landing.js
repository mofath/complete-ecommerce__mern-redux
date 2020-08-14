import React, { useState, useEffect } from 'react'
import classes from './Landing.module.css'
import mainbanner from '../../../assets/img/sale-banner01.jpg'

import productService from '../../../_services/product.service'

import Signup from './components/Signup/Signup'
import Login from './components/Login/Login';
import OAuthBox from './components/OAuthBox/OAuthBox'
import RecommendedProducts from './components/RecommendedProducts/RecommendedProducts'
import CategoriesShow from './components/CategoryShow/CategoryShow'
import Logo from '../../UI/Logo/Logo'

const queryParams = {
    filters: {
        category: ['Shirts', 'Dresses', 'Jackets'],
        price: [400, 2000],
    },
    limit : 8
}

function HomePage() {
    const [Products, setProducts] = useState([]);
    const [Loaded, setLoaded] = useState(false);


    useEffect(() => {
        (async () => {
            const { results } = await productService.filterProducts(queryParams).read();
            setProducts([...results])
            setLoaded(true)
        })()
        return setLoaded(false)
    }, [])

  

    return (
        <div className={[classes.HomeScreen, "vertical-layout"].join(' ')}>

            <div className={[classes.Heading, "mycontainer"].join(' ')} >
                <section className={[classes.Sec01, "horizontal-layout"].join(' ')} >
                    <div className={[classes.LogoWrapper, "vertical-layout"].join(' ')} >
                        <Logo />
                    </div>
                    <div className={[classes.LoginWrapper, "vertical-layout"].join(' ')} >
                        <Login />
                    </div>
                </section>

                <section className={[classes.Sec02, "horizontal-layout"].join(' ')} >
                    <div className={[classes.Mainbanner, classes.DesktopOnly].join(' ')}>
                        <img src={mainbanner} alt="" />
                    </div>
                    <div className={[classes.SignupWrapper, "vertical-layout"].join(' ')} >
                        <Signup />
                        <OAuthBox />
                    </div>
                </section>
            </div>

            <section className={[classes.Sec03, "mycontainer"].join(' ')} >
                <CategoriesShow />
            </section>

            <section className={[classes.Sec04, "mycontainer"].join(' ')} >
                <RecommendedProducts loaded={Loaded} products={Products} />
            </section>
        </div >
    )
}

export default HomePage;