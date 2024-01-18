const mongoose = require('mongoose');
const moment = require('moment-timezone');

// Creation de compte
const utlisateurSchema = new mongoose.Schema(
  {
    nom: {
      type: String,
      required: true,
    
    },
    prenom: {
      type: String,
      required: true,
      
    },
    email: {
        type: String,
        required: true,
        unique: true
        
      },

      mot_de_passe: {
        type: String,
        required: true,
        
      },

      addresse: {
        type: String,
        required: true,
        
      },
      telephonne: {
        type: Number,
        required: true,
        
      },
    
   
  },
  {
    timestamps: true,
  }
);

module.exports = mongoose.model('utilisateur', utlisateurSchema)









// _______________________________________________________________
// Connection à la base de donnée

const signinSchema = mongoose.Schema(
  {
    username: {
      type: String,
      required: true,
      unique: true,
      trim: true,
    },
    password: {
      type: String,
      required: true,
    },
    lastLogin: {
      type: Date,
    },
    // fuseau horaire du Gabon
    registrationTime: {
      type: String,
      default: moment().tz('Africa/Libreville').format('HH:mm:ss'),
    },
    lastLogoutTime: {
      type: String,
    },
  },
  {
    timestamps: true,
  }
);

// Middleware pour mettre à jour les heures de connexion et déconnexion
signinSchema.pre('save', function (next) {
  const signin = this;

  if (signin.isModified('lastLogin')) {
    signin.lastLogoutTime = moment().tz('Africa/Libreville').format('HH:mm:ss');
  }

  next();
});

module.exports = mongoose.model('signin', signinSchema);
