import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom'; // Importa useNavigate
import './Registro.css';

const Registro: React.FC = () => {
  const navigate = useNavigate(); // Obtiene la función de navegación
  const [nombre, setNombre] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleRegistro = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    // Lógica para enviar datos de registro aquí
    console.log('Datos de registro:', nombre, email, password);
    // Después del registro, redirige al usuario al perfil
    navigate('/perfil'); // Redirige al perfil después del registro
  };

  return (
    <div className="registro-container">
      <h1>Registrarse</h1>
      <p>Cree una cuenta para comenzar a usar nuestros servicios.</p>
      <form onSubmit={handleRegistro}>
        <div className="form-group">
          <label htmlFor="nombre">Nombre Completo</label>
          <input
            type="text"
            id="nombre"
            name="nombre"
            value={nombre}
            onChange={(e) => setNombre(e.target.value)}
            required
          />
        </div>
        <div className="form-group">
          <label htmlFor="email">Correo Electrónico</label>
          <input
            type="email"
            id="email"
            name="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
          />
        </div>
        <div className="form-group">
          <label htmlFor="password">Contraseña</label>
          <input
            type="password"
            id="password"
            name="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            required
          />
        </div>
        <button type="submit" className="registro-button">
          Registrarse
        </button>
      </form>
    </div>
  );
};

export default Registro;