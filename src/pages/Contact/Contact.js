import './Contact.css'
import Navbar from '../../components/Navbar/Navbar'
import Footer from '../../components/Footer/Footer'

export default function Contact() {
    return(
        <div>
            <header>
                <Navbar page="contact"/>
            </header>
            <main>
                <article className='prose' style={{width: '50%', display: 'flex', flexDirection: 'column', paddingTop: '10%', paddingBottom: '2%', paddingInline: '2%'}}>
                    <h2 style={{fontSize: 48, fontWeight: 200, letterSpacing: 1.2}}>Yhteydenotot</h2>
                    <p style={{marginTop: '-2%'}}>Mikäli sinulla on kysymyksiä, ota yhteyttä meihin - autamme mielellämme! Pyrimme vastaamaan kaikkiin yhteydenottoihin kahden arkipäivän sisällä.</p>
                </article>
                <article className='prose' style={{width: '50%', display: 'flex', flexDirection: 'row', paddingInline: '2%', paddingBottom: '15%', justifyContent: 'space-between'}}>
                    <section>
                        <h3>Myynti</h3>
                        <p>myynti@bergrent.fi</p>
                        <p>+358 40 123 4567</p>
                    </section>
                    <section>
                        <h3>Vesijetit</h3>
                        <p>anton@bergrent.fi</p>
                        <p>+358 40 123 4567</p>
                    </section>
                    <section>
                        <h3>Mökit</h3>
                        <p>thomas@bergrent.fi</p>
                        <p>+358 40 123 4567</p>
                    </section>
                </article>
            </main>
            <Footer />
        </div>
    )
}