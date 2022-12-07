const express = require('express');
const router = express.Router();

const mongoose = require('mongoose');
const schema = mongoose.Schema;

const userSchema = new schema({
    nombre: String,
    email: String,
    contra: String,
    idU: String
})

const userModel = mongoose.model('users', userSchema);

module.exports = router;

router.post('/createuser', (req, res) => {
    const newUser = new userModel({
        nombre: req.body.nombre,
        email: req.body.email,
        contra: req.body.contra,
        idU: req.body.idU
    })
    newUser.save(function(err){
        if(!err){
            res.send('User added correctly!')
        }else {
            res.send(err)
        }
    })
})