const mongoose = require('mongoose');
const express = require('express');
const cors = require('cors');
const app = express();
const port = 5000;

app.use(express.json());
app.use(cors());

mongoose.connect('mongodb://localhost/classroom', {useNewURLParses: true, useUnifiedTopology:true});
const db = mongoose.connection;
db.on('error', (error) => console.error(error));
db.once('open', () => console.log('Connected to Database'));

const studentRouter = require('./routes/studentRoutes');
app.use('/api/studentRoutes', studentRouter);

app.listen(port, () => {
console.log('Server running on port');
});