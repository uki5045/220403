import React, {useEffect} from 'react';
import {useParams} from "react-router-dom";
import {useDispatch, useSelector} from "react-redux";
import {detailProduct} from "../action/productActions";


const ProductDetail = () => {

    const params = useParams()

    const dispatch = useDispatch()

    const productDetails = useSelector((state) => state.productDetails)

    const {loading, product, error} = productDetails

    console.log("++++++++++++++++++++", product)

    useEffect(() => {
        if (!product._id) {
            dispatch(detailProduct(params.productId))
        }
    }, [dispatch])

    return (
        <div>
            <h1>{params.productId}</h1>
            {/*<h1>{product.name}</h1>*/}
            {/*<h1>{product.description}</h1>*/}
        </div>
    );
};

export default ProductDetail;