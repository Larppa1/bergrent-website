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
                <article className='prose titleContainer'>
                    <h2 id='title'>Yhteydenotot</h2>
                    <p id='titleContent'>Mikäli sinulla on kysymyksiä, ota yhteyttä meihin - autamme mielellämme! Pyrimme vastaamaan kaikkiin yhteydenottoihin kahden arkipäivän sisällä.</p>
                </article>
                <article className='prose contactDetailsContainer'>
                    <section>
                        <h3>Myynti</h3>
                        <p>anton@bergrent.fi</p>
                        <p>+358 50 401 0006</p>
                    </section>
                    {/* <section>
                        <h3>Vesijetit</h3>
                        <p>anton@bergrent.fi</p>
                        <p>+358 40 123 4567</p>
                    </section>
                    <section>
                        <h3>Mökit</h3>
                        <p>thomas@bergrent.fi</p>
                        <p>+358 40 123 4567</p>
                    </section> */}
                </article>
            </main>
            <Footer />
        </div>
    )
}