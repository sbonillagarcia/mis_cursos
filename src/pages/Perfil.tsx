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

  useEffect(() => {
    const usuarioRegistrado = localStorage.getItem('usuario');
    if (usuarioRegistrado) {
      setUsuario(JSON.parse(usuarioRegistrado));
      setAutenticado(true);
    }
  }, []);

  const handleIniciarSesion = (e: FormEvent) => {
    e.preventDefault();
    // Aquí puedes realizar la lógica de autenticación
    // Por ahora, solo vamos a simular que el usuario inicia sesión correctamente
    setUsuario({
      nombre: 'Juan Pérez',
      numeroDocumento: '1234567890',
      cursos: [
        { nombre: 'Curso 1', progreso: 80 },
        { nombre: 'Curso 2', progreso: 50 },
        { nombre: 'Curso 3', progreso: 100 },
      ],
      fotoPerfil: 'URL_DE_LA_IMAGEN'
    });
    setAutenticado(true);
    localStorage.setItem('usuario', JSON.stringify(usuario));
  };

  const handleCerrarSesion = () => {
    setUsuario(null);
    setAutenticado(false);
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
