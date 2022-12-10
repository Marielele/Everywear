const express = require('express');
const router = express.Router();

const mongoose = require('mongoose');
const schema = mongoose.Schema;

const shopSchema = new schema({
    nombre: String,
    descripcion: String,
    idTienda: String,
    imgUrl: String,
    idU: String
})
shopSchema.methods.setImgUrl = function setImgUrl (filename){
    this.imgUrl = `http://localhost:3000/public/${filename}`
}

const shopModel = mongoose.model('shops', shopSchema)
const upload = require('../libs/storage')

module.exports = router

//Crear
router.post('/createshop', upload.single('txtImagen'), (req, res) => {
    var filename="";
    const newShop = new shopModel({
        nombre: req.body.txtNombre,
        descripcion: req.body.txtDescripcion,
        idTienda: req.body.idTienda,
        imgUrl: filename,
        idU: req.body.idU
    })
    if(req.file){
        newShop.setImgUrl(req.file.filename)
    }
    newShop.save(function (err) {
        if (!err) {
            res.send('Shop created!')
        } else {
            res.send(err)
        }
    })
})

//Obtener
router.get('/getshops', (req, res) => {
    shopModel.find({}, function (docs, err) {
        if (!err) {
            res.send(docs)
        } else {
            res.send(err)
        }
    })
})

router.post('/getmyshops', (req, res) => {
    shopModel.find({ idU: req.body.idU }, function (docs, err) {
        if (!err) {
            res.send(docs)
        } else {
            res.send(err)
        }
    })
})

router.post('/getstoredata', (req, res) => {
    shopModel.findOne({ idTienda: req.body.idTienda }, function (docs, err) {
        if (!err) {
            res.send(docs)
        } else {
            res.send(err)
        }
    })
})