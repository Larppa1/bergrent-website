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
                    <section style={{position: 'absolute', top: '20%', width: '100%', justifyContent: 'center', alignItems: 'center', display: 'flex', flexDirection: 'column'}}>
                        <article className='prose'>
                            <p id='countdownTitle' style={{fontSize: 60, color: 'whitesmoke', marginBottom: 30, letterSpacing: 1.2, fontWeight: 200, width: '120%'}}>Jettikauden alkuun on enää</p>
                        </article>
                        <Countdown />
                    </section>
                <main id='landingMain'>
                    
                </main>
                <Footer />
            </div>
        )
    }
}