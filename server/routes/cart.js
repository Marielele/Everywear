const express = require('express');
const router = express.Router();

const mongoose = require('mongoose');
const schema = mongoose.Schema;

const cartSchema = new schema({
    idObjCarrito: String,
    idU: String,
    nombre: String, // de objeto
    precio: String
})

const cartModel = mongoose.model('cartobjs', cartSchema)

module.exports = router

//Crear
router.post('/addToCart', (req, res) => {
    const newAdd = new cartModel({
        idObjCarrito: req.body.idObjCarrito,
        idU: req.body.idU,
        nombre: req.body.nombre,
        precio: req.body.precio
    })
    newAdd.save(function (err) {
        if (!err) {
            res.send('Item added! to cart')
        } else {
            res.send(err)
        }
    })
})

//Obtener
router.post('/getcart', (req, res) => {
    cartModel.find({ idU: req.body.idU }, function (docs, err) {
        if (!err) {
            res.send(docs)
        } else {
            res.send(err)
        }
    })
})

//Borrar
router.post('/deleteobj', (req, res) => {
    cartModel.findOneAndDelete({ idObjCarrito: req.body.idObjCarrito }, (err) => {
        if (!err) {
            res.send('Elemento de carrito borrado correctamente')
        } else {
            res.send(err)
        }
    })
})

router.post('/deleteallobjs', (req, res) => {
    cartModel.deleteMany({ idU: req.body.idU }, (err) => {
        if (!err) {
            res.send('Compra exitosa!')
        } else {
            res.send(err)
        }
    })
})
