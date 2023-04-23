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
                </section>
            </main>
            <footer>
                <Footer />
            </footer>
        </div>
    )
}