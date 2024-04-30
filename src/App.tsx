<<<<<<< HEAD
<<<<<<< HEAD
import React, { useState,useEffect } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'; // Importa Routes
=======
// App.js
=======
>>>>>>> bc878c6dea0884e29bd655cea34e8c66dfece4af
import React, { useState, useEffect } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
>>>>>>> 0287f7ed8344a5bb04f15cffeca676f4f278ccd8
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
  const [fotoPerfil, setFotoPerfil] = useState('');
  const [mensajeServidor, setMensajeServidor] = useState('');

  useEffect(() => {
    // Esta función debería estar en el servidor, no en el cliente
    // connectToMongo(); // Llamada a la función para conectar a MongoDB

    fetch('http://localhost:5000/api/registro')
      .then(response => response.json())
      .then(data => setMensajeServidor(data.message))
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
          <p>Respuesta del servidor: {mensajeServidor}</p>
        </div>
        <Footer />
      </Router>
    </AuthProvider>
  );

  const App: React.FC = () => {
    const [data, setData] = useState<string | null>(null);
  
    useEffect(() => {
      fetch("/api")
        .then((res) => res.json())
        .then((data) => setData(data.message));
    }, []);
    return (
      <div className="App">
        <header className="App-header">
          <p>{!data ? "Loading..." : data}</p>
        </header>
      </div>
    );
  }

}

export default App;
