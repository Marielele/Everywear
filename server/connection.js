const mongoose = require('mongoose');
mongoose.connect('mongodb://127.0.0.1:27017/everywear');

const bd = mongoose.connection;
bd.on('connected', () => {
    console.log('Succesfull connection to database')
})

bd.on('error', () => {
    console.log('Connection error :(')
})

module.exports = mongoose