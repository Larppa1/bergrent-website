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

                </main>
                <Footer />
            </div>
        )
    }else {
        return(
            <div className='container'>
                <header>
                    <Navbar page="about"/>
                </header>
                <main>

                </main>
                <Footer />
            </div>
        )
    }
}