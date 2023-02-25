import './Landing.css'
import Navbar from '../../components/Navbar/Navbar'
import Footer from '../../components/Footer/Footer'
import Countdown from '../../components/Countdown/Countdown'
import { useEffect, useState } from 'react'
import '../../../node_modules/react-image-gallery/styles/css/image-gallery.css';
import ImageGallery from 'react-image-gallery';

export default function Landing() {
    const [index, setIndex] = useState(0);

    useEffect(() => {
        document.getElementById('countdownTitle').style.opacity = 1
    })

    useEffect(() => {
        setInterval(() => {
            if (index !== slideshowImages.length - 1) {
                setIndex(index + 1);
            } else {
                setIndex(0);
            }
        }, 5000);
    });

    const slideshowImages = [
        {
            url: 'https://i.ibb.co/HxzJTvZ/IMG-1022.jpg',
            alt: 'Kaksi vesijettiä laiturissa',
            width: '70%',
        },
        {
            url: 'https://i.ibb.co/HV15v1L/IMG-1057.jpg',
            alt: 'Kaksi vesijettiä ja auringonlasku',
            width: '100%',
        },
        {
            url: 'https://i.ibb.co/LvBps7M/IMG-2738.jpg',
            alt: 'Kaksi vesijettiä katoksessa',
            width: '70%',
        },
    ];

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
                    <section style={{marginLeft: '2%'}}>
                        <article className='prose'>
                            <h3 style={{fontSize: 40, letterSpacing: 1.2, fontWeight: 200}}>Mitä voit odottaa kaudelta 2023?</h3>
                            <p style={{fontSize: 18, fontWeight: 300}}>Tänä vuonna aiomme panostaa entistä enemmän asiakaskokemuksen parantamiseen sekä toiminnan laajentamiseen. Tällä kaudella tarjontaamme kuuluu:</p>
                            <ul>
                                <li style={{fontSize: 20, fontWeight: 300}}>2kpl uudenkarheaa Sea Doo vesijettiä (Spark & Trixx)</li>
                                <li style={{fontSize: 20, fontWeight: 300}}>2kpl modernisti varusteltua mökkiä Ylläkseltä aivan laskettelurinteiden kupeesta</li>
                                <li style={{fontSize: 20, fontWeight: 300}}>Mahdollisesti jotain muutakin...</li>
                            </ul>
                            <p style={{fontSize: 22, fontWeight: 200, letterSpacing: 0.8}}>Seuraa meitä someissa @bergrent.fi jotta pysyt kartalla <span style={{fontWeight: 600}}>kesän säännöllisistä arvonnoista</span> sekä uusista lisäyksistä tarjontaamme!</p>
                        </article>
                    </section>
                    <section style={{width: '80vmin', height: '70vmin', display: 'flex', marginLeft: '10%', justifyContent: 'center', alignItems: 'center'}}>
                        <img id={`picture${index}`} src={slideshowImages[index].url} alt={slideshowImages[index].alt} width={slideshowImages[index].width} style={{borderRadius: 10}}/>
                    </section>
                </main>
                <Footer />
            </div>
        )
    }
}