import React from 'react'

import { Link } from 'react-router-dom'

import banner from '../../../../../assets/img/category/banner.jpg'
import women from '../../../../../assets/img/category/women.jpg'
import men from '../../../../../assets/img/category/men.jpg'
import girls from '../../../../../assets/img/category/girls.jpg'
import boys from '../../../../../assets/img/category/boys.jpg'

import classes from './CategoryShow.module.css'

function CategoriesShow() {
    return (
        <div className={[classes.CategoriesShow, 'horizontal-layout'].join(' ')}>

            <div className={classes.Banner}>
                    <Link to="/"><img src={banner} alt="" /></Link>
            </div>

            <div className={[classes.Categories, "vertical-layout"].join(' ')}>
                <div className="horizontal-layout">
                    <Link to="/"><img src={women} alt="" /> <p>Women</p></Link>
                    <Link to="/"> <img src={men} alt="" /> <p>Men</p> </Link>
                </div>

                <div className="horizontal-layout">
                    <Link to="/"><img src={girls} alt="" /> <p>Girls</p>  </Link>
                    <Link to="/"><img src={boys} alt="" /> <p>Boys</p> </Link>
                </div>
            </div>

        </div>
    )
}

export default CategoriesShow;