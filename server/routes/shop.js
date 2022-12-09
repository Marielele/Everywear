const express = require('express');
const router = express.Router();

const mongoose = require('mongoose');
const schema = mongoose.Schema;

const shopSchema = new schema({
    nombre: String,
    descripcion: String,
    idTienda: String,
    idU: String
})

const shopModel = mongoose.model('shops', shopSchema)

module.exports = router

//Crear
router.post('/createshop', (req, res) => {
    const newShop = new shopModel({
        nombre: req.body.nombre,
        descripcion: req.body.descripcion,
        idTienda: req.body.idTienda,
        idU: req.body.idU
    })
    newShop.save(function (err) {
        if (!err) {
            res.send('Shop created!')
        } else {
            res.send(err)
        }
    })
})