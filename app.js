const express = require('express');
const path = require('path');


const app = express();

// Routes
const Task = require('./routes/tasks');

app.use('/api/v1/tasks', Task);

const PORT = 5000;

app.use(express.static(path.join(__dirname, 'public')));

app.listen(PORT, () =>{
    console.log(`Server listining in port ${PORT}`)
})