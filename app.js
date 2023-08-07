require('dotenv').config()
const express = require('express')
const cors = require('cors')
const app = express()
const { dbConnect } = require('./config/mongo')

const PORT = process.env.PORT || 3000;
const HOST = process.env.HOST || '0.0.0.0';

// Configuración de EJS y vistas
app.set('view engine', 'ejs');
app.set('views', './app/views/pages');

app.use(cors());
app.use(express.json());
app.use(express.static('./app/public'));
app.use('/', require('./app/routes'));

dbConnect();

app.listen(PORT, HOST, () => {
    console.log(`Servidor Node.js escuchando en http://${HOST}:${PORT}`);
})