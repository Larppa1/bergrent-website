import './Landing.css'
import Navbar from '../../components/Navbar/Navbar'
import Footer from '../../components/Footer/Footer'
import Countdown from '../../components/Countdown/Countdown'
import { useEffect } from 'react'

export default function Landing() {
    useEffect(() => {
        document.getElementById('countdownTitle').style.opacity = 1
    })


    if(window.innerWidth < 768) {
        return(
            <div className='container bg-base-100'>
                <header id='landingHeader'>
                    <Navbar page="landing"/>
                    <section>
                        <article className='prose'>
                            <p id='countdownTitle'>Jettikauden alkuun on enää</p>
                        </article>
                        <Countdown />
                    </section>
                </header>
                <main id='landingMain'>
                    
                </main>
                <Footer />
            </div>
        )
    }else {
        return(
            <div className='bg-base-100'>
                <header id='landingHeader'>
                    <Navbar page="landing"/>
                </header>
                    <section style={{position: 'absolute', top: '15%', width: '100%', justifyContent: 'center', alignItems: 'center', display: 'flex', flexDirection: 'column'}}>
                        <article>
                            <p id='countdownTitle' style={{fontSize: 84, color: 'whitesmoke', marginBottom: 50, letterSpacing: 1.2, fontWeight: 100, width: '100%'}}>Jettikauden alkuun on enää</p>
                        </article>
                        <Countdown />
                    </section>
                <main id='landingMain'>
                    <section>
                        <article className='prose'>
                            <h3 style={{fontSize: 40, letterSpacing: 1.2, fontWeight: 200}}>Mitä voit odottaa kaudelta 2023?</h3>
                            <p style={{fontSize: 18, fontWeight: 300}}>Tänä vuonna aiomme panostaa entistä enemmän asiakaskokemuksen parantamiseen sekä toiminnan laajentamiseen. Tällä kaudella tarjontaamme kuuluu:</p>
                            <ul>
                                <li style={{fontSize: 20, fontWeight: 300}}>2kpl Sea Doo vesijettiä (Spark & Trixx)</li>
                                <li style={{fontSize: 20, fontWeight: 300}}>2kpl modernisti varusteltua mökkiä Ylläkseltä aivan laskettelurinteiden kupeesta</li>
                                <li style={{fontSize: 20, fontWeight: 300}}>Mahdollisesti jotain muutakin...</li>
                            </ul>
                            <p style={{fontSize: 22, fontWeight: 200, letterSpacing: 0.8}}>Seuraa meitä someissa @bergrent.fi jotta pysyt kartalla <span style={{fontWeight: 600}}>kesän säännöllisistä arvonnoista</span> sekä uusista lisäyksistä tarjontaamme!</p>
                        </article>
                    </section>
                </main>
                <Footer />
            </div>
        )
    }
}