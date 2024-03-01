import React from 'react'
import Carousel from './Carousel';
import '../App.css'
import Footer from './Footer';
import HomeCards from './HomeCards';
import HomeBody from './HomeBody';


function Home() {
    return (
        <>
            <section id='carousel'>

                <div className='container container-fluid carousel p-5 bg-dark'>
                    <Carousel />
                </div>
            </section>
            <section id="home" className="container m-auto">
                <HomeBody />
            </section>
            <section id="homecards" >

                <div className=''>
                    <HomeCards />
                </div>
            </section>
            <section id='footer'> <Footer /></section>

        </>
    )
}

export default Home