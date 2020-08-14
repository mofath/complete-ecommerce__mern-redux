import React, { useEffect, useState } from 'react'

import { useDispatch, useSelector } from 'react-redux'

import { addToCart } from "../../../_store/modules/cart/actions";
import productService from '../../../_services/product.service';
import { getMessage, displayMessage } from '../../../_store/modules/alert/actions'
import { AuthMsg } from "../../../assets/data/msgs";

import ProductSection from './components/ProductSection/ProductSection'
import AddToCartSideBar from './components/AddToCartSideBar/AddToCartSideBar'
import ReviewSection from './components/ReviewsSection/ReviewsSection'
import Spinner from '../../UI/Spinner/Spinner'

import classes from './Product.module.css'

function ProductDetail(props) {
    const productId = props.match.params.id;

    const [Product, setProduct] = useState({})
    const [IsLoading, setIsLoading] = useState(true);

    const authReducer = useSelector(state => state.authReducer);
    const { isAuthenticated } = authReducer;

    const cartReducer = useSelector(state => state.cartReducer);
    const { isLoading } = cartReducer;

    const dispatch = useDispatch();

    useEffect(() => {
        (async () => {
            const { results, isLoading } = await productService.getProductByID(productId).read();
            setIsLoading(isLoading);
            setProduct({ ...results })
        })()
    }, [])

    const addToCartHandler = () => {
        if (isAuthenticated) dispatch(addToCart(productId));
        else {
            dispatch(getMessage(AuthMsg, true));
            dispatch(displayMessage('info'));
        }
    }

    return (
        <div className={classes.ProductScreen}>
            <main className="vertical-layout">
                {!IsLoading ? <ProductSection product={Product} /> : <Spinner />}
                {!IsLoading && <ReviewSection productId={productId} />}
            </main>

            <aside>
                <AddToCartSideBar clicked={addToCartHandler} isLoading={isLoading} />
            </aside>

        </div>
    )
}

export default ProductDetail;