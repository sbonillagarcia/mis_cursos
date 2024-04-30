import React, { useState,useEffect } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'; // Importa Routes
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

function App() {
  const [fotoPerfil, setFotoPerfil] = useState(''); // Estado para la foto de perfil

  return (
    <AuthProvider>
    <Router>
      <Navbar fotoPerfil={fotoPerfil} /> {/* Pasa el estado de la foto de perfil al Navbar */}
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

export default App;
