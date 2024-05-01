// mongo.js
const { MongoClient } = require('mongodb');

const uri = 'mongodb://localhost:27017';
const client = new MongoClient(uri);

let collection; // Variable para almacenar la colección una vez conectada

export async function connectToMongo() {
  try {
    await client.connect();
    console.log('Conectado al servidor MongoDB');
    const database = client.db('Bases');
    collection = database.collection('usuarios');
  } catch (error) {
    console.error('Error al conectar a MongoDB:', error);
    throw error; // Propaga el error para manejarlo en el código que llama a esta función
  }
}

// Función para guardar un usuario
export async function guardarUsuario(email, password) {
  if (!collection) {
    throw new Error('La conexión a MongoDB no ha sido establecida');
  }

  try {
    await collection.insertOne({ email, password });
    console.log('Usuario registrado exitosamente');
  } catch (error) {
    console.error('Error al registrar usuario:', error);
    throw error;
  }
}

// Función para buscar un usuario

export async function buscarUsuario(email) {
  if (!collection) {
    throw new Error('La conexión a MongoDB no ha sido establecida');
  }

  try {
    const usuario = await collection.findOne({ email });
    return usuario;
  } catch (error) {
    console.error('Error al buscar usuario:', error);
    throw error;
  }
}
