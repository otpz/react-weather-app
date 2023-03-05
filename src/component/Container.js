import React from 'react'
import Header from './Header'
import WeatherInfo from './WeatherInfo'
import Footer from './Footer'

function Container() {

    return (
        <div className='container'>
            <Header/>
            <WeatherInfo/>
            <Footer/>
        </div>
    )
}

export default Container