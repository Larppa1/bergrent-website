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
                {window.innerWidth >= 1600 && <img style={{position: 'absolute', right: '2%', top: '18%', borderRadius: 14}} src='https://cf.bstatic.com/xdata/images/hotel/max1280x900/423224494.jpg?k=826bdb8f071bd2870a2237c4de659575af358292279a3462bb2a3e6d2028686d&o=&hp=1' width='10%' />}
                <article className='prose titleContainer'>
                    <h2 id='title'>Mökkien vuokraus</h2>
                    <p id='titleContent'>Oli vuodenaika mikä tahansa, Lapista löytyy aina nähtävää ja tehtävää - ota siis suunnaksi Ylläs ja majoitu siistissä ja hyvin varustellussa mökissä toimivien yhteyksien varrella!</p>
                </article>
                <section className='mainContent'>
                    <article className='prose'>
                        <h3 id='subtitle'>Vuokraamme tällä hetkellä seuraavia mökkejä:</h3>
                    </article>
                    <section id='mainContent'>
                        <div id='contentContainerFirst'>
                            <div id='img'>
                                <img src='https://cf.bstatic.com/xdata/images/hotel/max1024x768/411439540.jpg?k=22a93006082db5578327883542c679ffe09b07777ccaa8fd28409d12014f28ad&o=&hp=1' width='90%' style={{borderRadius: 14}} />
                            </div>
                            <article className='prose' id='contentLeft'>
                                <h4 id='textLeft'>Yllästölli 2A</h4>
                                <div>
                                    <div id='textLeft'>
                                        <ul>
                                            <li>Sijainti: Äkäslompolo, Kolari</li>
                                            <li>Koko: 60 m2 (2mh + k + s)</li>
                                            <li>Kaksikerroksinen</li>
                                            <li>Ilmainen pysäköinti</li>
                                        </ul>
                                    </div>
                                    <h4 id='textLeft'>Hinnat alkaen 86€/yö</h4>
                                </div>
                            </article>
                        </div>
                        <div id='contentContainerSecond'>
                            {window.innerWidth < 1600 &&
                                <div id='img'>
                                    <img src='https://cf.bstatic.com/xdata/images/hotel/max1024x768/425281291.jpg?k=e4f156c9c7c92ea5e238c441fc7fc78b2b86a18a51a682d06e558588baa82901&o=&hp=1' width='90%' style={{borderRadius: 14}} />
                                </div>
                            }
                            <article className='prose' id='contentRight'>
                                <h4 id='textRight'>Yllästölli 2D</h4>
                                <div>
                                    <div id='textRight'>
                                        <ul>
                                            <li>Sijainti: Äkäslompolo, Kolari</li>
                                            <li>Koko: 60 m2 (2mh + k + s)</li>
                                            <li>Kaksikerroksinen</li>
                                            <li>Ilmainen pysäköinti</li>
                                        </ul>
                                    </div>
                                    <h4 id='textRight'>Hinnat alkaen 66€/yö</h4>
                                </div>
                            </article>
                            {window.innerWidth >= 1600 &&
                                <div id='img'>
                                    <img src='https://cf.bstatic.com/xdata/images/hotel/max1024x768/425281291.jpg?k=e4f156c9c7c92ea5e238c441fc7fc78b2b86a18a51a682d06e558588baa82901&o=&hp=1' width='90%' style={{borderRadius: 14}} />
                                </div>
                            }
                        </div>
                    </section>
                </section>
                {window.innerWidth < 1600 && <div style={{minWidth: '100%', display: 'flex', flexDirection: 'column', alignItems: 'center', paddingBlock: '5%'}}><img style={{borderRadius: 14}} src='https://cf.bstatic.com/xdata/images/hotel/max1280x900/423224494.jpg?k=826bdb8f071bd2870a2237c4de659575af358292279a3462bb2a3e6d2028686d&o=&hp=1' width='40%' /></div>}
                <article className='prose bottomText'>
                    <p>Varauskalenteri ja lisätietoja löytyy Booking.com -sivustolta, pääset sinne painamalla <a href='https://www.booking.com/hotel/fi/yllastolli.fi.html'>tästä (Yllästölli 2A)</a> tai <a href='https://www.booking.com/hotel/fi/yllastolli-2-d-akaslompolo-yllas.fi.html'>tästä (Yllästölli 2D)</a>.</p>
                </article>
            </main>
            <footer>
                <Footer />
            </footer>
        </div>
    )
}