// server.js
//import express, { Application } from "express";

const express = require('express');
const bodyParser = require('body-parser');
const { connectToMongo } = require('./mongo');
const { guardarUsuario } = require('./mongo');
const { buscarUsuario } = require('./mongo');
const { mis_cursos } = require('./mongo');



const app = express();
const PORT = process.env.PORT || 5000;

app.use(bodyParser.json());

// Inicializar la conexión a MongoDB antes de iniciar el servidor
(async () => {
  try {
    await connectToMongo();
    console.log('Conexión a MongoDB establecida');
    app.listen(PORT, () => {
      console.log(`Servidor iniciado en http://localhost:${PORT}`);
    });
  } catch (error) {
    console.error('Error al conectar a MongoDB:', error);
    process.exit(1); // Termina el proceso con código de error
  }
})();

app.post('/api/guardar-en-mongo', async (req, res) => {
  try {
    const { email, password } = req.body;
    await guardarUsuario(email, password);
    res.status(200).json({ message: 'Datos guardados en MongoDB' });
  } catch (error) {
    res.status(500).json({ message: 'Error al guardar en MongoDB', error: error.message });
  }
});


app.post('/api/iniciar-sesion', async (req, res) => {
  try {
    const { email, password } = req.body;
    const usuario = await buscarUsuario(email);
    if (!usuario || usuario.password !== password) {
      res.status(401).json({ message: 'Credenciales inválidas' });
      return;
    }
    res.status(200).json({ usuario });
  } catch (error) {
    res.status(500).json({ message: 'Error al iniciar sesión', error: error.message });
  }
});

app.get('/api/estado', (req, res) => {
  if (mis_cursos.isConnected()) {
    res.status(200).json({ message: 'Conexión a MongoDB establecida' });
  } else {
    res.status(500).json({ message: 'Error al conectar a MongoDB' });
  }
});

app.listen(PORT, () => {
  console.log(`Server running on http://localhost:${PORT}`);
});

