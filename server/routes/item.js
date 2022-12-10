const express = require('express');
const router = express.Router();

const mongoose = require('mongoose');
const schema = mongoose.Schema;

const itemSchema = new schema({
    nombre: String,
    precio: String,
    descripcion: String,
    idProducto: String,
    idTienda: String,
    cantidadVendida: {
        type: Number,
        default: 0
    },
    idU: String
})

const itemModel = mongoose.model('items', itemSchema)

module.exports = router

//Crear
router.post('/createitem', (req, res) => {
    const newItem = new itemModel({
        nombre: req.body.nombre,
        precio: req.body.precio,
        descripcion: req.body.descripcion,
        idProducto: req.body.idProducto,
        idTienda: req.body.idTienda,
        idU: req.body.idU
    })
    newItem.save(function (err) {
        if (!err) {
            res.send('Item created!')
        } else {
            res.send(err)
        }
    })
})

//Obtener
router.post('/getstoreitems', (req, res) => {
    itemModel.find({ idTienda: req.body.idTienda }, function (docs, err) {
        if (!err) {
            res.send(docs)
        } else {
            res.send(err)
        }
    })
})

//Obtener stasdisticas de tienda
router.get('/getsolditems/:id', (req, res) => {
    const storeID = req.params.id;
    itemModel.find({ idTienda: storeID }, function(docs, err){
        if (!err) {
            res.send(docs)
        } else {
            res.send(err)
        }
    })
})

router.get('/getstoreitemstatistics/:id', (req, res) => {
    const storeID = req.params.id;
    itemModel.find({ idTienda: storeID }, function(docs, err){
        if (!err) {
            res.send(docs)
        } else {
            res.send(err)
        }
    })
})