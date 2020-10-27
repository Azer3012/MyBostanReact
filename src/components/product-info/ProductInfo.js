import React from 'react'
import ProductAbout from '../aboute-product/ProductAbout'
import ProductInfoRoute from '../product-info-route/ProductInfoRoute'
import './productInfo.css'
const ProductInfo = () => {
    return ( 
        <div className="container-fluid">
            <ProductInfoRoute/>
            <hr/>
            <ProductAbout/>
        </div>
     );
}
 
export default ProductInfo;