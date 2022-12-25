const mongoose = require('mongoose');

mongoose.connect("mongodb://localhost/PetShelter", {
    useNewUrlParser: true, 
    useUnifiedTopology: true,
})

.then(()=> console.log("Mongo DB is connected"))
.catch((err)=> console.log(err));