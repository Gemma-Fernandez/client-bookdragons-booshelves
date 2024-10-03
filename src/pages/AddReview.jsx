import axios from "axios"
import { useState, useEffect } from "react";
import {useNavigate} from "react-router-dom"
import FloatingLabel from 'react-bootstrap/FloatingLabel';
import Form from 'react-bootstrap/Form';

function AddReview() {
  const navigate = useNavigate()

  const [userName, setUserName]= useState("")
  const [bookTitle, setBookTitle] = useState("")
  const [bookPages, setBookPages] = useState(0)
  const [comment, setComment] = useState("")
  const [progress, setProgress] = useState(0)
  
  useEffect(()=>{
    axios.get(`${import.meta.env.VITE_SERVER_URL}/reviews`)
    .then((response)=>{
      setUserName(response.data.userName)
      setBookTitle(response.data.bookTitle)
      setBookPages(response.data.bookPages)
      setComment(response.data.comment)
      setProgress(response.data.progress)
    })
    .catch((error)=>{
      console.log(error)
    })
  }, [])

  const handleSubmit = async (event) => { 
    event.preventDefault()

    const newReview = {
      userName,
      bookTitle,
      bookPages: Number(bookPages),
      comment,
      progress: Number(progress)
    }

    try{
      await axios.post(`${import.meta.env.VITE_SERVER_URL}/reviews`, newReview)
      navigate("/")
    }catch (error){
      console.log(error)
    }
    console.log("pulsando")
  }

  
  return (
    <div>
      
     <form onSubmit={handleSubmit} className="form">
      <FloatingLabel controlId="floatingTextarea" label="Username" className="mb-3"> 
        <Form.Control
          placeholder="Username"
          type="text"
          value={userName}
          onChange={(event) => setUserName(event.target.value)}
          />
      </FloatingLabel>

      <FloatingLabel controlId="floatingTextarea" label="Title" className="mb-3"> 
        <Form.Control
          placeholder="Title"
          type="text"
          value={bookTitle}
          onChange={(event) => setBookTitle(event.target.value)}
          />
      </FloatingLabel>

      <FloatingLabel controlId="floatingTextarea" label="Pages" className="mb-3"> 
        <Form.Control
          placeholder="Pages"
          type="text"
          value={bookPages}
          onChange={(event) => setBookPages(event.target.value)}
          />
      </FloatingLabel>

      <FloatingLabel controlId="floatingTextarea" label="Progress" className="mb-3"> 
        <Form.Control
          placeholder="How many pages have you read?"
          type="text"
          value={progress}
          onChange={(event) => setProgress(event.target.value)}
          />
      </FloatingLabel>

      <FloatingLabel controlId="floatingTextarea" label="Comment" className="mb-3"> 
          <Form.Control 
            as="textarea"
            type="text"
            placeholder="Leave a comment here!"
            value={comment}
            onChange={(event) => setComment(event.target.value)}
            style={{height: '100px'}}
            />
      </FloatingLabel>

        <button onClick={handleSubmit} className='btn-authorD' type="submit">Post!</button>
        </form>


    </div>
  )
}

export default AddReview