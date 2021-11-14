import './App.css';
import Nav from './components/Header/Nav'
import Gallery from './components/Gallery'
import { Component, useState, useEffect } from 'react'
import { Routes, Route, Link } from "react-router-dom"
import Home from './components/Home'
import Nosotros from './components/Nosotros'
import NotFound from './components/NotFound'
import Noticias from './components/Noticias'
import Noticia from './components/Noticia'
import Timer from './components/Timer'

class Example extends Component {
  constructor(props) {
    super(props);
    this.state = {
      count: 0
    };
  }

  componentDidMount() {
    console.log('did mount')
    document.title = `You clicked ${this.state.count} times`;
  }
  componentWillUpdate(nextProps, nextState) {
    console.log('will update',nextProps, nextState)
    if (nextState.count >2) {
      console.log('mayor a 2')
      nextState.count=2
    }
  }
  componentDidUpdate() {
    console.log('did update',this.state )
    document.title = `You clicked ${this.state.count} times`;
  }

  
  render() {
    console.log('componente render')
    return (
      <div>
        <p>You clicked {this.state.count} times</p>
        <button onClick={() => this.setState({ count: this.state.count + 1 })}>
          Click me
        </button>
      </div>
    );
  }
}

function App() {
  const [users, setUsers] = useState([])
  const [logueado, setLogueado] = useState(false)
  useEffect(()=>{
    fetch('https://jsonplaceholder.typicode.com/users', {method:"GET"})
    .then(respuesta=>respuesta.json())
    .then((json)=>{
      console.log(json)
      setUsers(json)
    })

    return ()=>console.log('podes desuscribirnos a eventos que hayamos definido')
  }, [logueado])

  useEffect(()=>{
    console.log('logueado se modifioco')

  },[logueado])

  return (
    <div className="App">
      <h1>H1 de APP</h1>
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
       
        <Route path="/noticias" element={<Noticias />} >
          <Route path=":id" element={<Noticia />} />
        </Route>
        <Route path='*' element={<NotFound />} />
      </Routes>

      {
        users.map(function(usuario) {
          return usuario.name 
        })
      }
      
    </div>
  );
}

export default App;
