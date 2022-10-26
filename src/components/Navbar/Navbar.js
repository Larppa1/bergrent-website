import './Navbar.css'
import { Link } from 'react-router-dom'
import { useEffect, useState } from 'react'

export default function Navbar(props) {
    const [menuBtnClicked, setMenuBtnClicked] = useState(false)
    const [clicked, setClicked] = useState(false)

    useEffect(() => {
        const landingLink = document.getElementById('landingLink')
        const rentLink = document.getElementById('rentLink')
        const aboutLink = document.getElementById('aboutLink')
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
            case 'about':
                aboutLink.style.textDecoration = 'underline';
                break;
            case 'contact':
                contactLink.style.textDecoration = 'underline';
                break;
            default: break;
        }

        /*Animate nav items*/
        landingLink.style.opacity = 1;
        landingLink.style.transition = 'opacity 0.5s ease-in'
        rentLink.style.opacity = 1
        rentLink.style.transition = 'opacity 1s ease-in'
        aboutLink.style.opacity = 1
        aboutLink.style.transition = 'opacity 1.5s ease-in'
        contactLink.style.opacity = 1
        contactLink.style.transition = 'opacity 2s ease-in'
    })

    /*Animate primary dropdown menu*/
    const dropdownPrimaryAnim = () => {
        if(!menuBtnClicked) {
            setMenuBtnClicked(true)
            document.getElementById('dropdown').style.marginRight = '0vw'
            document.getElementById('dropdown').style.opacity = 1;
            document.getElementById('dropdown').style.transition = 'opacity 0.2s ease-in-out'
        }else {
            document.getElementById('dropdown').style.opacity = 0;
            document.getElementById('dropdown').style.transition = 'opacity 0.2s ease-in-out'
            document.getElementById('dropdown').style.transform = 'translate(0vw)'
            document.getElementById('dropdownSecondary').style.opacity = 0;
            document.getElementById('dropdownSecondary').style.transition = 'opacity 0.2s ease-in-out'
            setMenuBtnClicked(false)
            setClicked(false)
        }
    }

    /*Animate secondary dropdown menu*/
    const dropdownSecondaryAnim = () => {
        if(!clicked) {
            setClicked(true)
            document.getElementById('dropdown').style.marginRight = '35vw'
            document.getElementById('dropdown').style.transition = 'margin-right 0.2s ease-in-out'
            document.getElementById('dropdownSecondary').style.opacity = 1;
            document.getElementById('dropdownSecondary').style.transition = 'opacity 0.4s ease-in-out'
        }else {
            document.getElementById('dropdown').style.marginRight = '0vw'
            document.getElementById('dropdown').style.transition = 'margin-right 0.2s ease-in-out'
            document.getElementById('dropdownSecondary').style.opacity = 0;
            document.getElementById('dropdownSecondary').style.transition = 'opacity 0.4s ease-in-out'
            setClicked(false)
        }
    }

    if(window.innerWidth < 768) {
        return(
            <div id='navbar' className="navbar bg-neutral">
                <div className="flex-none">
                    <Link className="btn btn-ghost text-xl" to='/'>Bergrent</Link>
                </div>
                <div className='flex-1'></div>
                <div className="flex-none dropdown dropdown-end">
                    <button className="btn btn-square btn-ghost" onClick={dropdownPrimaryAnim}>
                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" className="inline-block w-5 h-5 stroke-current"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h16"></path></svg>
                    </button>
                    <ul id='dropdown' className="menu menu-compact dropdown-content mt-3 p-2 shadow bg-neutral rounded-box w-52">
                        <li><Link to='/'>Etusivu</Link></li>
                        <div className="dropdown">
                            <li tabIndex={0}>
                                <Link onClick={dropdownSecondaryAnim}>Vuokraus</Link>
                            </li>
                            <ul id='dropdownSecondary' tabIndex={0} className="menu menu-compact dropdown-content mt-3 p-2 shadow bg-neutral rounded-box w-52">
                                <li><Link to='/vesijettivuokraus'>Jettivuokraus</Link></li>
                                <li><Link to='/venevuokraus'>Venevuokraus</Link></li>
                                <li><Link to='/mokkivuokraus'>Mökkivuokraus</Link></li>
                            </ul>
                        </div>
                        <li><Link to='/tietoja'>Tietoja</Link></li>
                        <li><Link to='/ota-yhteytta'>Ota yhteyttä</Link></li>
                    </ul>
                </div>
                
                {/* <div className="flex-none dropdown dropdown-end">
                    <label tabIndex={0} className="btn btn-square btn-ghost">
                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" className="inline-block w-5 h-5 stroke-current"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h16"></path></svg>
                    </label>
                    <ul id='dropdown' tabIndex={0} className="menu menu-compact dropdown-content mt-3 p-2 shadow bg-neutral rounded-box w-52">
                        <li><Link to='/'>Etusivu</Link></li>
                        <div className="dropdown">
                            <li tabIndex={0}>
                                <Link onClick={dropdownSecondary}>Vuokraus</Link>
                            </li>
                            <ul id='dropdownSecondary' tabIndex={0} className="menu menu-compact dropdown-content mt-3 p-2 shadow bg-neutral rounded-box w-52">
                                <li><Link to='/vesijettivuokraus'>Jettivuokraus</Link></li>
                                <li><Link to='/venevuokraus'>Venevuokraus</Link></li>
                                <li><Link to='/mokkivuokraus'>Mökkivuokraus</Link></li>
                            </ul>
                        </div>
                        <li><Link to='/tietoja'>Tietoja</Link></li>
                        <li><Link to='/ota-yhteytta'>Ota yhteyttä</Link></li>
                    </ul>
                </div> */}
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
                                <li><Link to='/venevuokraus'>Venevuokraus</Link></li>
                                <li><Link to='/mokkivuokraus'>Mökkivuokraus</Link></li>
                            </ul>
                        </li>
                        <li id='aboutLink'><Link to='/tietoja'>Tietoja</Link></li>
                        <li id='contactLink'><Link to='/ota-yhteytta'>Ota yhteyttä</Link></li>
                    </ul>
                </div>
            </div>
        )
    }
}