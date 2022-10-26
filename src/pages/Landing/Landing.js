import './Landing.css'
import Navbar from '../../components/Navbar/Navbar'
import Footer from '../../components/Footer/Footer'

export default function Landing() {
    if(window.innerWidth < 768) {
        return(
            <div className='container'>
                <header id='landingHeader'>
                    <Navbar page="landing"/>
                </header>
                <main>
                    
                </main>
                <Footer />
            </div>
        )
    }else {
        return(
            <div className='container'>
                <header id='landingHeader'>
                    <Navbar page="landing"/>
                </header>
                <main>

                </main>
                <Footer />
            </div>
        )
    }
}