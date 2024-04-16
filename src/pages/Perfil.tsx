import React, { useState, ChangeEvent } from 'react';
import { Link } from 'react-router-dom';
import './Perfil.css';

const Perfil: React.FC = () => {
  const [nombre, setNombre] = useState('Juan Pérez');
  const [numeroDocumento, setNumeroDocumento] = useState('1234567890');
  const [cursos, setCursos] = useState([
    { nombre: 'Curso 1', progreso: 80 },
    { nombre: 'Curso 2', progreso: 50 },
    { nombre: 'Curso 3', progreso: 100 },
  ]);
  const [fotoPerfil, setFotoPerfil] = useState('');
  const [autenticado, setAutenticado] = useState(true);

  const handleFotoChange = (e: ChangeEvent<HTMLInputElement>) => {
    const files = e.target.files;
    if (files && files.length > 0) {
      const file = files[0];
      setFotoPerfil(URL.createObjectURL(file));
    }
  };

  const handleCerrarSesion = () => {
    setNombre('');
    setNumeroDocumento('');
    setCursos([]);
    setFotoPerfil('');
    setAutenticado(false);
  };

  if (!autenticado) {
    // Redirigir al inicio si no está autenticado
    window.location.href = '/';
    return null; // Esto es solo para satisfacer TypeScript
  }

  return (
    <div className="perfil-container">
      <h1>Mi Perfil</h1>
      <button onClick={handleCerrarSesion}>Cerrar Sesión</button>
      <div className="perfil-info">
        <div>
          <label>Nombre:</label>
          <p>{nombre}</p>
        </div>
        <div>
          <label>Número de Documento:</label>
          <p>{numeroDocumento}</p>
        </div>
        <div className="foto-perfil">
          <label htmlFor="fotoPerfil">Foto de Perfil:</label>
          <input type="file" id="fotoPerfil" accept="image/*" onChange={handleFotoChange} />
          {fotoPerfil && <img src={fotoPerfil} alt="Foto de Perfil" />}
        </div>
      </div>
      <div className="cursos-container">
        <h2>Cursos Terminados</h2>
        {cursos.map((curso, index) => (
          <div key={index}>
            <p>{curso.nombre}</p>
           
          </div>
        ))}
      </div>
    </div>
  );
};

export default Perfil;