const express = require('express');
const router = express.Router();

const mongoose = require('mongoose');
const schema = mongoose.Schema;

const employeSchema = new schema({
    nombreEmpleado: String,
    idTienda: String,
    idEmpleado: String,
    idU: String
})

const employeModel = mongoose.model('employees', employeSchema);

module.exports = router;

//Crear
router.post('/createemploye', (req, res) => {
    const newEmpleado = new employeModel({
        nombreEmpleado: req.body.nombreEmpleado,
        idTienda: req.body.idTienda,
        idEmpleado: req.body.idEmpleado,
        idU: req.body.idU
    })
    newEmpleado.save(function (err) {
        if (!err) {
            res.send('Employee added correctly!')
        } else {
            res.send(err)
        }
    })
})
