const mongoose = require('mongoose');

const studentMod = new mongoose.Schema( {
first:    { type: String}
}
);

module.exports = mongoose.model('Student',studentMod);