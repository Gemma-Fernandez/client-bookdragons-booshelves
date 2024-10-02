import React from 'react'
import {useState, useEffect} from "react"
import axios from "axios";
import BookCard from "../components/BookCard"

function FiveStars() {
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
    <div>
      {allBooks.filter((eachBook)=>{
            if(eachBook.rating === 5){
              return true
            }
          })
          .map((eachBook)=>{
            return(
              <BookCard key={eachBook.id} allBooks={allBooks} {...eachBook}/>
           )
          })}
    </div>
  )
}

export default FiveStars