import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { getAllProducts } from '../Redux/productSlice';
import Product from '../Components/Product';

function ProductList() {
    const dispatch = useDispatch();
    const {products} = useSelector((store) => store.product);
    useEffect(()=>{
        dispatch(getAllProducts());
    },[])
  return (
    <div className='flex flex-wrap md:grid grid-cols-6 gap-5'>
        {
            products?.map((product) => (
                <Product key={product.id} product={product}/>
            ))
        }
    </div>
  )
}

export default ProductList