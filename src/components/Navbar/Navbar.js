import './Navbar.css'
import { Link } from 'react-router-dom'
import { useEffect, useState } from 'react'

export default function Navbar(props) {
    const [menuBtnClicked, setMenuBtnClicked] = useState(false)
    const [clicked, setClicked] = useState(false)

    /*Animate primary dropdown menu*/
    const dropdownPrimaryAnim = () => {
        if(!menuBtnClicked) {
            document.getElementById('dropdownSecondary').style.transition = 'all 0.4s ease-in-out'
            document.getElementById('dropdown').style.opacity = '0.99'
            setMenuBtnClicked(true)
        }else {
            document.getElementById('dropdown').style.opacity = '0'
            document.getElementById('dropdown').style.marginRight = '2vw'
            document.getElementById('dropdownSecondary').style.opacity = '0'
            document.getElementById('dropdownSecondary').style.transition = 'all 0.1s ease-in-out'
            document.getElementById('dropdownSecondary').style.visibility = 'collapse'
            setMenuBtnClicked(false)
            setClicked(false)
        }
    }

    /*Animate secondary dropdown menu*/
    const dropdownSecondaryAnim = () => {
        if(!clicked) {
            document.getElementById('dropdownSecondary').style.transition = 'all 0.4s ease-in-out'
            document.getElementById('dropdown').style.marginRight = '35vw'
            document.getElementById('dropdownSecondary').style.opacity = '0.95'
            document.getElementById('dropdownSecondary').style.visibility = 'visible'
            setClicked(true)
        }else {
            document.getElementById('dropdown').style.marginRight = '2vw'
            document.getElementById('dropdownSecondary').style.opacity = '0'
            document.getElementById('dropdownSecondary').style.transition = 'all 0.1s ease-in-out'
            document.getElementById('dropdownSecondary').style.visibility = 'collapse'
            setClicked(false)
        }
    }

    useEffect(() => {
        const landingLink = document.getElementById('landingLink')
        const rentLink = document.getElementById('rentLink')
        const contactLink = document.getElementById('contactLink')

        if(window.innerWidth < 768) { return }

        /*Underline nav item corresponding to current page*/
        switch(props.page) {
            case 'landing':
                landingLink.style.textDecoration = 'underline';
                break;
            case 'rent':
                rentLink.style.textDecoration = 'underline';
                break;
            case 'contact':
                contactLink.style.textDecoration = 'underline';
                break;
            default: break;
        }

        /*Animate nav items*/
        landingLink.style.opacity = 1;
        landingLink.style.transition = 'opacity 0.6s ease-in'
        rentLink.style.opacity = 1
        rentLink.style.transition = 'opacity 0.8s ease-in'
        contactLink.style.opacity = 1
        contactLink.style.transition = 'opacity 1.2s ease-in'
    })

    if(window.innerWidth < 768) {
        return(
            <div id='navbar' className="navbar">
                <div className="flex-none">
                    <Link className="btn btn-ghost text-xl" to='/'>Bergrent</Link>
                </div>
                <div className='flex-1'></div>
                <div className="flex-none dropdown dropdown-end">
                    <button id='menuBtn' className="btn btn-square btn-ghost" onClick={dropdownPrimaryAnim}>
                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" className="inline-block w-5 h-5 stroke-current"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h16"></path></svg>
                    </button>
                </div>
                <ul id='dropdown' className="menu menu-compact dropdown-content mt-3 p-2 shadow bg-neutral rounded-box w-52">
                        <li><Link to='/'>Etusivu</Link></li>
                        <div className="dropdown">
                            <li tabIndex={0}>
                                <Link onClick={dropdownSecondaryAnim}>Vuokraus</Link>
                            </li>
                        </div>
                        <li><Link to='/ota-yhteytta'>Ota yhteyttä</Link></li>
                </ul>
                <ul id='dropdownSecondary' tabIndex={0} className="menu menu-compact dropdown-content mt-3 p-2 shadow bg-neutral rounded-box w-52">
                                <li><Link to='/vesijettivuokraus'>Jettivuokraus</Link></li>
                                <li><Link to='/mokkivuokraus'>Mökkivuokraus</Link></li>
                </ul>
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
                        <li id='rentLink' tabIndex={0}>
                            <a>Vuokraus
                            <svg className="fill-current" xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24"><path d="M7.41,8.58L12,13.17L16.59,8.58L18,10L12,16L6,10L7.41,8.58Z"/></svg>
                            </a>
                            <ul className="p-2 bg-neutral">
                                <li><Link to='/vesijettivuokraus'>Jettivuokraus</Link></li>
                                <li><Link to='/mokkivuokraus'>Mökkivuokraus</Link></li>
                            </ul>
                        </li>
                        <li id='contactLink'><Link to='/ota-yhteytta'>Ota yhteyttä</Link></li>
                    </ul>
                </div>
            </div>
        )
    }
}