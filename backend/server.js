const mongoose = require('mongoose');
const express = require('express');
const cors = require('cors');
const app = express();
const port = 5001;

app.use(express.json());
app.use(cors());    

mongoose.connect('mongodb://localhost/classroom');
const db = mongoose.connection;
db.on('error', (error) => console.error('Error connecting to db',error));
db.once('open', () => console.log('Connected to Database'));

const studentRouter = require('./routes/studentRoutes');
app.use('/api', studentRouter);

app.get('/', (req,res) => {
res.send('API is running...');
});

app.listen(port, () => {
console.log('Server running on port http://localhost:${port}');
});