import { useState, useEffect } from "react";
import { useParams, useNavigate } from "react-router-dom";
import axios from "axios";
import FloatingLabel from 'react-bootstrap/FloatingLabel';
import Form from 'react-bootstrap/Form';
import Spinner from 'react-bootstrap/Spinner';

function AddBook() {
  const [allBooks, setAllBooks] = useState(null);
  
  const navigate= useNavigate()

  const [title, setTitle] = useState("");
  const [author, setAuthor] = useState("");
  const [pages, setPages] = useState(0);
  const [published, setPublished] = useState(0);
  const [genre, setGenre] = useState("");
  const [image, setImage] = useState("");
  const [summary, setSummary] = useState("");
  const [rating, setRating] = useState(0);
  const [isASerie, setIsASerie] = useState(false);

  const [fullName, setFullName] = useState("")
  const [location, setLocation ] = useState("");
  const [description, setDescription] = useState("");
  const [picture, setPicture] = useState("");
  


  useEffect(() => {
    axios
      .get(`${import.meta.env.VITE_SERVER_URL}/books`)
      .then((response) => {
        setAllBooks(response.data);
      })
      .catch((error) => {
        console.log(error);
      });
  }, []);

  const handleSubmit = async (event) => {
    event.preventDefault();

      //recopilar data del nuevo libro
    const newBook = {
      title,
      image,
      author,
      summary,
      pages: Number(pages),
      published: Number(published),
      genre,
      rating: Number(rating),
    };
    
    const newAuthor ={
      fullName,
      location,
      description,
      image
    }

    try{
      
      const authorResponse= await axios.post(`${import.meta.env.VITE_SERVER_URL}/authors`, newAuthor)
      const authorName= authorResponse.data.fullName
      const authorId = authorResponse.data.id

      const newBookWithAutor= {...newBook, author: authorName, authorId: authorId}
      
      const bookResponse= await axios.post(`${import.meta.env.VITE_SERVER_URL}/books`, newBookWithAutor)
        setAllBooks(bookResponse)

        navigate("/books")
        
    } catch(error){
        console.log(error)
      }
  };


  if (allBooks === null) {
    return <Spinner animation="grow" />;
  }

    return (
      <div>
        <h3>Add a new interesting book!</h3>

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
            value={fullName}
            onChange={(event) => setFullName(event.target.value)}
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
            placeholder="Leave a comment here"
            value={summary}
            onChange={(event) => setSummary(event.target.value)}
            style={{height: '100px'}}
            />
            </FloatingLabel>

          <FloatingLabel controlId="floatingSelect" label="Rating" className="mb-3">
            <Form.Select onChange={(event) => setRating(event.target.value)} aria-label="Floating label select example">
              <option>Choose your rating!</option>
              <option value="1">⭐</option>
              <option value="2">⭐⭐</option>
              <option value="3">⭐⭐⭐</option>
              <option value="4">⭐⭐⭐⭐</option>
              <option value="5">⭐⭐⭐⭐⭐</option>
            </Form.Select>
          </FloatingLabel>
          
          <button className='btn-authorD' type="submit">Add Book 📚</button>
        </form>
      </div>
    );
  }


export default AddBook;
