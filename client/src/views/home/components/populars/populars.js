import React from 'react'
import './populars.css'
import cover from '../../../../assets/cover.jpg'
import author from '../../../../assets/author.jpg'



export default function Populars() {


    return (
            <div className="row ">

                <div className="col-lg-12 col-sm-4 col-12 ">
                    <div className="row main-box-layout">
                        <div className="col-lg-12 col-sm-12 col-12 box box1">
                            <div className="label">
                                <h3><span className="title">Popular Books</span></h3>
                            </div>
                            

                            <div className="col-lg-12 gallery"> 
                                <a href='/' className="gallery-item">
                                    <img src={cover} className="gallery-img" alt='img' />
                                </a>

                                <a href='/' className="gallery-item">
                                    <img src={cover} className="gallery-img" alt='img' />
                                </a>

                                <a href='/' className="gallery-item">
                                    <img src={cover}  className="gallery-img" alt='' />
                                </a>
                             </div>

                        </div>

                    </div>
                </div>

                <div className="col-lg-12 col-sm-4 col-12 ">
                    <div className="row main-box-layout">

                        <div className="col-lg-12 col-sm-12 col-12 box box2">
                            <div className="label">
                                <h3 className="title">Popular Authors</h3>
                            </div>

                            <div className="col-lg-12 gallery"> 
                                <a href='/' className="gallery-item">
                                    <img src={author} className="gallery-img" alt='img' />
                                </a>

                                <a href='/' className="gallery-item">
                                    <img src={author} className="gallery-img" alt='img' />
                                </a>

                                <a href='/' className="gallery-item">
                                    <img src={author}  className="gallery-img" alt='img' />
                                </a>
                             </div>
                        </div>

                    </div>
                </div>

            </div>
    )
}