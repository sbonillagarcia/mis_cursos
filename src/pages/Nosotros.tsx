import React, { useState } from 'react';
import './Nosotros.css';

const Nosotros: React.FC = () => {
  const [archivoSubido, setArchivoSubido] = useState(false);

  const handleFileUpload = (event: React.ChangeEvent<HTMLInputElement>) => {
    // Obtener el archivo subido
    const file = event.target.files?.[0];

    if (file) {
      // Aquí puedes implementar la lógica para subir el archivo
      // Una vez que se suba el archivo, cambia el estado a true
      setArchivoSubido(true);
    }
  };

  return (
    <div className="nosotros">
      <h2>¿Quiénes somos?</h2>
      <p>En Escala, creemos que aprender un nuevo idioma debería ser accesible para todos. Somos una plataforma dedicada a ofrecer cursos de idiomas de alta calidad de forma completamente gratuita. Nuestro equipo está compuesto por expertos lingüistas y apasionados educadores que trabajan incansablemente para desarrollar métodos de enseñanza innovadores y efectivos.</p>
      <video controls width="600">
        <source src="/videos/video1.mp4" type="video/mp4" />
        Tu navegador no soporta el elemento de video.
      </video>
      <div>
      <p>Nuestra misión es eliminar las barreras que impiden el aprendizaje de idiomas, permitiendo a personas de todas las edades y orígenes descubrir nuevas culturas y oportunidades. Con una amplia variedad de cursos que van desde el nivel principiante hasta avanzado, -escala-  es el compañero perfecto para aquellos que desean mejorar sus habilidades lingüísticas en su propio tiempo y ritmo.
       Únete a nuestra comunidad global de aprendices y empieza tu viaje hacia la fluidez lingüística con Escala hoy mismo.</p> 
       <img src="images/mision.jpg" alt="Descripción de la imagen"></img>
      </div> 
      <div>
        <p>
        Nuestra misión es democratizar el aprendizaje de idiomas,
        ofreciendo una herramienta gratuita y de alta calidad que 
        permita a personas de todas las edades y orígenes adquirir
        nuevas habilidades lingüísticas, fomentando así la 
        comunicación y el entendimiento entre culturas.
        </p>
        <img src="images/vision.jpg" alt="Descripción de la imagen"></img>
      </div>  
      <div>
        <p>
        Aspiramos a ser la principal plataforma de aprendizaje de idiomas en línea, reconocida por su efectividad, innovación y compromiso con la educación inclusiva. Queremos empoderar a individuos de todo el mundo para que alcancen sus metas personales y profesionales a través del dominio de idiomas.
        <img src="https://example.com/mi-imagen.jpg" alt="Descripción de la imagen"></img>
        </p>
      </div> 
      
      
      
      </div>
      

    
  );
};

export default Nosotros;