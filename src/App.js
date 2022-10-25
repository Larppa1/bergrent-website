import './App.css';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import About from './pages/About/About'
import BoatRent from './pages/BoatRent/BoatRent'
import Contact from './pages/Contact/Contact'
import CottageRent from './pages/CottageRent/CottageRent'
import JetSkiRent from './pages/JetSkiRent/JetSkiRent'
import Landing from './pages/Landing/Landing'

export default function App() {
  return(
    <Router>
      <Routes>
        <Route to='/tietoja' element={ <About/> }/>
        <Route to='/venevuokraus' element={ <BoatRent/> }/>
        <Route to='/ota-yhteytta' element={ <Contact/> }/>
        <Route to='/mokkivuokraus' element={ <CottageRent/> }/>
        <Route to='/vesijettivuokraus' element={ <JetSkiRent/> }/>
        <Route to='/' element={ <Landing/> }/>
      </Routes>
    </Router>
  )
}