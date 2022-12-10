const express = require('express');
const router = express.Router();

const mongoose = require('mongoose');
const schema = mongoose.Schema;

const paySchema = new schema({
    tarjeta: String,
    fechaVencimiento: String,
    cvv: String,
    idTarjeta: String,
    idU: String
})

const payModel = mongoose.model('paymethods', paySchema);

module.exports = router;

//Crear
router.post('/createpay', (req, res) => {
    const newPay = new payModel({
        tarjeta: req.body.tarjeta,
        fechaVencimiento: req.body.fechaVencimiento,
        cvv: req.body.cvv,
        idTarjeta: req.body.idTarjeta,
        idU: req.body.idU
    })
    newPay.save(function (err) {
        if (!err) {
            res.send('Paymethod added!')
        } else {
            res.send(err)
        }
    })
})

//Obtener
router.get('/getpays/:id', (req, res) => {
    const idUser = req.params.id;
    payModel.find({ idU: idUser }, function(docs, err){
        if (!err) {
            res.send(docs)
        } else {
            res.send(err)
        }
    })
})

//Actualizar

//Borrar