//import logo from './logo.svg';
import './App.css';
import Navbar from './components/Navbar.js';
import ItemListContainer from './components/itemListContainer/ItemListContainer.js';
import ItemCount from './components/itemCount/ItemCount';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <Navbar/>
        
        <ItemCount/>

        <ItemListContainer greeting='No hay items en la lista'/>
      </header>
    </div>
  );
}

export default App;
