import './App.css'
import { useState } from 'react';
import { useEffect } from 'react';
import Header from './Components/Header';
import { Route, Routes } from 'react-router-dom';
import Home from './pages/Home'
import Products from './pages/Products'


function App() {
    
    return (
        <div>
           <Header />
           <Routes>
                <Route path='/' element={<Home />}/>
                <Route path='/products' element={<Products />}/>
           </Routes>
        </div>
    )


}
export default App
