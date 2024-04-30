// mongo.js
const { MongoClient } = require('mongodb');

// URI de conexión a tu base de datos MongoDB
const uri = 'mongodb://localhost:27017';

// Crear un nuevo cliente de MongoDB
const client = new MongoClient(uri);

// Función asincrónica para conectar a la base de datos
export async function connectToMongo() {
  try {
    // Conectar al servidor MongoDB
    await client.connect();
    console.log('Conectado al servidor MongoDB');

    // Seleccionar la base de datos y la colección
    const database = client.db('Bases');
    const collection = database.collection('nombre_de_tu_coleccion');

    // Ejemplo de inserción de un documento en la colección
    await collection.insertOne({ nombre: 'Ejemplo', edad: 30 });
    console.log('Documento insertado con éxito');

    // Ejemplo de búsqueda de documentos en la colección
    const documentos = await collection.find({}).toArray();
    console.log('Documentos encontrados:', documentos);
  } catch (error) {
    console.error('Error al conectar a MongoDB:', error);
  } finally {
    // Cerrar la conexión al finalizar
    await client.close();
    console.log('Conexión cerrada');
  }
}
