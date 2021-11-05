import './App.css';
import Nav from './components/Header/Nav'
import Gallery from './components/Gallery'
import ToDoExample from './components/TodoExample'
import { useState } from 'react'

function App() {
  
  const [logueado, setLogueado] = useState(true)

  return (
    <div className="App">
      <header className="App-header">
        {
          logueado ?
            <Nav logueado={logueado} username='Juan' otraPropiedad='textocualquiera' />
          : null
        }
       
       <Gallery />

       <ToDoExample />
      </header>
    </div>
  );
}

export default App;
