import React from 'react';
import { Link } from 'react-router-dom';
import LogeIn from '../Home/LogeIn';

const Header = () => {
    return (
        <div>
            <Link to='/home'>Home </Link> 
            <Link to='/login'> Login </Link> 
        </div>
    );
};

export default Header;