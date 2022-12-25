import React, {useState, useEffect} from 'react'
import axios from 'axios';
import { Link } from 'react-router-dom';
const Listview = (props) => {
    const { removeFromDom, pet, setPet} = props;
    const [petList, setPetList] = useState("")
    
    useEffect(()=>{
    	axios.get("http://localhost:8000/api/petshelter")
    	.then((res)=>{
	    console.log(res.data);
        setPet(res.data);
	})
    	.catch((err)=>{
            console.log(err);
    	})
    }, [])
    
    return (
        <div className='col-6 mx-auto'>
            <h1>Pet Shellter</h1>
            <Link to={"/pets/new"}>add a pet to the shelter</Link>
            <h2>These pets are looking for a good home</h2>
            
            <table>
                    <tr>
                      <th>|     Name    |</th>
                      <th>|    Type     |</th>
                      <th>|   Actions  |</th>
                    </tr></table>
            {
                pet.map((pet, index)=>{
                return (
                    <tr key={index}>
                      <td>{pet.name}</td>
                      <td>{pet.type}</td>
                      <td><Link to={`/pets/${pet._id}`}>details</Link> |<Link to={`/pets/${pet._id}/edit`}>Edit</Link></td>
                    </tr>
                )
                })
            }
                    
                    
        </div>
    )
}
export default Listview;