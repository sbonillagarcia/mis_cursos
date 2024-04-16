import React, { useState } from 'react';
import './Nosotros.css';

const Nosotros: React.FC = () => {
  const [archivoSubido, setArchivoSubido] = useState(false);

  const handleFileUpload = () => {
    // Aquí puedes implementar la lógica para subir el archivo
    // Una vez que se suba el archivo, cambia el estado a true
    setArchivoSubido(true);
  };

  return (
    <div className="imagen-principal" style={{ backgroundImage: "url('https://www.bing.com/images/create/una-junta-de-oficina-con-pocas-personas-y-que-haci/1-6612ba478832436cae270c57e206c225?id=bq6EwwQKIXKwJJKM17ViFQ%3D%3D&view=detailv2&idpp=genimg&idpclose=1&thid=OIG2.t3bGJzJ6duUCmOxBVN1K&frame=sydedg&form=SYDBIC')" }}>
    <h2>Nuestros servicios</h2>
   
      <div className="subir-archivo">
        <p className="parrafo2">enviar:</p>
        <label htmlFor="archivo" className="custom-file-upload">
  Subir archivo
</label>
<input
  type="file"
  id="archivo"
  name="archivo"
  onChange={handleFileUpload}
/>

      </div>
      {archivoSubido && (
        <button className="boton-cotizacion">Pedir Cotización</button>
      )}
    </div>
  );
};

export default Nosotros;