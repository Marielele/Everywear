const mongoose = require('mongoose');
mongoose.connect('mongodb://localhost:27017/PW2');

const bd = mongoose.connection;
bd.on('connected', () => {
    console.log('Succesfull connection to database')
})

bd.on('error', () => {
    console.log('Connection error :(')
})

module.exports = mongoose