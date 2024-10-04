import React from 'react'
import axios from "axios";
import { useState, useEffect } from "react";
import {useParams, useNavigate} from "react-router-dom"
import FloatingLabel from 'react-bootstrap/FloatingLabel';
import Form from 'react-bootstrap/Form';



function EditForm() {
  const navigate= useNavigate()

  const params = useParams()

  const [title, setTitle] = useState("");
  const [author, setAuthor] = useState("");
  const [pages, setPages] = useState(0);
  const [published, setPublished] = useState(0);
  const [genre, setGenre] = useState("");
  const [image, setImage] = useState("");
  const [summary, setSummary] = useState("");
  const [rating, setRating] = useState(0);

  useEffect (()=>{
    axios.get(`${import.meta.env.VITE_SERVER_URL}/books/${params.bookId}`)
    .then((response)=> {
      setTitle(response.data.title)
      setAuthor(response.data.author)
      setPages(response.data.pages)
      setPublished(response.data.publisher)
      setGenre(response.data.genre)
      setImage(response.data.image)
      setSummary(response.data.summary)
      setRating(response.data.rating)    
    })
    .catch((error)=>{
      console.log(error)
    })
  }, [])

  
  const handleSubmit = async (event) => {
    event.preventDefault();

      //recopilar data del libro a editar
    const editBook = {
      title,
      image,
      author,
      summary,
      pages: Number(pages),
      published: Number(published),
      genre,
      rating,
    };
    
    try{
       await axios.put(`${import.meta.env.VITE_SERVER_URL}/books/${params.bookId}`, editBook)
        

        navigate(`/books/${params.bookId}`)
        
    } catch(error){
        console.log(error)
      }
  };


  
  return (
    <div>
    <h3>Edit book!</h3>

    <form onSubmit={handleSubmit} className="form">
      <FloatingLabel controlId="floatingTextarea" label="Title" className="mb-3"> 

      <Form.Control
        placeholder="Title"
        type="text"
        value={title}
        onChange={(event) => setTitle(event.target.value)}
        />
        </FloatingLabel> 

        <FloatingLabel controlId="floatingTextarea" label="Author" className="mb-3">
      <Form.Control
        placeholder="Author"
        type="text"
        value={author}
        onChange={(event) => setAuthor(event.target.value)}
        />
           </FloatingLabel>

      <FloatingLabel controlId="floatingTextarea" label="Cover" className="mb-3"> 
      <Form.Control
        placeholder ="Cover"
        type="text"
        value={image}
        onChange={(event) => setImage(event.target.value)}
        />
       </FloatingLabel>

      <FloatingLabel controlId="floatingTextarea" label="Pages" className="mb-3">
      <Form.Control 
        placeholder ="Pages"
        type="text"
        value={pages}
        onChange={(event) => setPages(event.target.value)}
        />
      </FloatingLabel>

      <FloatingLabel controlId="floatingTextarea" label="Published" className="mb-3"> 
      <Form.Control
        placeholder ="Published"
        type="text"
        value={published}
        onChange={(event) => setPublished(event.target.value)}
        />
        </FloatingLabel>

      <FloatingLabel controlId="floatingTextarea" label="Genre" className="mb-3">
      <Form.Control
        type="text"
        placeholder="Genre"
        value={genre}
        onChange={(event) => setGenre(event.target.value)}
      />
        </FloatingLabel>

      <FloatingLabel controlId="floatingTextarea" label="Summary" className="mb-3"> 
        
      <Form.Control 
        as="textarea"
        type="text"
        placeholder="What's the book about"
        value={summary}
        onChange={(event) => setSummary(event.target.value)}
        style={{height: '100px'}}
        />
        </FloatingLabel>

      <FloatingLabel controlId="floatingSelect" label="Rating" className="mb-3">
        <Form.Select aria-label="Floating label select example">
          <option>Choose your rating!</option>
          <option value="1">⭐</option>
          <option value="2">⭐⭐</option>
          <option value="3">⭐⭐⭐</option>
          <option value="4">⭐⭐⭐⭐</option>
          <option value="5">⭐⭐⭐⭐⭐</option>
        </Form.Select>
      </FloatingLabel>

       
      <button className='btn-authorD' onClick={handleSubmit} type="submit">Edit Book 📚</button>
    </form>
  </div>
  )
}

export default EditForm