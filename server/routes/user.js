const express = require('express');
const router = express.Router();

const mongoose = require('mongoose');
const schema = mongoose.Schema;

const userSchema = new schema({
    nombre: String,
    email: String,
    contra: String,
    imgUrl: String,
    idU: String
})

const userModel = mongoose.model('users', userSchema);

module.exports = router;

const multer = require('multer');
const upload = require('../libs/storage')

//Crear
router.post('/createuser', upload.single('txtImagen'), (req, res) => {
    var filename="";
    if(req.file){
        filename = req.file.filename;
    }
    const newUser = new userModel({
        nombre: req.body.txtNombre,
        email: req.body.txtCorreo,
        contra: req.body.txtContra,
        imgUrl: filename,
        idU: req.body.idU
    })
    
    newUser.save(function (err) {
        if (!err) {
            res.send('User added correctly!')
        } else {
            res.send(err)
        }
    })
})

//Buscar
router.post('/searchuser', (req, res) => {
    userModel.findOne({ email: req.body.email, contra: req.body.contra }, function (err, docs) {
        if (err) {
            console.log(err)
        } else {
            docs === null ? res.send("1") :
                res.send(docs)

        }
    })
})

router.post('/searchemail', (req, res) => {
    userModel.findOne({ email: req.body.email }, function (err, docs) {
        if (err) {
            console.log(err)
        } else {
            docs !== null ? res.send('Email en uso') :
                res.send("1")
        }
    })
})

//Actualizar
router.post('/updateuser', (req, res) => {
    const update = {
        nombre: req.body.nombre,
        email: req.body.email,
        contra: req.body.contra
    }
    userModel.findOneAndUpdate({ idU: req.body.idU }, update, { new: true }, function (err, docs) {
        if (err) {
            console.log(err)
        } else {
            res.send(docs)
        }
    })
})
