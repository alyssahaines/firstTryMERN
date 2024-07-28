const express = require('express');
const Student = require('../models/studentModel');
const route = express.Router();

route.get('/names', async (req, res) => {
    try {
        const stud = await Student.find();
        res.json(stud);
    }
    catch (err) {
        res.status(500).json({message: err.message});
    }

}
);

route.post('/names', async (req, res) => {
    const stud = new Student({
       first: req.body.first
    });
    try {
        const studentAdd = await stud.save();
        res.json(studentAdd);
    }
    catch (err){
        res.status(500).json({message: err.message});
    }

} 

);

module.exports = route;

