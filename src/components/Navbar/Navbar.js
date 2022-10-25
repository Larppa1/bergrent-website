import './Navbar.css'
import { Link } from 'react-router-dom'
import { useEffect } from 'react'

export default function Navbar(props) {
    useEffect(() => {
        if(window.innerWidth < 768) { return }

        switch(props.page) {
            case 'landing': document.getElementById('landingLink').style.textDecoration = 'underline'; break;
            case 'rent': document.getElementById('rentLink').style.textDecoration = 'underline'; break;
            case 'about': document.getElementById('aboutLink').style.textDecoration = 'underline'; break;
            case 'contact': document.getElementById('contactLink').style.textDecoration = 'underline'; break;
            default: break;
        }
    })

    if(window.innerWidth < 768) {
        return(
            <div id='navbar' className="navbar bg-neutral">
                <div className="flex-none">
                    <Link className="btn btn-ghost text-xl" to='/'>Bergrent</Link>
                </div>
                <div className='flex-1'></div>
                <div className="flex-none">
                    <button className="btn btn-square btn-ghost">
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" className="inline-block w-5 h-5 stroke-current"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h16"></path></svg>
                    </button>
                </div>
            </div>
        )
    }else {
        return(
            <div id='navbar' className="navbar bg-neutral">
                <div>
                    <Link className="btn btn-ghost text-3xl" to='/'>Bergrent</Link>
                </div>
                <div>
                    <ul className="menu menu-horizontal p-0">
                        <li id='landingLink'><Link to='/'>Etusivu</Link></li>
                        <li id='rentLink'><Link>Vuokraus</Link></li>
                        <li id='aboutLink'><Link to='/tietoja'>Tietoja</Link></li>
                        <li id='contactLink'><Link to='/ota-yhteytta'>Ota yhteyttä</Link></li>
                    </ul>
                </div>
            </div>
        )
    }
}