import './App.css';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import About from './pages/About/About'
import Contact from './pages/Contact/Contact'
import CottageRent from './pages/CottageRent/CottageRent'
import JetSkiRent from './pages/JetSkiRent/JetSkiRent'
import Landing from './pages/Landing/Landing'

export default function App() {
  return(
    <Router>
      <Routes>
        <Route path='/tietoja' element={ <About/> }/>
        <Route path='/ota-yhteytta' element={ <Contact/> }/>
        <Route path='/mokkivuokraus' element={ <CottageRent/> }/>
        <Route path='/vesijettivuokraus' element={ <JetSkiRent/> }/>
        <Route path='/' element={ <Landing/> }/>
      </Routes>
    </Router>
  )
}