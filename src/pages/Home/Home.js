import React from 'react'
import logo from '../../assets/logo.svg'
import './Home.css'

const Home = () => {
    return (
        <div className="home-container">
            <img src={logo} className="home-logo" alt="rookly logo"/>
                <h3>Aguarde, estamos chegando...</h3>
                <div className="loader"></div>
        </div>
    )
}

export default Home