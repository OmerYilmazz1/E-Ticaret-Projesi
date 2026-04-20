import { Button } from '@mui/material';
import React from 'react'
import { useDispatch } from 'react-redux';
import {increment } from '../Redux/shoppingCartSlice';

function ProductDetailsCard({product}) {
   const {title , price , description , image} = product;

   const dispatch = useDispatch();


  return (
    <div className='flex justify-center items-center p-10 mt-10 gap-5'>
        <div className='w-30 md:w-36 sm:36'>
            <img src={image} alt='Ürün Fotoğrafı'/>
        </div>
        <div>
            <div className='text-2xl font-semibold mb-5 sm:text-xl'>
                {title}
            </div>
            <div className='opacity-50 mb-5'>
                {description}
            </div>
            <div className='text-red-600 font-semibold flex justify-between md:text-xl'>
                {price} $
                <Button variant='contained' size='small' onClick={() => dispatch(increment())}>SEPETE EKLE</Button>
            </div>
        </div>
    </div>
  )
}

export default ProductDetailsCard