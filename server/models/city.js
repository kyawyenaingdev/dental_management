const mongoose = require('mongoose')

const Schema = mongoose.Schema

const CitySchema = new Schema({
    name: {
        type: String
    },
}, { timestamps: true })

const City = mongoose.model('City', CitySchema);
module.exports = { City }