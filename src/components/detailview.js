import React, { useEffect, useState } from 'react'
import axios from 'axios';
import {Link, useParams, useNavigate} from "react-router-dom";


const Detailview = (props) => {
    const [pet, setPet] = useState({})
    const {id, removeFromDom} = useParams(); 
    const [count, setCount] = useState(0);
    
    const navigate = useNavigate();
    useEffect(() => {
        axios.get("http://localhost:8000/api/petshelter/" + id)
            .then( res => {
                console.log(res.data);
                setPet(res.data);
            })
            .catch( err => console.log(err) );
    }, []);

    const deletePet = (petId)=> {
        axios.delete('http://localhost:8000/api/petshelter/' + petId)
        .then(res => {
            removeFromDom(petId);
        })
        .catch(err=> console.log(err))
    }

    const like = ()=> {
        setCount(count + 1);
    };

    return (
        <div className='col-6 mx-auto text-center'>
            <h1>Pet Shelter</h1>
            <Link to={"/"}>back to home</Link>
            <h3 >Details about: {pet.name}</h3>
            <button onClick={(e)=>{deletePet(pet._id)}} className="btn btn-success">Adopt {pet.name}</button>
            <div>
                <h3>Pet Type: {pet.type}</h3>
                <h3>Description: {pet.description}</h3>
                <h3>Skills: {pet.skill1}<br/>{pet.skill2}<br/>{pet.skill3}</h3>
            </div>
            <button onChlick={like}>Like</button> <p>{count} likes</p>
        </div>
    );
}
export default Detailview;