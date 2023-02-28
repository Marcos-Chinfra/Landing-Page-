import React from 'react'
import logo from '@imagenes/logo.png';
import lens from '@icons/search.svg';
import user from '@icons/user.svg';
import cart from '@icons/shopping_cart.svg';
import '../styles/header.scss'


const Header = () => {
    return (
        <nav>
            <img src={logo} alt='Logo' className='logo'/>
            <div className='page_options'>
                <ul>
                    <li><a href='/' >Home</a></li>
                    <li><a href='/'>About</a></li>
                    <li><a href='/'>Products</a></li>
                    <li><a href='/'>Blog</a></li>
                </ul>
            </div>
            <div className='user_options'>
                <ul>
                    <li>
                        <img src={lens}/>
                    </li>
                    <li>
                        <img src={user} />
                    </li>
                    <li>
                        <img src={cart} />
                    </li>
                </ul>
            </div>
        </nav>
    );
}

export default Header;