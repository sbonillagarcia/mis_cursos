import React, { useState, useEffect, useRef } from 'react';
import { Link } from 'react-router-dom'; // Asegúrate de tener esta importación
import './Inicio.css';

const Inicio: React.FC = () => {
  // Datos de ejemplo: nombres, fotos y comentarios de personas
  const comentarios = [
    { nombre: "Jorge Francisco", foto: "/images/perfil1.png", texto: "El curso de frances supero mis expectativas. Los instructores son expertos y el contenido es muy practico." },
    { nombre: "María Jose", foto: "/images/perfil1.png", texto: "Gracias a este curso, mi confianza al hablar frances ha aumentado significativamente ¡muy recomendable!" },
    { nombre: "Anita Gomez", foto: "/images/perfil1.png", texto: "La plataforma es intuitiva y los ejercicios interactivos me ayudaron a aprender rapidamente. ¡Excelente experiencia!" }
  ];

  // Estado local para controlar si los comentarios ya han sido cargados
  const [comentariosCargados, setComentariosCargados] = useState(false);

  // Referencia al elemento donde se cargarán los comentarios
  const comentariosRef = useRef<HTMLDivElement>(null);

  // Función para cargar los comentarios en la sección de comentarios
  const cargarComentarios = () => {
    // Limpiar el elemento de comentarios antes de cargarlos
    if (comentariosRef.current) {
      comentariosRef.current.innerHTML = '';
    }

    comentarios.forEach(comentario => {
      const divComentario = document.createElement("div");
      divComentario.classList.add("comentario");

      const imgFoto = document.createElement("img");
      imgFoto.alt = comentario.nombre;
      imgFoto.src = comentario.foto;
     

      const divContenido = document.createElement("div");

      const nombrePersona = document.createElement("p");
      
      nombrePersona.textContent = comentario.nombre;

      const textoComentario = document.createElement("p");
      textoComentario.classList.add("texto");
      textoComentario.textContent = comentario.texto;

      divContenido.appendChild(nombrePersona);
      divContenido.appendChild(textoComentario);

      divComentario.appendChild(imgFoto);
      divComentario.appendChild(divContenido);

      comentariosRef.current?.appendChild(divComentario);
    });

    // Indicar que los comentarios han sido cargados
    setComentariosCargados(true);
  };

  // Cargar comentarios al montar el componente
  useEffect(() => {
    if (!comentariosCargados) {
      cargarComentarios();
    }
  }, [comentariosCargados]);

  return (
    <div className="principal">
      <section className="seccion1" >
        <div className="cajas">
          <div className="box">
            <img src="/images/image1.jpg" alt="france" className="images" />
            <h2>Francés</h2>
            <p className="texto1">Bienvenido al emocionante viaje de aprender frances, uno de los idiomas mas bellos y romanticos del mundo</p>
            <p className="texto2"><span>Duration:</span>3 meses</p>
            <p className="texto3">Precio : $0</p>
            <button className="button1" type="button">Buy</button>
          </div>
          <div className="box">
            <img src="/images/image2.jpg" alt="france" className="images" /> 
            <h2>Español</h2>
            <p className="texto1">Descubre la belleza y la riqueza del español con nuestro curso interactivo</p>
            <p className="texto2"><span>Duration:</span>3 meses</p>
            <p className="texto3">Precio : $0</p>
            <button className="button1" type="button">Buy</button>
          </div>
          <div className="box">
            <img src="/images/image3.jpg" alt="france" className="images" />
            <h2>Italiano</h2>
            <p className="texto1">Sumergete en el idioma del arte, la moda y la gastronomia con nuestro curso de italiano</p>
            <p className="texto2"><span>Duration:</span>3 meses</p>
            <p className="texto3">Precio : $0</p>
            <button className="button1" type="button">Buy</button>
          </div>
          <div className="call-to-action">
      {/* Envolvemos todo en el componente Link y establecemos el 'to' para la ruta */}
      <Link to="/registro" className="btn-img">
        {/* Imagen de fondo */}
        <img src="/images/cerebro.jpg" alt="Registrarse" />
        {/* Texto superpuesto */}
        <div className="btn-text">Regístrate</div>
      </Link>
    </div>

        </div>
      </section>
      <h2 className="seccion2">Comentarios</h2>
      <section id="comentarios" ref={comentariosRef}>
        {/* Aquí se mostrarán los comentarios dinámicamente */}
      </section>
    </div>
  );
};

export default Inicio;
