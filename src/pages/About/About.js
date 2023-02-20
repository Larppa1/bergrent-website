import './About.css'
import Navbar from '../../components/Navbar/Navbar'
import Footer from '../../components/Footer/Footer'

export default function About() {
    if(window.innerWidth < 768) {
        return(
            <div className='container'>
                <header>
                    <Navbar page="about"/>
                </header>
                <main>
                    <article className='prose'>
                        <h2>Tulossa ennen kauden alkua...</h2>
                    </article>
                </main>
                <Footer />
            </div>
        )
    }else {
        return(
            <div>
                <header>
                    <Navbar page="about"/>
                </header>
                <main>
                    <article className='prose' style={{minWidth: '100%', alignItems: 'center', justifyContent: 'center', display: 'flex', marginTop: '10%'}}>
                        <h2 style={{fontSize: 48, fontWeight: 200, letterSpacing: 1.2}}>Tulossa ennen kauden alkua...</h2>
                    </article>
                </main>
                <Footer />
            </div>
        )
    }
}