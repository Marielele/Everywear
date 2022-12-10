const express = require('express');
const router = express.Router();

const mongoose = require('mongoose');
const schema = mongoose.Schema;

const wishSchema = new schema({
    nombre: String,
    precio: String,
    idU: String,
    idWish: String
})

const wishModel = mongoose.model('wishes', wishSchema);

module.exports = router;

//Agregar
router.post('/addtowishlist', (req, res) => {
    const add = new wishModel({
        nombre: req.body.nombre,
        precio: req.body.precio,
        idU: req.body.idU,
        idWish: req.body.idWish
    })
    add.save(function (err) {
        if (!err) {
            res.send('Added correctly!')
        } else {
            res.send(err)
        }
    })
})

//Obtener
router.post('/getlist', (req, res) => {
    wishModel.find({ idU: req.body.idU }, function (docs, err) {
        if (!err) {
            res.send(docs)
        } else {
            res.send(err)
        }
    })
})

//Borrar
router.post('/deletewish', (req, res) => {
    wishModel.findOneAndDelete({ idWish: req.body.idWish }, (err) => {
        if (!err) {
            res.send('Deseo borrado correctamente')
        } else {
            res.send(err)
        }
    })
})