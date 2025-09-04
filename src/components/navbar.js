import '../styles/Navbar.css'
import { Button } from "primereact/button"; // Importa el componente Button

const Navbar = () => (
  <nav className="navbar">
    <div className="navbar-menu">
      <a href="#start">
        <Button label="Inicio" className="p-button-rounded p-button-outlined"  />
      </a>
      <a href="#proyectos">
        <Button label="Proyectos" className="p-button-rounded p-button-outlined" />
      </a>
      <a href="#contact">
        <Button label="Contacto" className="p-button-rounded p-button-outlined" />
      </a>
    </div>
  </nav>
);

export default Navbar;
