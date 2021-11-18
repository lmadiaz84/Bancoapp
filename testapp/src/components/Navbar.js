import './Navbar.css';
import CartWidget from './CartWidget.js';

export const Navbar=() => {
    return (
        <header className="header">
            <h1 className="nav_brand">
                BAZAR EL PRECIO JUSTO
            </h1>
            <nav className="nav_menu">
            <a><CartWidget/></a>
            <a className="nav_item" href=""><li>Inicio</li></a>
            <a className="nav_item" href=""><li>Productos</li></a>
            <a className="nav_item" href=""><li>Contactos</li></a>
            </nav>
        </header>
    );
  }
  
  export default Navbar;