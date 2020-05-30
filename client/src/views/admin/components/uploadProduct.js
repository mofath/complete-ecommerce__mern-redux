import React, { useState } from 'react'
import Axios from 'axios';

import Dropzone from 'react-dropzone';
import { BsCloudUpload } from 'react-icons/bs';
import './fileUpload.css'

const Continents = [
    { key: 1, value: "Eletronics" },
    { key: 2, value: "Clothes" },
    { key: 3, value: "Gifts" },
]

function UploadProductPage(props) {

    const [TitleValue, setTitleValue] = useState("")
    const [DescriptionValue, setDescriptionValue] = useState("")
    const [PriceValue, setPriceValue] = useState(0)
    const [ContinentValue, setContinentValue] = useState(1)
    const [Images, setImages] = useState([])

    const onTitleChange = (event) => { setTitleValue(event.currentTarget.value) }
    const onDescriptionChange = (event) => { setDescriptionValue(event.currentTarget.value) }
    const onPriceChange = (event) => { setPriceValue(event.currentTarget.value) }
    const onContinentsSelectChange = (event) => { setContinentValue(event.currentTarget.value) }


    const onSubmit = (event) => {
        event.preventDefault();

        if (!TitleValue || !DescriptionValue || !PriceValue || !ContinentValue || !Images) {
            return alert('fill all the fields first!')
        }

        const variables = {
            writer: "5ebf1334516a1860e8d1fcfb",
            title: TitleValue,
            description: DescriptionValue,
            price: PriceValue,
            images: Images,
            continents: ContinentValue,
        }

        Axios.post('http://localhost:5000/product/uploadProduct', variables)
            .then(response => {
                console.log(response);
                alert('Product Successfully Uploaded')
            })
            .catch(err => alert('failed'))
    }


    const onDrop = (files) => {
        let formData = new FormData();
        const config = {
            header: { 'content-type': 'multipart/form-data' }
        }
        formData.append("file", files[0])
        Axios.post('http://localhost:5000/product/uploadImage', formData, config)
            .then(response => {
                if (response.data.success) {
                    setImages([...Images, response.data.image])
                } else {
                    alert('Failed to save the Image in Server')
                }
            })
    }

    const onDelete = (image) => {
        const currentIndex = Images.indexOf(image);
        let newImages = [...Images]
        newImages.splice(currentIndex, 1)
        setImages(newImages)
    }


    return (
        <div className="container">

            {/* ************************** drop zone ****************************** */}
            <div className="row uploadProduct">
                <div className="col-sm-9 col-md-6 col-lg-6">
                    <Dropzone
                        onDrop={onDrop}
                        multiple={false}
                        maxSize={80000000}
                        style={{}}
                    >
                        {({ getRootProps, getInputProps }) => (
                            <div
                                className='dropzone-container'
                                {...getRootProps({ className: 'dropzone' })}
                            >
                                <input {...getInputProps()} />
                                <div className="upload-icon">
                                    <BsCloudUpload size="80px" color="#3aa4df" />
                                </div>

                                <h3 className='dropzone-text'>Drag 'n' drop or</h3>
                                <button type="button" className="browse-btn">Browse</button>
                                <p className="format-text">.png  .jpg</p>
                            </div>
                        )}
                    </Dropzone>
                </div>

                {/* ************************** product form ****************************** */}
                <div className="col-sm-3 col-md-6 col-lg-4">
                    <div className="product-form">
                        <form onSubmit={onSubmit} >
                            <div className="formGroup">
                                <label className="col-sm-3 formLabel">Title</label>
                                <input
                                    type="text"
                                    className="col-sm-10 formInput"
                                    onChange={onTitleChange}
                                    value={TitleValue}
                                />
                            </div>

                            <div className="formGroup">
                                <label className="col-sm-3 formLabel">Description</label>
                                <textarea
                                    className="col-sm-10"
                                    rows="5"
                                    onChange={onDescriptionChange}
                                    value={DescriptionValue}
                                />
                            </div>

                            <div className="formGroup">
                                <label className="col-sm-3 formLabel">Price($)</label>
                                <input
                                    className="col-sm-10 formInput"
                                    onChange={onPriceChange}
                                    value={PriceValue}
                                    type="number"
                                />
                            </div>

                            <div className="formGroup">
                                <label className="col-sm-3 formLabel">Category</label>
                                <select
                                    className="col-sm-10 formInput"
                                    onChange={onContinentsSelectChange}
                                    value={ContinentValue}>
                                    {Continents.map(item => (
                                        <option key={item.key} value={item.key}>{item.value} </option>
                                    ))}
                                </select>
                            </div>

                            <div className="form-group">
                                <button
                                    className="btn btn-success col-sm-10"
                                    onClick={onSubmit}
                                >
                                    Save
                            </button>
                            </div>
                        </form>
                    </div>

                </div>
            </div>


            {/* ************************** gallery ****************************** */}
            <div className="gallery-wrapper">
                <h5>Recently uploaded images</h5>

                <div className="gallery">
                    {Images.map((image, index) => (
                        <div onClick={() => onDelete(image)}>
                            <button type="button" className="close" data-dimiss="alert" onClick={() => onDelete(image)}>
                                &times;
                        </button>
                            <img
                                className="gallery-image"
                                src={`http://localhost:5000/${image}`} alt={`productImg-${index}`} />
                        </div>
                    ))}
                </div>

            </div>


        </div>
    )
}

export default UploadProductPage