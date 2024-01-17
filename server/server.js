const dotenv = require('dotenv').config();
// Importation du module express
const express = require('express');
const app = express();
const connectDB = require('../config/db')
// Définition du port d'écoute, utilisant le port spécifié dans les variables d'environnement (process.env.PORT) ou le port 3000 par défaut

const port =3000;

app.use(express.urlencoded({extended: false}))










// /res
app.get('/', (req, res) => {
    res.json({message: 'Hello word'})
})






// Lancement du serveur, écoutant les connexions sur le port spécifié
app.listen(port, () => console.log('Le serveur a démarré au port ' + port));
