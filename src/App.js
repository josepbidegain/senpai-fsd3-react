import './App.css';
import Nav from './components/Header/Nav'
import Gallery from './components/Gallery'
import ToDoExample from './components/TodoExample'

function App() {
  return (
    <div className="App">
      <header className="App-header">
       <Nav logueado={true} username='Juan' otraPropiedad='textocualquiera' />
       <Gallery />

       <ToDoExample />
      </header>
    </div>
  );
}

export default App;
