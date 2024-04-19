import React, { useState, ChangeEvent } from 'react'; // Añadido ChangeEvent
import { useNavigate } from 'react-router-dom';
import './Login.css';

const Login = () => {
  const navigate = useNavigate();
  const [comentarios, setComentarios] = useState([
    {
      id: 1,
      usuario: 'Juan',
      comentario: 'Aprendi mucho gracias'
    },
   
  ]);
  const [nuevoComentario, setNuevoComentario] = useState({
    usuario: '',
    comentario: ''
  });

  const handleInputChange = (e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => { // Especificado tipo de e
    const { name, value } = e.target;
    setNuevoComentario((prevComentario) => ({
      ...prevComentario,
      [name]: value
    }));
  };

  const handlePublicarComentario = () => {
    if (nuevoComentario.usuario && nuevoComentario.comentario) {
      const newComentario = {
        id: comentarios.length + 1,
        ...nuevoComentario
      };
      setComentarios([...comentarios, newComentario]);
      setNuevoComentario({
        usuario: '',
        comentario: ''
      });
    }
  };

  return (
    <div className="login-container">
      <div className="comentarios-container">
        <h2>Comentarios de usuarios</h2>
        <div className="comentarios-list">
          {comentarios.map((comentario) => (
            <div key={comentario.id} className="Comentarios">
              <h3>{comentario.usuario}</h3>
              <p>{comentario.comentario}</p>
            </div>
          ))}
        </div>
        <div className="nuevo-comentario">
          <input
            type="text"
            placeholder="Nombre de usuario"
            name="usuario"
            value={nuevoComentario.usuario}
            onChange={handleInputChange}
          />
          <textarea
            placeholder="Escribe tu comentario"
            name="comentario"
            value={nuevoComentario.comentario}
            onChange={handleInputChange}
          />
          <button onClick={handlePublicarComentario}>Publicar</button>
        </div>
      </div>
    </div>
  );
};

export default Login;
