import React, { useContext } from 'react'
import ProductAbout from '../aboute-product/ProductAbout'
import { Context } from '../context/Context'
import ProductInfoRoute from '../product-info-route/ProductInfoRoute'
import './productInfo.css'
const ProductInfo = () => {
    const {product}=useContext(Context)
    
    return ( 
        <div className="container-fluid">
            {
            product.name  ? (
                 (
                <div>
                    <ProductInfoRoute/>
                    <ProductAbout/>
                </div>
                )
            ):(null)
            }
            
        </div>
     );
}
 
export default ProductInfo;