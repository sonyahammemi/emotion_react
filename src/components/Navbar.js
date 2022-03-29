import React from 'react'
import logo from '../assets/logoo.jpg'
import {Link} from 'react-router-dom'
import '../styles/navbar.css'
import TocIcon from '@mui/icons-material/Toc';


function Navbar() {
    return (
        <div className='navbar'>
            <div className='leftSide'>
                <Link to='/'><img src={logo} alt='' /> </Link>
                <div className='hiddenLinks'>
                    <Link to="/">Home</Link>
                    <Link to="/menu">Menu</Link>
                    <Link to="/about">About</Link>
                    <Link to="/contact">Contact</Link>
                </div>
            </div>
            <div className='rightSide'>
                <Link to="/">Home</Link>
                <Link to="/menu">Menu</Link>
                <Link to="/about">About</Link>
                <Link to="/contact">Contact</Link>
                <button>
                    <TocIcon />
                </button>
            </div>
        </div>
    )
}

export default Navbar