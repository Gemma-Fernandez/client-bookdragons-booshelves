import axios from "axios";
import { useEffect, useState } from "react";
import BookCard from "../components/BookCard"


function BooksList() {
  
    const[ allBooks, setAllBooks]=useState([])
  

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
                <BookCard allBooks={allBooks} {...eachBook}/>
               
               
            )
        })}
      
    </div>
  )
}

export default BooksList