import './App.css';
import Nav from './components/Header/Nav'
import Gallery from './components/Gallery'

function App() {
  return (
    <div className="App">
      <header className="App-header">
       <Nav logueado={true} username='Juan' otraPropiedad='textocualquiera' />
       <Gallery />
      </header>
    </div>
  );
}

export default App;
