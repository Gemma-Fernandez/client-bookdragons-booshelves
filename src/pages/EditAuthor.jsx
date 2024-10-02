import React from 'react'
import axios from "axios";
import { useState, useEffect } from "react";
import {useParams, useNavigate} from "react-router-dom"
import FloatingLabel from 'react-bootstrap/FloatingLabel';
import Form from 'react-bootstrap/Form';

function EditAuthor() {
  const navigate= useNavigate()

  const params = useParams()

  const [fullName, setFullName] = useState("");
  const [location, setLocation] = useState("");
  const [description, setDescription] = useState(0);
  const [image, setImage] = useState("");


  useEffect (()=>{
    axios.get(`${import.meta.env.VITE_SERVER_URL}/authors/${params.authorId}`)
    .then((response)=> {
      setFullName(response.data.fullName)
      setLocation(response.data.location)
      setDescription(response.data.description)
      setImage(response.data.image)  
    })
    .catch((error)=>{
      console.log(error)
    })
  }, [])

  const handleSubmit = async (event) => {
    event.preventDefault();

      //recopilar data del autor a editar
    const editAuthor = {
      fullName,
      image,
      location,
      description,    
    };
    try{
        await axios.put(`${import.meta.env.VITE_SERVER_URL}/authors/${params.authorId}`, editAuthor)
         
 
         navigate(`/authors/${params.authorId}`)
         
     } catch(error){
         console.log(error)
       }
   };

  return (
    <div>
         <h3>Edit the Author!</h3>
         <form onSubmit={handleSubmit}>
      <FloatingLabel controlId="floatingTextarea" label="FullName" className="mb-3"> 

      <Form.Control
        placeholder="FullName"
        type="text"
        value={fullName}
        onChange={(event) => setFullName(event.target.value)}
        />
        </FloatingLabel>
        <FloatingLabel controlId="floatingTextarea" label="Image" className="mb-3"> 
      <Form.Control
        placeholder ="Image"
        type="text"
        value={image}
        onChange={(event) => setImage(event.target.value)}
        />
       </FloatingLabel>

        <FloatingLabel controlId="floatingTextarea" label="Location" className="mb-3">
      <Form.Control
        placeholder="Location"
        type="text"
        value={location}
        onChange={(event) => setLocation(event.target.value)}
        />
           </FloatingLabel>    

           <FloatingLabel controlId="floatingTextarea" label="Description" className="mb-3"> 
        
      <Form.Control 
        as="textarea"
        type="text"
        placeholder="Description"
        value={description}
        onChange={(event) => setDescription(event.target.value)}
        style={{height: '100px'}}
        />
        </FloatingLabel>
      </form>
      <button onClick={handleSubmit} type="submit">Add Author</button>
    </div>
  )
}

export default EditAuthor