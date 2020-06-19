import React from 'react'

import './categories-show.css'

import cat from '../../../../assets/cat01.jpg'
import catwoman from '../../../../assets/cat-woman5.jpg'
import catmen from '../../../../assets/cat-man5.jpg'
import catgirls from '../../../../assets/cat-girl3.jpg'
import catboy from '../../../../assets/cat-boy.jpg'


function CategoriesShow() {
    return (
        <div className='horizontal-layout category-show '>

            <div className="main-banner">
                <a href="products.html">
                    <img src={cat} alt="" />
                </a>
            </div>

            <div className="vertical-layout categories">

                <div className="horizontal-layout">
                    <div className="category-element">
                        <a href="products.html">
                            <img src={catwoman} alt="" />
                            <p>Women</p>
                        </a>
                    </div>
                    <div className="category-element">
                        <a href="products.html">
                            <img src={catmen} alt="" />
                            <p>Men</p>
                        </a>
                    </div>
                </div>
                <div className="horizontal-layout">
                    <div className="category-element">
                        <a href="products.html">
                            <img src={catgirls} alt="" />
                            <p>Girls</p>
                        </a>
                    </div>
                    <div className="category-element">
                        <a href="products.html">
                            <img src={catboy} alt="" />
                            <p>Boys</p>
                        </a>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default CategoriesShow;