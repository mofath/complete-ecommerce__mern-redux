import React, { useState } from 'react'

import { gender } from '../../../../../../../assets/data/gender'
import classes from './DataForm.module.css'

const DataForm = (props) => {
    const [TitleValue, setTitleValue] = useState(props.formType === "Edit" ? props.productToEdit.name : "")
    const [DetailsValue, setDetailsValue] = useState(props.formType === "Edit" ? props.productToEdit.details : "")
    const [CategoryValue, setCategoryValue] = useState(props.formType === "Edit" ? props.productToEdit.category : "Jackets")
    const [GenderValue, setGenderValue] = useState(props.formType === "Edit" ? props.productToEdit.gender : "Men")
    const [StockValue, setStockValue] = useState(props.formType === "Edit" ? props.productToEdit.stock : 0)
    const [PriceValue, setPriceValue] = useState(props.formType === "Edit" ? props.productToEdit.price : 0)

    const onTitleChange = (event) => { setTitleValue(event.currentTarget.value) }
    const onDetailsChange = (event) => { setDetailsValue(event.currentTarget.value) }
    const onCategorySelectChange = (event) => { setCategoryValue(event.currentTarget.value); }
    const onGenderSelectChange = (event) => { setGenderValue(event.currentTarget.value) }
    const onStockChange = (event) => { setStockValue(event.currentTarget.value) }
    const onPriceChange = (event) => { setPriceValue(event.currentTarget.value) }

    const onSubmit = async (event) => {
        event.preventDefault();

        // if (!TitleValue || !DetailsValue || !CategoryValue || !GenderValue || !StockValue || !PriceValue || !Images) {
        //     return alert('fill all the fields first!')
        // }

        const productValues = {
            writer: "5ebf1334516a1860e8d1fcfb",
            name: TitleValue,
            details: DetailsValue,
            category: CategoryValue,
            gender: GenderValue,
            stock: StockValue,
            price: PriceValue,
            images: props.images,
        }

        props.submit(productValues)
    }

    return (
        <form className={[classes.DataForm, "vertical-layout"].join(' ')} onSubmit={onSubmit} >
            <div className="vertical-layout">
                <label>Title</label>
                <input type="text" onChange={onTitleChange} value={TitleValue} />
            </div >

            <div className="vertical-layout">
                <label>Description</label>
                <textarea onChange={onDetailsChange} value={DetailsValue} />
            </div>

            <div>
                <div className="vertical-layout">
                    <label>Stock</label>
                    <input onChange={onStockChange} value={StockValue} type="number" />
                </div>

                <div className="vertical-layout">
                    <label>Price (EGP)</label>
                    <input onChange={onPriceChange} value={PriceValue} type="number" />
                </div>
            </div>

            <div>
                <div className="vertical-layout">
                    <label>Category</label>
                    <select onChange={onCategorySelectChange} value={CategoryValue}>
                        {props.categories.map(category => <option key={category._id} value={category.name}>{category.name}</option>)}
                    </select>
                </div>

                <div className="vertical-layout">
                    <label>Gender</label>
                    <select onChange={onGenderSelectChange} value={GenderValue} defaultValue="Men" >
                        {gender.map(item => <option key={item.key} value={item.name}>{item.name} </option>)}
                    </select>
                </div>
            </div>

            <div className={classes.Btns}>
                <button className={classes.SaveBtn} onClick={onSubmit} >{props.formType} Product</button>
                <button className={classes.CancelBtn} onClick={() => props.close()} >Cancel</button>
            </div>
        </form>
    )
}

export default DataForm