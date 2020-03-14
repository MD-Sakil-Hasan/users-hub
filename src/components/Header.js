import React from 'react';
import logo from '../../src/logo/LogoSample_ByTailorBrands.jpg';
import './Header.css';

const Header = () => {
    return (
        <div className="header">
            <img src={logo} alt="Logo"/>
            <nav>
                <div className="links">
                    <a href="/suggestions">Suggestions</a>
                    <a href="connected">Connected</a>
                    <a href="pending">Pending</a>
                </div>
                <div className="search-bar">
                    <input type="text" placeholder="I n p u t     N a m e"/>
                    <button>Search People</button>
                </div>
            </nav>
        </div>
    );
};

export default Header;