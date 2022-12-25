import React, { useState } from 'react'
import Listview from '../components/listview';
const Main = (props) => {
    
    const [pet, setPet] = useState([]);

    const removeFromDom = petId => {
        setPet(pet.filter(pet => pet._id !== petId));
    }
    
    return (
        <div>
           <Listview pet={pet} setPet={setPet} removeFromDom={removeFromDom}/>
        </div>
    )
}
export default Main;