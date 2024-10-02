import axios from "axios";
import BookCard from "../components/BookCard"
import {useState, useEffect} from "react"


function BooksList() {  
  
  const[ allBooks, setAllBooks] = useState([])

  useEffect(()=>{
    axios.get(`${import.meta.env.VITE_SERVER_URL}/books`)
    .then ((response) =>{
        
        setAllBooks(response.data)
    })
    .catch ((error) =>{
        console.log(error)

    })
}, [])
  
  return (
    <div className="bookList-container">
      
        {allBooks.map((eachBook)=>{
            return (
              <BookCard className="bookCard" key={eachBook.id} allBooks={allBooks} {...eachBook}/>
               
               
            )
        })}
      
    </div>
  )
}

export default BooksList