// App.js
import React, { useState, useEffect } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './modulos/Navbar';
import Footer from './modulos/Footer';
import Inicio from './pages/Inicio';
import Login from './pages/Login';
import Registro from './pages/Registro';
import Nosotros from './pages/Nosotros';
import Certificaciones from './pages/Certificaciones';
import Perfil from './pages/Perfil';
import { AuthProvider } from './AuthContext';
//import { connectToMongo } from './mongo.js'; // Ruta a tu archivo mongo.js
import './styles.css';

function App() {
  const [fotoPerfil, setFotoPerfil] = useState('');
  const [mensajeServidor, setMensajeServidor] = useState('');

  useEffect(() => {
   // connectToMongo(); // Llamada a la función para conectar a MongoDB
    fetch('http://localhost:5000/api/ejemplo')
      .then(response => response.json())
      .then(data => setMensajeServidor(data.mensaje))
      .catch(error => console.error(error));
  }, []);

  return (
    <AuthProvider>
      <Router>
        <Navbar fotoPerfil={fotoPerfil} />
        <div className="container">
          <Routes>
            <Route path="/" element={<Inicio />} />
            <Route path="/login" element={<Login />} />
            <Route path="/perfil" element={<Perfil />} />
            <Route path="/registro" element={<Registro />} />
            <Route path="/nosotros" element={<Nosotros />} />
            <Route path="/certificaciones" element={<Certificaciones />} />
            <Route path="/perfil" element={<Perfil />} />
          </Routes>
        </div>
        <Footer />
      </Router>
      <p>Respuesta del servidor: {mensajeServidor}</p>
    </AuthProvider>
  );
}

export default App;
