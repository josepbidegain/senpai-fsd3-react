import './App.css';
import Nav from './components/Header/Nav'
import Gallery from './components/Gallery'
import { useState } from 'react'
import { Routes, Route, Link } from "react-router-dom"
import Home from './components/Home'
import Nosotros from './components/Nosotros'
import NotFound from './components/NotFound'
import Noticias from './components/Noticias'
import Noticia from './components/Noticia'

function App() {
  
  const [logueado, setLogueado] = useState(true)

  return (
    <div className="App">

      <ul>

        <li>
          <Link to="/">Home</Link>
        </li>
        <li>
          <Link to="/nosotros">Nosotros</Link>
        </li>
        <li>
          <Link to="/noticias">Noticias</Link>
        </li>
      </ul>

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/nosotros" element={<Nosotros />} />
        <Route path="/noticias/:id" element={<Noticia />} />
        <Route path="/noticias" element={<Noticias />} />
        <Route path='*' element={<NotFound />} />
      </Routes>

    </div>
  );
}

export default App;
