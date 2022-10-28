import './Landing.css'
import Navbar from '../../components/Navbar/Navbar'
import Footer from '../../components/Footer/Footer'
import Countdown from '../../components/Countdown/Countdown'
import { useEffect } from 'react'

export default function Landing() {
    useEffect(() => {
        if(window.innerWidth >= 768) { return }
        document.getElementById('countdownTitle').style.opacity = 1
    })


    if(window.innerWidth < 768) {
        return(
            <div className='container'>
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
            <div className='container'>
                <header id='landingHeader'>
                    <Navbar page="landing"/>
                </header>
                <main>

                </main>
                <Footer />
            </div>
        )
    }
}