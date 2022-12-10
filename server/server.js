const express = require('express');
const app = express();

const bd = require('./connection');

const userRoutes = require('./routes/user');
const payRoutes = require('./routes/paymethod');
const addressRoutes = require('./routes/address');
const shopRoutes = require('./routes/shop');
const itemRoutes = require('./routes/item')

const bodyParser = require('body-parser');

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended:'true'}));

app.use('/api/user', userRoutes);
app.use('/api/paymethod', payRoutes);
app.use('/api/address', addressRoutes);
app.use('/api/shop', shopRoutes);
app.use('/api/item', itemRoutes)

app.get('/', (req, res) => {
    res.end('Server running...');
})

app.listen(5000, function(){
    console.log('Server is currently working!');
})