import React, { useState } from 'react';
import { jsPDF } from 'jspdf';
import './Certificaciones.css'; // Importa el archivo CSS

const Certificaciones: React.FC = () => {
  const [nombre, setNombre] = useState('');
  const [apellidos, setApellidos] = useState('');
  const [correo, Correo] = useState('');
  const [clave, Contraseña] = useState('');
  const [identificacion, setIdentificacion] = useState('');
  const [curso, setCurso] = useState('');
  const [fecha, setFecha] = useState('');

  const generarCertificado = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    // Crea el documento PDF
    const doc = new jsPDF();
    

    // Define el contenido del certificado
    const contenido = `
      Certificado 


      Certifica a:
       ${nombre} ${apellidos}

      con Identificación: ${identificacion}

      Finalizo correctamente el curso de: ${curso}

      a la Fecha: ${fecha}
    `;

    // Agrega el contenido al documento
    doc.text(contenido, 20, 20);

    doc.setFontSize(24); // Establece el tamaño de la letra en 14 puntos
    


    // Guarda el documento como PDF
    doc.save('certificado.pdf');
  };

  return (
    <div className="certificados-container">
      <h2>Generar Certificado</h2>
      <form onSubmit={generarCertificado}>
        <div className="form-group">
          <label htmlFor="correo">Correo:</label>
          <input type="text" value={nombre} onChange={(e) => setNombre(e.target.value)} required />
        </div>
        <div className="form-group">
          <label htmlFor="clave">Cntraseña:</label>
          <input type="text" value={apellidos} onChange={(e) => setApellidos(e.target.value)} required />
        </div>     
        <button type="submit">Generar Certificado</button>
      </form>
    </div>
  );
};

export default Certificaciones;