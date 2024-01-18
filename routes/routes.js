const express = require('express');
const router =express.Router();
const {getUtilisteur}  = require('../controlleurs/controlleurs.js');
// const PostModel = require('../model/model')



router.get("/api/utilisateur", getUtilisteur)





module.exports= router;