import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import './Login.css';

const Login = () => {
  const navigate = useNavigate();
  //const [comentarios, setComentarios] = useState([]);

  const comentarios = [
    {
      id: 1,
      usuario: 'Juan',
      comentario: 'Excelente artículo'
    },
    {
      id: 2,
      usuario: 'Maria',
      comentario: 'Me encantó, gracias'
    },
    {
      id: 3,
      usuario: 'Carlos',
      comentario: 'Muy útil la información'
    },
    {
      id: 4,
      usuario: 'Laura',
      comentario: 'Interesante, seguiré leyendo'
    },
    {
      id: 5,
      usuario: 'Pedro',
      comentario: 'Gran trabajo, felicitaciones'
    }
  ]; 
    
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
      </div>
    </div>
  );
};

export default Login;
