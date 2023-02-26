import './Landing.css'
import Navbar from '../../components/Navbar/Navbar'
import Footer from '../../components/Footer/Footer'
import Countdown from '../../components/Countdown/Countdown'
import { useEffect, useState } from 'react'
import '../../../node_modules/react-image-gallery/styles/css/image-gallery.css';

const OfferList = () => {
    if (window.innerWidth < 768) {
        return (
            <>
                <p style={{fontSize: 20, fontWeight: 300}}><span style={{fontWeight: 600}}>2kpl</span> uudenkarheaa Sea Doo vesijettiä (Spark & Trixx)</p>
                <p style={{fontSize: 20, fontWeight: 300}}><span style={{fontWeight: 600}}>2kpl</span> modernisti varusteltua mökkiä Ylläkseltä näppärien kulkuyhteyksien varrelta</p>
                <p style={{fontSize: 20, fontWeight: 300}}>Mahdollisesti jotain muutakin...</p>
            </>
        )
    } else {
        return (
            <ul>
                <li style={{fontSize: 20, fontWeight: 300}}>2kpl uudenkarheaa Sea Doo vesijettiä (Spark & Trixx)</li>
                <li style={{fontSize: 20, fontWeight: 300}}>2kpl modernisti varusteltua mökkiä Ylläkseltä näppärien kulkuyhteyksien varrelta</li>
                <li style={{fontSize: 20, fontWeight: 300}}>Mahdollisesti jotain muutakin...</li>
            </ul>
        )
    }
}

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
            width: window.innerWidth < 1600 ? '60%' : '40%',
        },
        {
            url: 'https://i.ibb.co/LvBps7M/IMG-2738.jpg',
            alt: 'Kaksi vesijettiä katoksessa',
            width: window.innerWidth < 1600 ? '60%' : '40%',
        },
    ];

    return(
        <div className='bg-base-100'>
            <header id='landingHeader'>
                <Navbar page="landing"/>
            </header>
                <section id="countdownSection">
                    <article>
                        <p id='countdownTitle' style={{fontSize: window.innerWidth < 768 ? 32 : 84, color: 'whitesmoke', marginBottom: window.innerWidth < 768 ? 10 : 50, letterSpacing: 1.2, fontWeight: 100}}>Jettikauden alkuun on enää</p>
                    </article>
                    <Countdown />
                </section>
            <main id='landingMain'>
                <section>
                    <article className='prose'>
                        <h3 style={{fontSize: 40, letterSpacing: 1.2, fontWeight: 200}}>Mitä voit odottaa kaudelta 2023?</h3>
                        <p style={{fontSize: 18, fontWeight: 300}}>Tänä vuonna aiomme panostaa entistä enemmän asiakaskokemuksen parantamiseen sekä toiminnan laajentamiseen. Tällä kaudella tarjontaamme kuuluu:</p>
                        <OfferList />
                        <p style={{fontSize: 22, fontWeight: 200, letterSpacing: 0.8}}>Seuraa meitä someissa @bergrent.fi jotta pysyt kartalla <span style={{fontWeight: 600}}>kesän säännöllisistä arvonnoista</span> sekä uusista lisäyksistä tarjontaamme!</p>
                    </article>
                </section>
                <section>
                    <img id={`picture${index}`} src={slideshowImages[index].url} alt={slideshowImages[index].alt} width={slideshowImages[index].width} style={{borderRadius: 10, height: window.innerWidth < 768 ? '50vh' : '60vh'}}/>
                </section>
            </main>
            <Footer />
        </div>
    )
}