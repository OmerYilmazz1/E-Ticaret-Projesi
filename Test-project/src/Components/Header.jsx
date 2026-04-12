import React, { useState } from 'react'
import Logo from '../images/logo2.png.png'
import MenuIcon from '@mui/icons-material/Menu';
import { Link } from 'react-router-dom';
import Badge from '@mui/material/Badge';
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import IconButton from '@mui/material/IconButton';
import Drawer from '@mui/material/Drawer';
import CloseIcon from '@mui/icons-material/Close';

function Header() {

    const [shoppingCount , setShoppingCount] = useState(0);
    const [open , setOpen] = useState(false);
  return (
    <div className='flex justify-between items-center bg-gray-300 w-[100%]'>
        <div>
            <img src={Logo} width={150} height={150} alt='LOGO'/>
        </div>
         <div className='hidden md:flex gap-5 '>
            <Link to='/' className='p-4 font-bold font-mono rounded-md hover:bg-gray-500 hover:text-[#fff]'>AnaSayfa</Link>
            <Link to='/products' className='p-4 font-bold rounded-md font-mono hover:bg-gray-500 hover:text-[#fff]'>Ürünler</Link>
        </div>
        <div className='flex items-center p-4'>
                <div className='md:hidden'>
                <IconButton color='inherit' onClick={() => setOpen(true)}>
                <MenuIcon fontSize='medium'/>
                </IconButton>
                </div>
                <div>
                <IconButton color='inherit'>
                 <Badge color="error" badgeContent={shoppingCount} max={9}>
                    <ShoppingCartIcon />
                </Badge>
                </IconButton>
                </div>
            </div>
            <Drawer anchor='right' open={open} onClose={() => setOpen(false)}>
                <div className='bg-gray-100 p-5 flex justify-end'>
                    <IconButton color='inherit' onClick={() => setOpen(false)}>
                        <CloseIcon fontSize='medium'/>
                    </IconButton>
                </div>
                <div className='flex flex-col w-64 items-center p-10 gap-8 bg-gray-100 h-full'>
                    <Link to='/' className='p-4 font-bold font-mono border-b-2 border-black' onClick={() => setOpen(false)}>AnaSayfa</Link>
                        
                    <Link to='/products' className='p-4 font-bold font-mono border-b-2 border-black ' onClick={() => setOpen(false)}>Ürünler</Link>
                </div>
            </Drawer>
        </div>
  )
}

export default Header