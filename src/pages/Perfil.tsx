import React, { useState, useEffect, ChangeEvent, FormEvent } from 'react';
import { useNavigate } from 'react-router-dom';
import './Perfil.css';

interface Usuario {
  nombre: string;
  numeroDocumento: string;
  cursos: { nombre: string; progreso: number }[];
  fotoPerfil: string;
}

const Perfil: React.FC = () => {
  const navigate = useNavigate();

  const [usuario, setUsuario] = useState<Usuario | null>(null);
  const [autenticado, setAutenticado] = useState(false);
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');

  useEffect(() => {
    const usuarioRegistrado = localStorage.getItem('usuario');
    if (usuarioRegistrado) {
      const usuarioGuardado = JSON.parse(usuarioRegistrado);
      setUsuario(usuarioGuardado);
      setEmail(usuarioGuardado.email); // Ajusta el estado del email si se encuentra en el almacenamiento local
      setAutenticado(true);
    }
  }, []);

  const handleIniciarSesion = async (e: FormEvent) => {
    e.preventDefault();
    try {
      const response = await fetch('http://localhost:5000/api/iniciar-sesion', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify({ email, password })
      });
      const data = await response.json();
      if (response.ok) {
        setUsuario(data.usuario);
        setAutenticado(true);
        localStorage.setItem('usuario', JSON.stringify(data.usuario));
      } else {
        setError(data.message);
      }
    } catch (error) {
      setError('Error al iniciar sesión');
      console.error('Error al iniciar sesión:', error);
    }
  };

  const handleCerrarSesion = () => {
    setUsuario(null);
    setAutenticado(false);
    setEmail('');
    setPassword('');
    setError('');
    localStorage.removeItem('usuario');
  };

  if (!autenticado) {
    return (
      <div className="perfil-container">
        <h1>Iniciar Sesión</h1>
        <form onSubmit={handleIniciarSesion}>
          <label>Email:</label>
          <input type="email" value={email} onChange={(e) => setEmail(e.target.value)} />
          <label>Contraseña:</label>
          <input type="password" value={password} onChange={(e) => setPassword(e.target.value)} />
          <button type="submit">Iniciar Sesión</button>
          {error && <p className="error-message">{error}</p>}
        </form>
      </div>
    );
  }

  return (
    <div className="perfil-container">
      <h1>Mi Perfil</h1>
      <button onClick={handleCerrarSesion}>Cerrar Sesión</button>
      <div className="perfil-info">
        <div>
          <label>Nombre:</label>
          <p>{usuario?.nombre}</p>
        </div>
        <div>
          <label>Número de Documento:</label>
          <p>{usuario?.numeroDocumento}</p>
        </div>
        <div className="foto-perfil">
          <label>Foto de Perfil:</label>
          <img src={usuario?.fotoPerfil} alt="Foto de Perfil" />
        </div>
      </div>
      <div className="cursos-container">
        <h2>Cursos Terminados</h2>
        {usuario?.cursos.map((curso, index) => (
          <div key={index}>
            <p>{curso.nombre}</p>
            <p>Progreso: {curso.progreso}%</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Perfil;
