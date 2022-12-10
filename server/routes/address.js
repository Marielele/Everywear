const express = require('express');
const router = express.Router();

const mongoose = require('mongoose');
const schema = mongoose.Schema;

const shipAddressSchema = new schema({
    calle: String,
    numero: String,
    colonia: String,
    codigoP: String,
    municipio: String,
    estado: String,
    idAddress: String,
    idU: String
})

const shipAddressModel = mongoose.model('addresses', shipAddressSchema);

module.exports = router;

//Crear
router.post('/createaddress', (req, res) => {
    const newAdd = new shipAddressModel({
        calle: req.body.calle,
        numero: req.body.numero,
        colonia: req.body.colonia,
        codigoP: req.body.codigoP,
        municipio: req.body.municipio,
        estado: req.body.estado,
        idAddress: req.body.idAddress,
        idU: req.body.idU
    })
    newAdd.save(function (err) {
        if (!err) {
            res.send('Shipping address added!')
        } else {
            res.send(err)
        }
    })
})

//Obtener

router.get('/getadresses/:id', (req, res) => {
    const idUser = req.params.id;
    shipAddressModel.find({ idU: idUser }, function(docs, err){
        if (!err) {
            res.send(docs)
        } else {
            res.send(err)
        }
    })
})