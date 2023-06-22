import React from 'react';
import Navber from '../componets/sheare/Navber';
import { Outlet } from 'react-router-dom';
import Footer from '../componets/sheare/footer/Footer';

const Main = () => {
    return (
        <div>
            <Navber/>
            <div  className='md:min-h-[calc(100vh-300px)]'>
            <Outlet></Outlet>
            </div>
            <Footer/>
        </div>
    );
};

export default Main;