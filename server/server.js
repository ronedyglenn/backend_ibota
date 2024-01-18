require('dotenv').config();
// Importation du module express
const express = require('express');
const cors = require("cors")
const app = express();
const connectDB = require('../config/db')
const swaggerJsDoc = require('swagger-jsdoc');
const swaggerUi = require('swagger-ui-express')
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



const options = {
    definition: {
        openapi: '3.0.0',
        info: {
            title: 'API Utilisateur',
            version: '1.0.0',
            description: "Il s'agit de l'api qui permettra de récupérer les données sur les naissances et les utilisateurs de ibota"
        },
        servers: [
            {
                url: 'https://ibota.onrender.com',
            },
        ],
        paths: {
            "/api/utilisateur": {
              get: {
                summary: "Récupérer la liste des utilisateurs",
                description: "Endpoint pour obtenir la liste des utilisateurs.",
                responses: {
                  200: {
                    description: "Réponse réussie",
                    content: {
                      "application/json": {
                        example: {
                          "utilisateurs": [
                            {
                              "message": "Hello"
                            },
                            
                          ]
                        }
                      }
                    }
                  },
                },
            }
        },

        
    },
},
apis: ['../routes/*.js'], // Spécifiez vos fichiers d'API ici
}

const spacs = swaggerJsDoc(options)

app.use(
    "/api-docs",
    swaggerUi.serve,
    swaggerUi.setup(spacs)
    )
// Lancement du serveur, écoutant les connexions sur le port spécifié
app.listen(port, () => console.log('Le serveur a démarré au port ' + port));
