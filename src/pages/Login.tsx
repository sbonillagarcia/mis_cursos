import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom'; // Importa useNavigate
import './Login.css';

const Login = () => {
  const navigate = useNavigate(); // Usa useNavigate para la navegación
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleLogin = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    // Lógica para iniciar sesión aquí
    console.log('Iniciar sesión con:', email, password);
    navigate('/perfil'); // Navega a la ruta '/perfil' después de iniciar sesión
  };

  return (
    <div className="login-container">
      <h2>Iniciar Sesión</h2>
      <form onSubmit={handleLogin}>
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
        <button type="submit" className="login-button">
          Iniciar Sesión
        </button>
        <a href="#">Olvidaste tu contraseña?</a>
      </form>
      <div className="google-login">
        <button className="google-button">Iniciar Sesión con Google</button>
      </div>
    </div>
  );
};

export default Login;