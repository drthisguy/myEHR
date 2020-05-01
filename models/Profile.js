const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const ProfileSchema = new Schema({
    profileId: { type: String, required: true },
    firstName: {
        type: String,
        default: ''
    },
    lastName: {
        type: String,
        default: ''
    },
    nickname: {
        type: String,
        default: ''
    },
    addressOne: {
        type: String,
        default: ''
    },
    addressTwo: {
        type: String,
        default: ''
    },
    city: {
        type: String,
        default: ''
    },
    state: {
        type: String,
        default: ''
    },
    zip: {
        type: String,
        default: ''
    },
    country: {
        type: String,
        default: ''
    },
    phone: {
        type: String,
        default: ''
    },
    email: {
        type: String,
        default: ''
    },
    dob: {
        type: String,
        default: ''
    },
    bloodType: {
        type: String,
        default: ''
    },
    insurance: {
        type: String,
        default: ''
    },
    insNumber: {
        type: String,
        default: ''
    },
    rxBin: {
        type: String,
        default: ''
    },
    rxPcn: {
        type: String,
        default: ''
    },
    allergies: {
        type: String,
        default: ''
    },
    immunizations: {
        type: String,
        default: ''
    },
    notes: {
        type: String,
        default: ''
    },
    conditions: {
        type: Array,
        default: []
    }
})

const Profile = mongoose.model("Profile", ProfileSchema);

module.exports = Profile;