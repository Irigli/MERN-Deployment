import React from 'react'
import { useState } from 'react'
import axios from 'axios'
import { Link, useNavigate } from 'react-router-dom';

const Createview = (props) => {
    const {pet, setPet} = props;
    const[name, setName] = useState("");
    const[type, setType] = useState ("");
    const[description, setDescription] = useState("");
    const[skill1, setSkill1] = useState("");
    const[skill2, setSkill2] = useState("");
    const[skill3, setSkill3] = useState("");
    const[beErrors, setBeErrors] = useState("")
    const navigate = useNavigate();

    const onSubmitHandler = (e)=>{
        e.preventDefault();
        axios.post('http://localhost:8000/api/petshelter', {
           name,
           type,
           description,
           skill1,
           skill2,
           skill3
        })
        .then(res=>{
            console.log(res);
            navigate("/");
            console.log(res.data);
            setPet([...pet, res.data]);
        })
        .catch((err)=> {
          console.log(err.response.data.err.errors)
          setBeErrors(err.response.data.err.errors)
        })
    }


  return (
    <div className='col-6 mx-auto'>
        <h1>Pet Shelter</h1>
        <Link to={"/"}>back to home</Link>
        <h3>Know a pet needing a home?</h3>
        <form onSubmit={onSubmitHandler}>
            <label className='form-label'>Name</label>
            <input type="text" onChange={(e)=>setName(e.target.value)}/><br></br>
            {beErrors? <span style={{color: 'red'}}>*{beErrors.name.message}</span>:null}<br/>
            <label className='form-label'>Type</label>
            <input type="text" onChange={(e)=>setType(e.target.value)}/><br></br>
            {beErrors ? <span style={{color: 'red'}}>*{beErrors.type.message}</span>: null}<br/>
            <label className='form-label'>Description</label>
            <input type="text" onChange={(e)=>setDescription(e.target.value)}/><br></br>
            {beErrors ? <span style={{color: 'red'}}>*{beErrors.description.message}</span>: null}<br/>
            <label className='form-label'>Skill1</label>
            <input type="text" onChange={(e)=>setSkill1(e.target.value)}/><br></br>
            <label className='form-label'>Skill2</label>
            <input type="text" onChange={(e)=>setSkill2(e.target.value)}/><br></br>
            <label className='form-label'>Skill3</label>
            <input type="text" onChange={(e)=>setSkill3(e.target.value)}/><br></br>
            <button className='form-label'>Add Pet</button>
        </form>
    </div>
  )
}

export default Createview;