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
import './styles.css';
//import { connectToMongo } from './mongo.js'; // Esta importación no es necesaria aquí

const App = () => {

  const [data,setData]=React.useState(null);
  const [fotoPerfil, setFotoPerfil] = useState('');
  const [mensajeServidor, setMensajeServidor] = useState('');

    
    // connectToMongo(); // Llamada a la función para conectar a MongoDB

    useEffect(() => {
      fetch("/api")
        .then((res) => res.json())
        .then((data) => setData(data.message));
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
          <p>Respuesta del servidor: {mensajeServidor}</p>
        </div>
        <Footer />
      </Router>
    </AuthProvider>
  );
}

export default App;
