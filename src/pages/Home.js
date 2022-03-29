import React from 'react'
import FoodImage from '../assets/food.jpeg'
import '../styles/home.css'
import { Link } from 'react-router-dom'

function Home() {
    return (
        <div className='home' style={{backgroundImage:`url(${FoodImage})`}}>
            <div className='headerContainer'>
                <h1 style={{fontWeight: 'bold'}}>Food Corner</h1>
                <p>Tunisian food at a click</p>
                <Link to='/menu'>
                    <button>ORDER NOW</button>
                </Link>
            </div>
        </div>
    )
}

export default Home;