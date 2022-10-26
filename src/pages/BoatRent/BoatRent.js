import './BoatRent.css'
import Navbar from '../../components/Navbar/Navbar'
import Footer from '../../components/Footer/Footer'

export default function BoatRent() {
    if(window.innerWidth < 768) {
        return(
            <div className='container'>
                <header>
                    <Navbar page="rent"/>
                </header>
                <main>

                </main>
                <footer>
                    <Footer />
                </footer>
            </div>
        )
    }else {
        return(
            <div className='container'>
                <header>
                    <Navbar page="rent"/>
                </header>
                <main>

                </main>
                <footer>
                    <Footer />
                </footer>
            </div>
        )
    }
}