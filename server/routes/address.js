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
    if (newAdd.calle && newAdd.numero && newAdd.colonia && newAdd.codigoP && newAdd.municipio && newAdd.estado && newAdd.idU){
        newAdd.save(function (err) {
            if (!err) {
                res.send('Shipping address added!')
            } else {
                res.send(err)
            }
        })
    } else {
        res.send('Faltan datos')
    }
})

//Obtener
router.post('/getaddresses', (req, res) => {
    shipAddressModel.find({ idU: req.body.idU }, function(docs, err){
        if (!err) {
            res.send(docs)
        } else {
            res.send(err)
        }
    })
})

//Borrar
router.post('/deleteaddress', (req, res) => {
    shipAddressModel.findOneAndDelete({ idAddress: req.body.idAddress, idU: req.body.idU }, (err) => {
        if(!err){
            res.send('Address deleted!')
        }else{
            res.send(err)
        }
    })
})