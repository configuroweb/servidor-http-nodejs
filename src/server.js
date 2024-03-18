// src/server.js

// Importamos Express
const express = require('express');
const app = express();
const PORT = process.env.PORT || 3000;

// Middleware para servir archivos estáticos
app.use(express.static('public'));

// Ruta para la página de inicio
app.get('/', (req, res) => {
    res.sendFile(__dirname + '/views/home.html');
});

// Ruta para la página about
app.get('/about', (req, res) => {
    res.sendFile(__dirname + '/views/about.html');
});

// Iniciar servidor
app.listen(PORT, () => {
    console.log(`Servidor escuchando en el puerto ${PORT}`);
});
