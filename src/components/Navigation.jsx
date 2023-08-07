import React from 'react';
import { NavLink } from 'react-router-dom';


const Navigation = () => {
    return (
        <nav>
            <NavLink id='nav1' to='/' activeClassName='nav-active'>ACHAT</NavLink>
            <NavLink id='nav2' to='/comm' activeClassName='nav-active'>COMM</NavLink>
            <NavLink id='nav3' to='/Codes' activeClassName='nav-active'>CODES</NavLink>
        </nav>
    );
};

export default Navigation;