const express = require('express');
const bodyParser = require('body-parser');
const mongoose = require('mongoose');

const app = express();
const PORT = 5000;

mongoose.connect('mongodb://localhost:27017/usuarios', { useNewUrlParser: true, useUnifiedTopology: true });

const User = mongoose.model('User', { email: String, password: String });

app.use(bodyParser.json());

app.post('/api/registro', async (req, res) => {
    try {
      const { email, password } = req.body;
      const newUser = new User({ email, password });
      await newUser.save();
  
      // Devolver los datos del usuario registrado
      res.status(201).json({ message: 'Usuario registrado exitosamente', usuario: newUser });
    } catch (error) {
      res.status(500).json({ message: 'Error al registrar usuario', error: error.message });
    }
  });
  

app.listen(PORT, () => {
  console.log(`Servidor iniciado en http://localhost:${PORT}`);
});
