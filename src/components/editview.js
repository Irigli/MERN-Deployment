import React, { useEffect, useState } from 'react'
import axios from 'axios';
import { useNavigate, useParams } from "react-router-dom";
import { Link } from 'react-router-dom';
const Editview = (props) => {
    const { id  } = useParams();
    const[name, setName] = useState("");
    const[type, setType] = useState ("");
    const[description, setDescription] = useState("");
    const[skill1, setSkill1] = useState("");
    const[skill2, setSkill2] = useState("");
    const[skill3, setSkill3] = useState("");
    const{beErrors, setBeErrors} = useState("")
    const navigate = useNavigate();
    

    useEffect(() => {
        axios.get('http://localhost:8000/api/petshelter/' + id)
            .then(res => {
                setName(res.data.name);
                setType(res.data.type);
                setDescription(res.data.description);
                setSkill1(res.data.skill1);
                setSkill2(res.data.skill2);
                setSkill2(res.data.skill2);

            })
            .catch(err => console.log(err))
    }, [])
    const editPet = (e) => {
        e.preventDefault();
        axios.put('http://localhost:8000/api/petshelter/' + id, {
          name,
          type,
          description,
          skill1,
          skill2,
          skill3
        })
            .then(res => {
                console.log(res);
                navigate("/");
            })
            .catch((err)=> {
                console.log(err.response.data.err.errors)
                setBeErrors(err.response.data.err.errors)
              })
    }
    return (
        <div className='col-6 mx-auto'>
            <h1>Pet Shelter</h1>
            <Link to={'/'}>back to home</Link>
            <h3>Edit {name}</h3>
            <form onSubmit={editPet}>
                <p>
                    <label className='form-label'>Name</label><br />
                    <input type="text" 
                    name="name" 
                    value={name} 
                    onChange={(e) => { setName(e.target.value) }} />
                    {beErrors ? <span style={{color: 'red'}}>*{beErrors.name.message}</span>: null}<br/>
                </p>
                <p>
                    <label className='form-label'>Type</label><br />
                    <input type="text" 
                    name="type"
                    value={type} 
                    onChange={(e) => { setType(e.target.value) }} />
                    {beErrors ? <span style={{color: 'red'}}>*{beErrors.type.message}</span>: null}<br/>
                </p>
                <p>
                    <label className='form-label'>Description</label><br />
                    <input type="text" 
                    name="description"
                    value={description} 
                    onChange={(e) => { setDescription(e.target.value) }} />
                    {beErrors ? <span style={{color: 'red'}}>*{beErrors.description.message}</span>: null}<br/>
                </p>
                <p>
                    <label className='form-label'>Skill1</label><br />
                    <input type="text" 
                    name="skill1"
                    value={skill1} 
                    onChange={(e) => { setSkill1(e.target.value) }} />
                </p>
                <p>
                    <label className='form-label'>Skill2</label><br />
                    <input type="text" 
                    name="skill2"
                    value={skill2} 
                    onChange={(e) => { setSkill2(e.target.value) }} />
                </p>
                <p>
                    <label className='form-label'>Skill3</label><br />
                    <input type="text" 
                    name="skill3"
                    value={skill3} 
                    onChange={(e) => { setSkill3(e.target.value) }} />
                </p>
                <button className='form-label'>Edit Pet</button>
            </form>
        </div>
    )
}
export default Editview;