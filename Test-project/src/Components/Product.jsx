import React, { useState } from 'react'
import { Button } from '@mui/material';
import IconButton from '@mui/material/IconButton';
import { useNavigate } from 'react-router-dom';



function Product({product}) {

  const navigate = useNavigate();
   if (!product) return null;
  

  const {id,title , price , description , image} = product;
  return (
    <div className='h-full mt-5'>
    <div className='flex flex-col justify-center items-center p-6 border-2 overflow-hidden'>
        <div><img src={image} width={80} height={80} className='object-contain pb-4'/></div>
        <div>
          <hr/>
          <div className='text-xl p-4 text-center sm:text-base
           md:text-sm'>
            {title}
            <hr/>
          </div>
          <div className='text-sm font-semibold line-clamp-3 overflow-hidden text-center pb-4'>
            {description}
          </div>
          <div className='text-red-600 font-semibold flex flex-col justify-around items-center pt-5'>
            <div>
            {price} $
            </div>
            <div>
                <Button onClick={() => navigate(`/product-details/${id}`)} variant='contained' size='small'>Detay</Button>
            </div>
            
          </div>
        </div>
    </div>
    </div>
  )
}

export default Product