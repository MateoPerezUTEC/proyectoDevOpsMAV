const express = require('express');
const routes = require('./routes');
const path = require('path');
const bodyParser = require('body-parser');

//Conexión BD

const db = require('./config/db');

//importar el modelo

require('./models/Proyectos');

db.sync()
    .then(() => console.log('Conectado al servidor'))
    .catch(error => console.log(error));

// crear una aplicacion express

const app = express();


//Carga de archivos estáticos
app.use(express.static('public'));

// Habilitar pug
app.set('view engine', 'pug');

// Agregar la carpeta de las vistas
app.set('views', path.join(__dirname, './views'));

//bodyParser para capturar datos del formulario
app.use(bodyParser.urlencoded({extended: true}));

app.use('/', routes());


app.listen(7000);

