import React, { useState, useEffect, ChangeEvent } from 'react';
import { Link, useNavigate } from 'react-router-dom'; // Agrega useNavigate
import './Perfil.css';

interface Usuario {
  nombre: string;
  numeroDocumento: string;
  cursos: { nombre: string; progreso: number }[];
  fotoPerfil: string;
}

const Perfil: React.FC = () => {
  const navigate = useNavigate(); // Obtiene la función de navegación

  const [usuario, setUsuario] = useState<Usuario>({
    nombre: '',
    numeroDocumento: '',
    cursos: [],
    fotoPerfil: ''
  });
  const [autenticado, setAutenticado] = useState(true);

  useEffect(() => {
    // Simulación de carga de datos del usuario
    const usuarioRegistrado = {
      nombre: 'Juan Pérez',
      numeroDocumento: '1234567890',
      cursos: [
        { nombre: 'Curso 1', progreso: 80 },
        { nombre: 'Curso 2', progreso: 50 },
        { nombre: 'Curso 3', progreso: 100 },
      ],
      fotoPerfil: 'URL_DE_LA_IMAGEN'
    };

    setUsuario(usuarioRegistrado);
  }, []);

  const handleCerrarSesion = () => {
    setAutenticado(false);
    navigate('/');
  };

  if (!autenticado) {
    navigate('/');
    return null;
  }

  const handleFotoChange = (e: ChangeEvent<HTMLInputElement>) => {
    const files = e.target.files;
    if (files && files.length > 0) {
      const file = files[0];
      setUsuario(prevUsuario => ({ ...prevUsuario, fotoPerfil: URL.createObjectURL(file) }));
    }
  };

  return (
    <div className="perfil-container">
      <h1>Mi Perfil</h1>
      <button onClick={handleCerrarSesion}>Cerrar Sesión</button>
      <div className="perfil-info">
        <div>
          <label>Nombre:</label>
          <p>{usuario.nombre}</p>
        </div>
        <div>
          <label>Número de Documento:</label>
          <p>{usuario.numeroDocumento}</p>
        </div>
        <div className="foto-perfil">
          <label htmlFor="fotoPerfil">Foto de Perfil:</label>
          <input type="file" id="fotoPerfil" accept="image/*" onChange={handleFotoChange} />
          {usuario.fotoPerfil && <img src={usuario.fotoPerfil} alt="Foto de Perfil" />}
        </div>
      </div>
      <div className="cursos-container">
        <h2>Cursos Terminados</h2>
        {usuario.cursos.map((curso, index) => (
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
