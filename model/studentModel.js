const students = require('mongoose');

const studentMod = new students.Schema( {
first:    { type: String} ,
second: {type: String} 
}
);

module.export = student.model('student',studentMod);