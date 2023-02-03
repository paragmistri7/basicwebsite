import React from 'react';
import { Route, Routes } from 'react-router-dom';
import About from './About';
import Contact from './Contact';
import Home from './Home';
import Login from './login';
import Navbar from './navbar ';
import Registration from './registration';
import Services from './Services';

const Router01 = () => {
    return (
        <>
            <Routes>
 
                <Route path='/' element = { <Login/>} ></Route>
                <Route path='/registration' element = { <Registration/>} ></Route>
                <Route path='/' element = { <Navbar/>} >
                    <Route path='/home' element={<Home/>} />
                    <Route path='/product' element={<Services/>} />
                    <Route path='/about' element={<About/>} />  
                    <Route path='/contact' element={<Contact/>} />
                    </Route>

            </Routes>
        </>
    );
};

export default Router01;