const express = require('express');
const router = express.Router();

const mongoose = require('mongoose');
const schema = mongoose.Schema;

const commentSchema = new schema({
    contenido: String,
    fecha: {
        type: Date,
        default: Date.now
    },
    nombreUsuario: String,
    idComment: String,
    idU: String,
    idProducto: String,
    idTienda: String
})

const comment = mongoose.model('comments', commentSchema);

router.post('/createcomment', (req, res) => {
    const newComment = new comment({
        contenido: req.body.contenido,
        idProducto: req.body.idProducto,
        nombreUsuario: req.body.nombre,
        idComment: req.body.idComment,
        idTienda: req.body.idTienda,
        idU: req.body.idU
    })
    newComment.save(function (err) {
        if (!err) {
            res.send('Comment added!')
        } else {
            res.send(err)
        }
    })
})

router.get('/getInsideComments/:id', (req, res) => {
    const storeID = req.params.id;
    comment.find({ idTienda: storeID }, function(docs, err){
        if (!err) {
            res.send(docs.data)
        } else {
            res.send(err)
        }
    })
})


module.exports = router;