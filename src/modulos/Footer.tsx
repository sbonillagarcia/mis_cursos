import React from 'react';
import './Footer.css';

const Footer: React.FC = () => {
  return (
    <footer className="footer">
      <div>
        
        <h4>Información de Contacto:</h4>
          <ul> 
          <li> 
          Dirección: Avenida de las Palmas 345, Ciudad Esperanza, Fantasía</li>
          <li>
          Teléfono: +99 (555) 123-4567</li>
          <li>
          Correo Electrónico: info@idiomasmundo.com
          </li>
          </ul>
        
      </div>
      <div>
        <h4>Redes Sociales:</h4>
        <ul>
        <li>
          Facebook: <a href="https://facebook.com/idiomasmundo" target="_blank" rel="noopener noreferrer">facebook.com/idiomasmundo</a><br />
          <li>
          Twitter: <a href="https://twitter.com/idiomasmundo" target="_blank" rel="noopener noreferrer">twitter.com/idiomasmundo</a><br />
          </li>
          <li>
          Instagram: <a href="https://instagram.com/idiomasmundo" target="_blank" rel="noopener noreferrer">instagram.com/idiomasmundo</a><br />
          </li>
          <li>
          LinkedIn: <a href="https://linkedin.com/company/idiomasmundo" target="_blank" rel="noopener noreferrer">linkedin.com/company/idiomasmundo</a>
          </li>
          </li>
        </ul>
      </div>
    </footer>
  );
};

export default Footer;
