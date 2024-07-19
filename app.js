// app.js
const express = require('express');
const app = express();
const port = 3000;

// Middleware para servir archivos estáticos desde el directorio 'public'
app.use(express.static('public'));

// Ruta para servir index.html cuando se acceda a '/'
app.get('/', (req, res) => {
    res.sendFile(__dirname + '/public/index.html');
});

// Iniciar el servidor
app.listen(port, () => {
    console.log(`Servidor escuchando en http://localhost:${port}`);
});
