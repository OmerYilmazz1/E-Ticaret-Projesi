import { Button } from '@mui/material';
import React from 'react'
import ProductList from '../Components/ProductList';
import { Outlet } from 'react-router-dom';

function Products() {
 


 return(
  <div>
    <ProductList/> 
    
  </div>
 )
}

export default Products