//import logo from './logo.svg';
import './App.css';
import Navbar from './components/Navbar.js';
import ItemList from './components/itemList/ItemList.js';
import ItemListContainer from './components/itemListContainer/ItemListContainer.js';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <Navbar/>
        
        <ItemListContainer greeting='No hay items en la lista'/>
      </header>
    </div>
  );
}

export default App;
