import React, { Fragment } from 'react';
import { NavLink } from 'react-router-dom';

const Header: React.FC = () => {
    return (
        <Fragment>
        <nav className="header">
            <NavLink to="/home">Home</NavLink> |
            <NavLink to="/about">About</NavLink> |
            <NavLink to={{pathname:"/about", hash:"#256", search:"a=18&n=b"}} state={{'g':'n'}}>About-Object</NavLink> |
            <NavLink to="/wallet">Wallet</NavLink> |
            <NavLink to="/test1">Test1</NavLink> |
            <NavLink to="/test/abc2">Test2</NavLink> |
            <NavLink to="/admin">Admin</NavLink>
        </nav>
    </Fragment>

    );
};

export default Header;