import React from 'react';
import { Outlet } from 'react-router-dom';
import Header from '../Component/Header/Header';
import Home from '../Component/login/Home';

const Main = () => {
    return (
        <div>
            <h2>This is main</h2>
           <Header></Header>
           <Outlet></Outlet>
        </div>
    );
};

export default Main;