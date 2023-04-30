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
                    <section style={{display: 'flex', flexDirection: 'row', justifyContent: 'space-around', marginBlock: '2%'}}>
                        <div style={{minHeight: 500, width: '40%', display: 'flex', flexDirection: 'row', borderRadius: 14}}>
                            <div style={{minHeight: '100%', width: '60%', display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center'}}>
                                <img src='https://i.ibb.co/fYLXr1B/8ddd8336-fa81-46d0-9f5b-48fa6c311cc5.jpg' width='90%' style={{borderRadius: 14}} />
                            </div>
                            <article className='prose' style={{minHeight: '100%', width: '40%', display: 'flex', flexDirection: 'column', alignItems: 'center', padding: '2%', borderLeft: '0.2px solid black'}}>
                                <h4 style={{width: '100%', display: 'flex', flexDirection: 'row', justifyContent: 'flex-start'}}>2022 Sea Doo Spark Trixx 2UP</h4>
                                <div style={{minWidth: '100%'}}>
                                    <div style={{width: '100%', display: 'flex', flexDirection: 'row', justifyContent: 'flex-start'}}>
                                        <ul>
                                            <li>Teho: 90hv</li>
                                            <li>Kulutus: 9l/h</li>
                                            <li>Istumapaikat: 2</li>
                                            <li>Trim-ominaisuus: kyllä</li>
                                        </ul>
                                    </div>
                                    <h4 style={{width: '100%', display: 'flex', flexDirection: 'row', justifyContent: 'flex-start', textDecoration: 'underline'}}>Hinnasto</h4>
                                    <h4 style={{width: '100%', display: 'flex', flexDirection: 'row', justifyContent: 'flex-start'}}>2h - 99€</h4>
                                    <h4 style={{width: '100%', display: 'flex', flexDirection: 'row', justifyContent: 'flex-start'}}>4h - 139€</h4>
                                    <h4 style={{width: '100%', display: 'flex', flexDirection: 'row', justifyContent: 'flex-start'}}>8h - 169€</h4>
                                    <h4 style={{width: '100%', display: 'flex', flexDirection: 'row', justifyContent: 'flex-start'}}>12h - 189€</h4>
                                    <h4 style={{width: '100%', display: 'flex', flexDirection: 'row', justifyContent: 'flex-start'}}>24h - 229€</h4>
                                    <h4 style={{width: '100%', display: 'flex', flexDirection: 'row', justifyContent: 'flex-start'}}>Viikonloppu - 469€</h4>
                                </div>
                            </article>
                        </div>
                        <div style={{minHeight: 500, width: '40%', display: 'flex', flexDirection: 'row', borderRadius: 14}}>
                            <article className='prose' style={{minHeight: '100%', width: '40%', display: 'flex', flexDirection: 'column', alignItems: 'center', padding: '2%', borderRight: '0.2px solid black'}}>
                                <h4 style={{width: '100%', display: 'flex', flexDirection: 'row', justifyContent: 'flex-end'}}>2022 Sea Doo Spark 2UP</h4>
                                <div style={{width: '100%'}}>
                                    <div style={{width: '100%', display: 'flex', flexDirection: 'row', justifyContent: 'flex-end'}}>
                                        <ul>
                                            <li>Teho: 60hv</li>
                                            <li>Kulutus: 7.34l/h</li>
                                            <li>Istumapaikat: 2</li>
                                            <li>Trim-ominaisuus: ei</li>
                                        </ul>
                                    </div>
                                    <h4 style={{width: '100%', display: 'flex', flexDirection: 'row', justifyContent: 'flex-end', textDecoration: 'underline'}}>Hinnasto</h4>
                                    <h4 style={{width: '100%', display: 'flex', flexDirection: 'row', justifyContent: 'flex-end'}}>2h - 89€</h4>
                                    <h4 style={{width: '100%', display: 'flex', flexDirection: 'row', justifyContent: 'flex-end'}}>4h - 109€</h4>
                                    <h4 style={{width: '100%', display: 'flex', flexDirection: 'row', justifyContent: 'flex-end'}}>8h - 159€</h4>
                                    <h4 style={{width: '100%', display: 'flex', flexDirection: 'row', justifyContent: 'flex-end'}}>12h - 179€</h4>
                                    <h4 style={{width: '100%', display: 'flex', flexDirection: 'row', justifyContent: 'flex-end'}}>24h - 209€</h4>
                                    <h4 style={{width: '100%', display: 'flex', flexDirection: 'row', justifyContent: 'flex-end'}}>Viikonloppu - 399€</h4>
                                </div>
                            </article>
                            <div style={{minHeight: '100%', width: '60%', display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center'}}>
                                <img src='https://i.ibb.co/QdQj4Qg/e269a6f3-d352-48a4-b962-fb9d3bfe9726.jpg' width='90%' style={{borderRadius: 14}} />
                            </div>
                        </div>
                    </section>
                </section>
                <article className='prose' style={{minWidth: '100%', alignItems: 'center', display: 'flex', flexDirection: 'column', marginBottom: '2%'}}>
                    <p>Varauskalenteri löytyy Nettivuokrauksen sivuilta, pääset sinne painamalla <a href='https://www.nettivuokraus.com/vesijetit/vesijetteja-tampere-2kpl/534181/'>tästä.</a></p>
                </article>
            </main>
            <footer>
                <Footer />
            </footer>
        </div>
    )
}