import React from 'react';
import logo from '../../images/Logo.svg'
import './Header.css'
const Header = () => {
    return (
        <div>
            <nav>
                <div className="logo">
                 <a href="#">   <img src={logo} alt="" /></a>
                </div>
                <div>
                    <ul className='menu-list'>
                        <li><a href="#">Shopping</a></li>
                        <li><a href="#">Inverntory</a></li>
                        <li><a href="#">Orders</a></li>
                        <li><a href="#">About</a></li>
                    </ul>
                </div>
            </nav>
        </div>
    );
};

export default Header;