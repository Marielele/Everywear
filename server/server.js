const express = require('express');
const app = express();

const bd = require('./connection');

const userRoutes = require('./routes/user');

const bodyParser = require('body-parser');

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended:'true'}));

app.use('/api/user', userRoutes);

app.get('/', (req, res) => {
    res.end('Server running...');
})

app.listen(5000, function(){
    console.log('Server is currently working!');
})