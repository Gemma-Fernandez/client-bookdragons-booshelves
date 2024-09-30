import axios from "axios";
import BookCard from "../components/BookCard"
import {useState, useEffect} from "react"


function BooksList() {  
  
  

  const[ allBooks, setAllBooks] = useState([])

  useEffect(()=>{
    axios.get("http://localhost:5000/books")
    .then ((response) =>{
        
        setAllBooks(response.data)
    })
    .catch ((error) =>{
        console.log(error)

    })
}, [])
  
  return (
    <div>
      
        {allBooks.map((eachBook)=>{
            return (
                <BookCard key={eachBook.id} allBooks={allBooks} {...eachBook}/>
               
               
            )
        })}
      
    </div>
  )
}

export default BooksList