import React from 'react'
import { useSelector } from 'react-redux';
import { useParams } from 'react-router-dom'
import ProductDetailsCard from '../Components/ProductDetailsCard';

function ProductDetails() {
    const {products} = useSelector((store) => store.product)
    const {id} = useParams();

  return (
    <div>
        {
            products && products.map((product) => {
                if(product.id === Number(id)){
                    return <ProductDetailsCard key={product.id} product = {product} />
                }
            })
        }
    </div>
  )
}

export default ProductDetails
