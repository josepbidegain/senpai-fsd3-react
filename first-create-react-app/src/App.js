import './App.css';
import Lista, { Lista2, Titulo } from './components/Lista'
import Titulo2 from './components/Titulo'
import Nav from './components/Header/Nav'

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <Nav />
       <Lista titulo="Titulo de la lista pasada por props" color="red" />
       <Lista2></Lista2>
       <Titulo checked={true}> </Titulo>

       <Titulo2></Titulo2>
      </header>
    </div>
  );
}

export default App;
