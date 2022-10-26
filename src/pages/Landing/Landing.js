import './Landing.css'
import Navbar from '../../components/Navbar/Navbar'
import Footer from '../../components/Footer/Footer'

export default function Landing() {
    const test = () => {
        document.getElementById('test').style.opacity = 1
        document.getElementById('test').style.display = 'block'
        document.getElementById('test').style.transition = 'opacity 0.5s ease-in-out'
    }
    if(window.innerWidth < 768) {
        return(
            <div className='container'>
                <header id='landingHeader'>
                    <Navbar page="landing"/>
                </header>
                <main>
                    <button className='btn' onClick={test}>Test</button>
                    <div id='test'>
                    </div>
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