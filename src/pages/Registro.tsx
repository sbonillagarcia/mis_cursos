import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom'; // Importa useNavigate
import './Registro.css';

const Registro: React.FC = () => {
  const navigate = useNavigate(); // Obtiene la función de navegación
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');

  const handleRegistro = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    try {
      const response = await fetch('http://localhost:5000/api/registro', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify({ email, password })
      });
      const data = await response.json();
      console.log(data.message);
      navigate('/perfil');
    } catch (error) {
      console.error('Error al registrar usuario:', error);
    }
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
