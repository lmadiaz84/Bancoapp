//import './Navbar.css';

export const Navbar=() => {
    return (
        <header className="header">
            <h1 className="nav_brand">
                BAZAR EL PRECIO JUSTO
            </h1>
            <nav className="nav_menu">
            <a className="nav_item" href=""><li>Inicio</li></a>
            <a className="nav_item" href=""><li>Productos</li></a>
            <a className="nav_item" href=""><li>Contactos</li></a>
            </nav>
        </header>
    );
  }
  
  export default Navbar;