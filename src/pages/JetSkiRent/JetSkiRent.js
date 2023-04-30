import './JetSkiRent.css'
import Navbar from '../../components/Navbar/Navbar'
import Footer from '../../components/Footer/Footer'

export default function JetSkiRent() {  
    return (
        <div>
            <header>
                <Navbar page="rent"/>
            </header>
            <main>
                <article className='prose titleContainer'>
                    <h2 id='title'>Vesijettien vuokraus</h2>
                    <p id='titleContent'>Haluatko vauhtia kuumaan kesäpäivään? Suuntaa järvelle ja lähde seikkailemaan vesille yksin tai kaverisi kanssa!</p>
                </article>
                <section className='mainContent'>
                    <article className='prose'>
                        <h3 id='subtitle'>Alta löydät tämän hetkisen valikoimamme:</h3>
                    </article>
                    <section id='mainContent'>
                        <div id='contentContainerFirst'>
                            <div id='img'>
                                <img src='https://i.ibb.co/fYLXr1B/8ddd8336-fa81-46d0-9f5b-48fa6c311cc5.jpg' width='90%' style={{borderRadius: 14}} />
                            </div>
                            <article className='prose' id='contentLeft'>
                                <h4 id='textLeft'>2022 Sea Doo Spark Trixx 2UP</h4>
                                <div>
                                    <div id='textLeft'>
                                        <ul>
                                            <li>Teho: 90hv</li>
                                            <li>Kulutus: 9l/h</li>
                                            <li>Istumapaikat: 2</li>
                                            <li>Trim-ominaisuus: kyllä</li>
                                        </ul>
                                    </div>
                                    <h4 id='pricingTitleLeft'>Hinnasto</h4>
                                    <h4 id='textLeft'>2h - 99€</h4>
                                    <h4 id='textLeft'>4h - 139€</h4>
                                    <h4 id='textLeft'>8h - 169€</h4>
                                    <h4 id='textLeft'>12h - 189€</h4>
                                    <h4 id='textLeft'>24h - 229€</h4>
                                    <h4 id='textLeft'>Viikonloppu - 469€</h4>
                                </div>
                            </article>
                        </div>
                        <div id='contentContainerSecond'>
                            {window.innerWidth < 1600 &&
                                <div id='img'>
                                    <img src='https://i.ibb.co/QdQj4Qg/e269a6f3-d352-48a4-b962-fb9d3bfe9726.jpg' width='90%' style={{borderRadius: 14}} />
                                </div>
                            }
                            <article className='prose' id='contentRight'>
                                <h4 id='textRight'>2022 Sea Doo Spark 2UP</h4>
                                <div>
                                    <div id='textRight'>
                                        <ul>
                                            <li>Teho: 60hv</li>
                                            <li>Kulutus: 7.34l/h</li>
                                            <li>Istumapaikat: 2</li>
                                            <li>Trim-ominaisuus: ei</li>
                                        </ul>
                                    </div>
                                    <h4 id='pricingTitleRight'>Hinnasto</h4>
                                    <h4 id='textRight'>2h - 89€</h4>
                                    <h4 id='textRight'>4h - 109€</h4>
                                    <h4 id='textRight'>8h - 159€</h4>
                                    <h4 id='textRight'>12h - 179€</h4>
                                    <h4 id='textRight'>24h - 209€</h4>
                                    <h4 id='textRight'>Viikonloppu - 399€</h4>
                                </div>
                            </article>
                            {window.innerWidth >= 1600 &&
                                <div id='img'>
                                    <img src='https://i.ibb.co/QdQj4Qg/e269a6f3-d352-48a4-b962-fb9d3bfe9726.jpg' width='90%' style={{borderRadius: 14}} />
                                </div>
                            }
                        </div>
                    </section>
                </section>
                <article className='prose bottomText'>
                    <p>Varauskalenteri löytyy Nettivuokrauksen sivuilta, pääset sinne painamalla <a href='https://www.nettivuokraus.com/vesijetit/vesijetteja-tampere-2kpl/534181/'>tästä.</a></p>
                </article>
            </main>
            <footer>
                <Footer />
            </footer>
        </div>
    )
}