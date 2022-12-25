const PetShelter = require('../models/petshelter.models');

module.exports.createPet = (req, res)=>{
    PetShelter.create(req.body)
    .then(pet => res.json(pet))
    .catch(err =>res.status(400).json({message: "Pet not added", err}));
}

module.exports.getAllPets = (req, res) => {
    PetShelter.find({})
        .then(pet => {
            console.log(pet);
            res.json(pet);
        })
        .catch(err => {
            console.log(err)
            res.json(err);
        })
}

module.exports.getPet = (req,res)=> {
    PetShelter.findOne({_id:req.params.id})
    .then(pet => res.json(pet))
    .catch(err=> console.log(err));
}

module.exports.updatePet = (req,res) =>{
    PetShelter.findOneAndUpdate({_id: req.params.id}, req.body, {new:true})
    .then(updatedPet => res.json(updatedPet))
    .catch(err =>res.status(400).json({message: "Pet not edited", err}));
}

module.exports.deletePet = (req,res) => {
    PetShelter.deleteOne({_id: req.params.id})
    .then(deleteConfirmation => res.json(deleteConfirmation))
    .catch(err=> res.json(err))
}