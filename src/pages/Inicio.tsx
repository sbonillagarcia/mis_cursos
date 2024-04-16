import React from 'react';
import './Inicio.css';

const Inicio: React.FC = () => {
  return (
    <div className="principal">
      <section>
        <div className="cajas">
          <div className="box">
            <img src="https://img.freepik.com/vector-premium/concepto-aprendizaje-frances-curso-frances-escuela-idiomas-estudiar-idiomas-extranjeros-hablante-nativo-idea-comunicacion-global-ilustracion-vectorial-estilo-dibujos-animados_277904-16276.jpg" alt="france" className="images" />
            <button className="button" type="button">Comenzar!</button>
            <p>Curso de Francés</p>
          </div>
          <div className="box">
            <img src="https://c8.alamy.com/compes/2c7tjyj/cursos-de-idiomas-en-linea-ilustracion-vectorial-plana-educacion-a-distancia-escuela-remota-universidad-espanola-clase-de-internet-en-espanol-e-learning-aislado-sobre-fondo-blanco-2c7tjyj.jpg" alt="spain" className="images" />
            <button className="button" type="button">Comenzar!</button>
            <p>Curso de Español</p>
          </div>
          <div className="box">
            <img src="https://www.shutterstock.com/image-vector/italian-language-online-course-distance-600nw-2195330879.jpg" alt="english" className="images" />
            <button className="button" type="button">Comenzar!</button>
            <p>Curso de Italiano</p>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Inicio;