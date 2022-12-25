const PetshelterControllers = require('../controllers/petshelter.controllers');

module.exports = (app)=> {
    app.post('/api/petshelter', PetshelterControllers.createPet);
    app.get('/api/petshelter', PetshelterControllers.getAllPets);
    app.get('/api/petshelter/:id', PetshelterControllers.getPet);
    app.put('/api/petshelter/:id', PetshelterControllers.updatePet);
    app.delete('/api/petshelter/:id', PetshelterControllers.deletePet);
}