const mongoose = require('mongoose');

const flightSchema = new mongoose.Schema({
    airline: { type: String,enum: ['American', 'Southwest'] },
    airport: { type: String, enum: ['AUS', 'DFW', 'DEN', 'LAX', 'SAN'], default: 'DEN' },
    flightNo: { type: Number, min: 0, max: 99 },
    departs: { type: Date, default: Date.now + 365 },
}
,{})

module.exports = mongoose.model('Flight', flightSchema);