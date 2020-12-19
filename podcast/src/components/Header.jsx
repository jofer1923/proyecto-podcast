import React from 'react'
import Logo from '../assets/static/logo.svg'
import '../assets/styles/components/Header.css';

const Header = () =>(

    <header className="Header">
            <nav className='Navegation'>
        <figure className="logo">
            <img src={Logo} alt=""/>
        </figure >
        <ul className='Navegation__menu'>
            <li className='Navigation__menu-item'><a href="">Episodio</a></li>
            <li className='Navigation__menu-item'><a href="">Nosotros</a></li>
            <li className='Navigation__menu-item'><a href="">Entrevista</a></li>
            <li className='Navigation__menu-item'><a href="">Tópicos</a></li>
        </ul>
    </nav>

    </header>

)

export default Header