const express = require('express');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');
const config = require('./config/dev');
const FakeDb = require('./fake-db')

const workshopRoutes = require('./routes/workshops');
const userRoutes = require('./routes/users');

mongoose.connect(config.DB_URI, { useNewUrlParser: true, useUnifiedTopology: true }).then(() => {
    const fakeDb = new FakeDb();
    fakeDb.seedDb();
});

const app = express();

app.use(bodyParser.json());

app.use('/api/v1/workshops', workshopRoutes);
app.use('/api/v1/users', userRoutes);

const PORT = process.env.PORT || 3001;

app.listen(PORT, function(){
    console.log('I am running');
    console.log(PORT);
});