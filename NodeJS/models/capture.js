const mongoose = require('mongoose');

var Capture = mongoose.model('Capture', {
    date: {type: String},
    time: {type: String},
    voltage: {type: Number}
});

module.exports = {Capture};