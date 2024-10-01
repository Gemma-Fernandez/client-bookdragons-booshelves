import { useState, useEffect } from "react";
import { useParams, useNavigate } from "react-router-dom";
import axios from "axios";

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

  useEffect(() => {
    axios
      .get("http://localhost:5000/books")
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
      rating,
      isASerie,
    };
    
    try{
      const response= await axios.post(`http://localhost:5000/books`, newBook)
        setAllBooks(response)

        navigate("/books")
        
    } catch(error){
        console.log(error)
      }

 /*    const clone = [...allBooks];
    clone.unshift(newBook);
    setAllBooks(clone);*/
  };


  if (allBooks === null) {
    return <h3>... loading</h3>;
  }

    return (
      <div>
        <h3>Add a new interesting book!</h3>

        <form onSubmit={handleSubmit}>
          <label>Title: </label>
          <input
            placeholder="The coolest one"
            type="text"
            value={title}
            onChange={(event) => setTitle(event.target.value)}
          />

          <label>Author: </label>
          <input
            placeholder="The best one"
            type="text"
            value={author}
            onChange={(event) => setAuthor(event.target.value)}
          />

          <label>Cover: </label>
          <input
            placeholder="Insert URL here"
            type="text"
            value={image}
            onChange={(event) => setImage(event.target.value)}
          />

          <label>Pages: </label>
          <input
            placeholder="680"
            type="text"
            value={pages}
            onChange={(event) => setPages(event.target.value)}
          />

          <label>Published: </label>
          <input
            placeholder="2020"
            type="text"
            value={published}
            onChange={(event) => setPublished(event.target.value)}
          />

          <label>Genre: </label>
          <input
            placeholder="Drama"
            type="text"
            value={genre}
            onChange={(event) => setGenre(event.target.value)}
          />

          <label>Summary: </label>
          <textarea
            name="summary"
            rows="10"
            placeholder="One upon a time..."
            type="text"
            value={summary}
            onChange={(event) => setSummary(event.target.value)}
          />

          <label>
            Rating
            <select name="rating">
              <option value="1">⭐</option>
              <option value="2">⭐⭐</option>
              <option value="3">⭐⭐⭐</option>
              <option value="4">⭐⭐⭐⭐</option>
              <option value="5">⭐⭐⭐⭐⭐</option>
            </select>
          </label>

          <label>Is it a part of a serie?</label>
          <input
            placeholder="No"
            type="text"
            value={isASerie}
            onChange={(event) => setIsASerie(event.target.value)}
          />
          <button type="submit">Add Book</button>
        </form>
      </div>
    );
  }


export default AddBook;
