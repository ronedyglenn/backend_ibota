const mongoose = require('mongoose');





// Fonction asynchrone pour établir la connexion à la base de données
const connectDB = async () => {
    try {
        // Désactive le mode strict pour les requêtes MongoDB
        mongoose.set('strictQuery', false);

        // Établit la connexion à la base de données en utilisant l'URL de connexion de l'environnement
        await mongoose.connect(process.env.MONGO_URI);

        // Affiche un message si la connexion à la base de données est réussie
        console.log('Base de données connectée');
    } catch (err) {
        // Gère les erreurs en affichant un message d'erreur et en terminant le processus
        console.error('Erreur de connexion à la base de données :', err);

        // 
        process.exit();
    }
};

// Exporte la fonction connectDB pour l'utiliser dans d'autres parties de votre application
module.exports = connectDB;
