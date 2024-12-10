const express = require('express');
const app = express();
const bodyParser = require('body-parser');
const morgan = require('morgan');
const { corsMiddleware } = require('./middlewares/cors.js')
//const { initPool, closePool } = require('./(services)/database/dbPool');
const mainRouter = require('./routes/mainRouter');

// Middlewares
app.use(morgan('common'));
app.use(bodyParser.json());

app.use(function(req, res, next) {
  corsMiddleware(req, res)
  next()
})

// Rutas
app.use('/', mainRouter);

// Middleware global para errores
app.use((err, req, res, next) => {
  console.error('Middleware de error:', err.message);
  return res.status(500).json({ message: `-- GLOBAL SERVER ERROR ${err.message}` });
});

// Inicialización del pool de conexiones y del servidor
/*(async () => {
    try {
        await initPool();
        console.log('Pool de conexiones inicializado');
        app.listen(8085, () => {
            console.log('Servicio MVC en puerto 8085');
        });
    } catch (err) {
        console.error('Error al inicializar el pool de conexiones:', err.message);
        process.exit(1);
    }
})();*/
app.listen(8085, () => {
  console.log('Servicio MVC en puerto 8085');
});

// Cierre del pool al finalizar
/*process.on('SIGINT', async () => {
    console.log('Cerrando el pool de conexiones...');
    await closePool();
    process.exit(0);
});*/
