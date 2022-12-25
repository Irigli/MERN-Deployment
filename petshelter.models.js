const mongoose = require('mongoose')
const uniqueValidator = require('mongoose-unique-validator')

const  PetShelterSchema = new mongoose.Schema({
    name: {type:String,
    required:[true, "Name of the pet is required"],
    minLength:[3, "Name can't be las than 3 charts"],
    unique:true
},
    type: {type:String,
    required:[true, "Type of the pet is required"],
    minLength:[3, "Type can't be las than 3 charts"]
},
    description: {type:String,
    required:[true, "Description is required"],
    minLength:[3, "Description can't be las than 3 charts"]
},
    skill1: {type:String},
    skill2: {type:String},
    skill3: {type:String}

}, {timestamps: true})
PetShelterSchema.plugin(uniqueValidator);
module.exports = mongoose.model('PetShelter', PetShelterSchema);

