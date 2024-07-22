const express = require('express');
const student = require('.../models/studentModel');
const route = express.Router();

route.get('/', async (req, res) => {
    try {
        const stud = await student.find();
        res.json(stud);
    }
    catch (err) {
        res.status(500).json({message: err.message});
    }

}
);

route.post('/', async (req, res) => {
    const stud = new student({
       firstName: req.body.firstName,
       lastName: req.body.lastName
    });
    try {
        const studentAdd = await stud.save();
        res.json(studAdd);
    }
    catch {
        res.status(500).json({message: err.message});
    }

} 

);

module.export = student;

