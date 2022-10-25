import './Contact.css'
import Navbar from '../../components/Navbar/Navbar'
import Footer from '../../components/Footer/Footer'

export default function Contact() {
    if(window.innerWidth < 768) {
        return(
            <div className='container'>
                <header>
                    <Navbar page="contact"/>
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
                    <Navbar page="contact"/>
                </header>
                <main>

                </main>
                <Footer />
            </div>
        )
    }
}