const mongoose = require('mongoose');

var PassengerSchema = new mongoose.Schema({
    name: {type: String, required: [true,"Passenger's name is required"], minlength: [3,"Name must be more than 3 letters"]},
}, {timestamps: true});

mongoose.model('Passenger', PassengerSchema);

var RideSchema = new mongoose.Schema({
    driver: {type: String, required: [true,"Passenger's name is required"], minlength: [3,"Name should be more than 3 letters"]},
    cap: {type: Number, min: [1,"At least one is required"], max: [5,"Max number of occupants is 5"]},
    dest: {type: String, required: [true,"Destination name is required"], minlength: [3,"Destination name must be more than 3 letters"]},
    riders: [PassengerSchema]
    //check max len of array validation//
}, {timestamps: true});

mongoose.model('Ride', RideSchema);



