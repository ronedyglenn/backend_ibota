require('dotenv').config();
// Importation du module express
const express = require('express');
const cors = require("cors")
const app = express();
const connectDB = require('../config/db')
// Définition du port d'écoute, utilisant le port spécifié dans les variables d'environnement (process.env.PORT) ou le port 3000 par défaut

const port =process.env.PORT;

app.use(express.urlencoded({extended: true}))
app.use(express.json())
app.use(cors())


connectDB();





// Middleware pour traiter les req...
app.use(express.json());


// routes
app.use('/', require("../routes/routes.js"));



// Lancement du serveur, écoutant les connexions sur le port spécifié
app.listen(port, () => console.log('Le serveur a démarré au port ' + port));
