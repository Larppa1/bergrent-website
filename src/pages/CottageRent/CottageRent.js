import './CottageRent.css'
import Navbar from '../../components/Navbar/Navbar'
import Footer from '../../components/Footer/Footer'

export default function CottageRent() {
    return(
        <div>
            <header>
                <Navbar page="rent"/>
            </header>
            <main>
                <img style={{position: 'absolute', right: '2%', top: '18%', borderRadius: 14}} src='https://cf.bstatic.com/xdata/images/hotel/max1280x900/423224494.jpg?k=826bdb8f071bd2870a2237c4de659575af358292279a3462bb2a3e6d2028686d&o=&hp=1' width='10%' />
                <article className='prose' style={{width: '50%', display: 'flex', flexDirection: 'column', paddingTop: '10%', paddingBottom: '2%', paddingInline: '2%'}}>
                    <h2 style={{fontSize: 48, fontWeight: 200, letterSpacing: 1.2}}>Mökkien vuokraus</h2>
                    <p style={{marginTop: '-2%'}}>Oli vuodenaika mikä tahansa, Lapista löytyy aina nähtävää ja tehtävää - ota siis suunnaksi Ylläs ja majoitu siistissä ja hyvin varustellussa mökissä toimivien yhteyksien varrella!</p>
                </article>
                <section style={{minWidth: '100%', display: 'flex', flexDirection: 'column', paddingInline: '2%'}}>
                    <article className='prose'>
                        <h3>Vuokraamme tällä hetkellä seuraavia mökkejä:</h3>
                    </article>
                    <section style={{display: 'flex', flexDirection: 'row', justifyContent: 'space-around', marginBlock: '2%'}}>
                        <div style={{minHeight: 500, width: '40%', display: 'flex', flexDirection: 'row', borderRadius: 14}}>
                            <div style={{minHeight: '100%', width: '60%', display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center'}}>
                                <img src='https://cf.bstatic.com/xdata/images/hotel/max1024x768/411439540.jpg?k=22a93006082db5578327883542c679ffe09b07777ccaa8fd28409d12014f28ad&o=&hp=1' width='90%' style={{borderRadius: 14}} />
                            </div>
                            <article className='prose' style={{minHeight: '100%', width: '40%', display: 'flex', flexDirection: 'column', alignItems: 'center', padding: '2%', borderLeft: '0.2px solid black'}}>
                                <h4 style={{width: '100%', display: 'flex', flexDirection: 'row', justifyContent: 'flex-start'}}>Yllästölli 2A</h4>
                                <div style={{minWidth: '100%'}}>
                                    <div style={{width: '100%', display: 'flex', flexDirection: 'row', justifyContent: 'flex-start'}}>
                                        <ul>
                                            <li>Sijainti: Äkäslompolo, Kolari</li>
                                            <li>Koko: 60 m2 (2mh + k + s)</li>
                                            <li>Kaksikerroksinen</li>
                                            <li>Ilmainen pysäköinti</li>
                                        </ul>
                                    </div>
                                    <h4 style={{width: '100%', display: 'flex', flexDirection: 'row', justifyContent: 'flex-start'}}>Hinnat alkaen 86€/yö</h4>
                                </div>
                            </article>
                        </div>
                        <div style={{minHeight: 500, width: '40%', display: 'flex', flexDirection: 'row', borderRadius: 14}}>
                            <article className='prose' style={{minHeight: '100%', width: '40%', display: 'flex', flexDirection: 'column', alignItems: 'center', padding: '2%', borderRight: '0.2px solid black'}}>
                                <h4 style={{width: '100%', display: 'flex', flexDirection: 'row', justifyContent: 'flex-end'}}>Yllästölli 2D</h4>
                                <div style={{width: '100%'}}>
                                    <div style={{width: '100%', display: 'flex', flexDirection: 'row', justifyContent: 'flex-end'}}>
                                        <ul>
                                            <li>Sijainti: Äkäslompolo, Kolari</li>
                                            <li>Koko: 60 m2 (2mh + k + s)</li>
                                            <li>Kaksikerroksinen</li>
                                            <li>Ilmainen pysäköinti</li>
                                        </ul>
                                    </div>
                                    <h4 style={{width: '100%', display: 'flex', flexDirection: 'row', justifyContent: 'flex-end'}}>Hinnat alkaen 66€/yö</h4>
                                </div>
                            </article>
                            <div style={{minHeight: '100%', width: '60%', display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center'}}>
                                <img src='https://cf.bstatic.com/xdata/images/hotel/max1024x768/425281291.jpg?k=e4f156c9c7c92ea5e238c441fc7fc78b2b86a18a51a682d06e558588baa82901&o=&hp=1' width='90%' style={{borderRadius: 14}} />
                            </div>
                        </div>
                    </section>
                </section>
                <article className='prose' style={{minWidth: '100%', alignItems: 'center', display: 'flex', flexDirection: 'column', marginBottom: '2%'}}>
                    <p>Varauskalenteri ja lisätietoja löytyy Booking.com -sivustolta, pääset sinne painamalla <a href='https://www.booking.com/hotel/fi/yllastolli.fi.html'>tästä (Yllästölli 2A)</a> tai <a href='https://www.booking.com/hotel/fi/yllastolli-2-d-akaslompolo-yllas.fi.html'>tästä (Yllästölli 2D)</a>.</p>
                </article>
            </main>
            <footer>
                <Footer />
            </footer>
        </div>
    )
}