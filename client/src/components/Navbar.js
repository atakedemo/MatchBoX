import React from 'react'
import '../index.css';
import { BrowserRouter, Route, Routes, Link} from 'react-router-dom';

const Navbar = () => {
    return (
        <nav>
            <ul className="navLinks">
             <li><a href='/portfolio' style={{ color: "#fff", textDecoration: 'none' }}>Portfolio</a></li>
             <li><a href='/trophies' style={{ color: "#fff", textDecoration: 'none' }}>Torophies</a></li>
             <li><a href='/portfolio' style={{ color: "#fff", textDecoration: 'none' }}>Vote</a></li>
            </ul>

            <ul className="navLinks2">
             <li>FAQ</li>
             <li>Contact</li>
            </ul>
        </nav>

    )
}

export default Navbar