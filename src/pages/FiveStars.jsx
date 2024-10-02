import React from 'react'
import {useState, useEffect} from "react"
import axios from "axios";
import BookCard from "../components/BookCard"
import Spinner from 'react-bootstrap/Spinner'

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

if (allBooks === null) {
  return <Spinner animation="grow" />;
}

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