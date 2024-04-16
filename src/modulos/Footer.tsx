import React from 'react';
import { SocialIcon } from 'react-social-icons'; // Importa SocialIcon
import './Footer.css';

const Footer: React.FC = () => {
  return (
    <footer className="footer">
      <div>
        <h4>Contacto</h4>
        <p>Teléfono: +57 5555555</p>
        <p>Email: katherine@gmail.com</p>
      </div>
      <div>
      <h4>Redes Sociales</h4>
        <ul>
          <li>
            <SocialIcon url="https://facebook.com" />
          </li>
          <li>
            <SocialIcon url="https://youtube.com" />
          </li>
          <li>
            <SocialIcon url="https://instagram.com" />
          </li>
        </ul>
      </div>
    </footer>
  );
};

export default Footer;