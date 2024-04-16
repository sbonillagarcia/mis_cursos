import React from 'react';
import { Link } from 'react-router-dom';
import { GiMountainClimbing } from "react-icons/gi"; // Importa el ícono 
import './Navbar.css';

interface NavbarProps {
  fotoPerfil: string; // Define la propiedad fotoPerfil y su tipo

}

const Navbar: React.FC<NavbarProps> = ({ fotoPerfil }) => { // Añade NavbarProps a React.FC
  return (
    <nav className="navbar">
      <h1 className="titulo">
        <GiMountainClimbing className="icono" /> Escala  {/* Agrega el ícono junto al título */}
      </h1>
      <ul className="lista">
        <li className="listados">
          <Link className="links" to="/">Inicio</Link>
        </li>
        <li className="listados">
          <Link className="links" to="/login">Iniciar Sesión</Link>
        </li>
        <li className="listados">
          <Link className="links" to="/registro">Registrarse</Link>
        </li>
        <li className="listados">
          <Link className="links" to="/nosotros">Nuestros Servicios</Link>
        </li>
        <li className="listados">
          <Link className="links" to="/certificaciones">Certificaciones</Link>
        </li>   
        <li className="listados">
          <Link className="links" to="/perfil">Perfil</Link>
        </li> 
      </ul>
    </nav>
  );
}
export default Navbar;

