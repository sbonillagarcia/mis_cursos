import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom'; // Importa useNavigate
import './Registro.css';

const Registro: React.FC = () => {
  const navigate = useNavigate(); // Obtiene la función de navegación
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');

  const handleRegistro = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    // Lógica para enviar datos de registro aquí
    console.log('Datos de registro:', email, password, confirmPassword);
    // Después del registro, redirige al usuario al perfil
    navigate('/perfil'); // Redirige al perfil después del registro
  };

  return (
    <div className="registro-container">
      <h1>Registrate gratis!!!</h1>
      
      <form onSubmit={handleRegistro}>
        <div className="form-group">
          <label htmlFor="email">Email</label>
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
        <div className="form-group">
          <label htmlFor="confirmPassword">Confirmar Contraseña</label>
          <input
            type="password"
            id="confirmPassword"
            name="confirmPassword"
            value={confirmPassword}
            onChange={(e) => setConfirmPassword(e.target.value)}
            required
          />
        </div>
        <button type="submit" className="registro-button">
          Enviar
        </button>
      </form>
      <p>Escala en un mundo lleno de posibilidades y conecta con culturas de todo el mundo!</p>
    </div>
  );
};

export default Registro;
