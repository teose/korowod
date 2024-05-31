import React from 'react';
import '../styles/Header.css';

const Header = () => (
    <header className="header">
        <div className="logo">Fundacja Korowód</div>
        <nav>
            <ul>
                <li>O nas</li>
                <li>Kontakt</li>
                <li>Dokonania</li>
            </ul>
        </nav>
    </header>
);

export default Header;