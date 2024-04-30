import React, { useState, ChangeEvent } from 'react';
import { useNavigate } from 'react-router-dom';
import './Login.css';

const Login = () => {
  const navigate = useNavigate();
<<<<<<< HEAD
  //const [comentarios, setComentarios] = useState([]);

 const comentarios = [
=======
  const [comentarios, setComentarios] = useState([
>>>>>>> 0287f7ed8344a5bb04f15cffeca676f4f278ccd8
    {
      id: 1,
      usuario: 'Juan',
      comentario: 'Aprendi mucho gracias',
      calificacion: 0,
    },
  ]);
  const [nuevoComentario, setNuevoComentario] = useState({
    usuario: '',
    comentario: '',
    calificacion: 0,
  });
  const [comentarioCalificacion, setComentarioCalificacion] = useState('');

  const handleInputChange = (e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setNuevoComentario((prevComentario) => ({
      ...prevComentario,
      [name]: value,
    }));
  };

  const handlePublicarComentario = () => {
    if (nuevoComentario.usuario && nuevoComentario.comentario && comentarioCalificacion) {
      const newComentario = {
        id: comentarios.length + 1,
        ...nuevoComentario,
        calificacion: Number(comentarioCalificacion),
      };
      setComentarios([...comentarios, newComentario]);
      setNuevoComentario({
        usuario: '',
        comentario: '',
        calificacion: 0,
      });
      setComentarioCalificacion('');
    }
<<<<<<< HEAD
  ]; 
    
 return (
    
        <div className="cajas3">
=======
  };

  const handleCalificarComentario = (id: number, calificacion: number) => {
    const updatedComentarios = comentarios.map((comentario) =>
      comentario.id === id ? { ...comentario, calificacion } : comentario
    );
    setComentarios(updatedComentarios);
  };

  return (
    <div className="login-container">
      <div className="comentarios-container">
>>>>>>> 0287f7ed8344a5bb04f15cffeca676f4f278ccd8
        <h2>Comentarios de usuarios</h2>
        <div className="box3">
        
          {comentarios.map((comentario) => (
            <div key={comentario.id} className="comentario">
              <h3>{comentario.usuario }</h3>
              <p>{comentario.comentario}</p>
              <div className="estrellas">
                {[1, 2, 3, 4, 5].map((estrella) => (
                  <span
                    key={estrella}
                    className={comentario.calificacion >= estrella ? 'estrella-activa' : ''}
                    onClick={() => handleCalificarComentario(comentario.id, estrella)}
                  >
                    ★
                  </span>
                ))}
              </div>
              <p>Calificación: {comentario.calificacion}</p>
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
          <input
            type="number"
            placeholder="Calificación (1-5)"
            value={comentarioCalificacion}
            onChange={(e) => setComentarioCalificacion(e.target.value)}
          />
          <button onClick={handlePublicarComentario}>Publicar</button>
        </div>
      </div>
    
  );
};

export default Login;

