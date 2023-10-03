const express = require('express');
const app = express();
const port = 4000;

// Define a rota para a página HTML
app.get('/livros', (req, res) => {
  res.sendFile(__dirname + '/pages/livros.html');
});

// Define a rota para a página HTML
app.get('/', (req, res) => {
  res.sendFile(__dirname + '/pages/index.html');
});



// Define a rota para a página HTML
app.get('/categorias', (req, res) => {
  res.sendFile(__dirname + '/pages/categorias.html');
});

// Define a rota para a página HTML
app.get('/usuarios', (req, res) => {
  res.sendFile(__dirname + '/pages/usuarios.html');
});

// Define a rota para a página HTML
app.get('/pedidos', (req, res) => {
  res.sendFile(__dirname + '/pages/pedidos.html');
});

// Inicia o servidor
app.listen(port, () => {
  console.log(`Servidor rodando em http://localhost:${port}/`);
});
