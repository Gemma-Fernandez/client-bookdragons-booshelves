import React from 'react'
import {useParams, useNavigate, Link} from "react-router-dom"
import {useState, useEffect} from "react"
import axios from "axios"
import Spinner from 'react-bootstrap/Spinner';



function BookDetails() {
  
  const params= useParams()
  const navigate= useNavigate()
  
  const [bookToShow, setBookToShow]= useState(null)
  const [isShowDelete, setIsShowDelete]= useState(false)
  
  useEffect(()=>{
    getData()
  }, [])

  const getData= async ()=> {
    try {
      const response = await axios.get(`${import.meta.env.VITE_SERVER_URL}/books/${params.bookId}?_expand=authorId`)
      setBookToShow(response.data)
      console.log("response.data", response.data)
    } catch (error) {
      console.log(error)
    }
  }

  const handleDelete = ()=> {
    axios.delete(`${import.meta.env.VITE_SERVER_URL}/books/${params.bookId}`)
    .then(()=>{
      navigate("/books")
    })
    .catch((error)=>{
      console.log(error)
    })
  };

  if (bookToShow === null){
    return <Spinner animation="grow" />;
  }

  let starEmojis;
  if (bookToShow.rating === 1){
    starEmojis = "⭐"
  } else  if (bookToShow.rating === 2){
    starEmojis = "⭐⭐"
  }else  if (bookToShow.rating === 3){
    starEmojis = "⭐⭐⭐"
  }else  if (bookToShow.rating === 4){
    starEmojis = "⭐⭐⭐⭐"
  }else  if (bookToShow.rating === 5){
    starEmojis = "⭐⭐⭐⭐⭐"
  }

  return (
    <div className="book-details">
      <h3>Book details</h3>

      
      <div className='book-info'>
        <img src={bookToShow.image} style={{width:"150px"}}/>

        <div className='book-info-text'>
          <h2>{bookToShow.title}</h2>
          <Link to={`/authors/${bookToShow.authorId}`}>
          <p>Author: {bookToShow.author.fullName}</p>
          </Link>
          <p>Pages: {bookToShow.pages}</p>
          <p>Published: {bookToShow.published}</p>
          <p>Genre: {bookToShow.genre}</p>
          <p>Rating: {starEmojis}</p>
        </div>
        
      </div>

      <div className='book-summary'>
        <p>"{bookToShow.summary}"</p>
     </div>
      
    <div className="dosBtn">
      <Link to={`/books/${params.bookId}/editBook`}>
      <button className='btn-authorD'>Edit</button>
      </Link>

      <button onClick={()=> setIsShowDelete(true)} className='btn-delete'>Delete</button>
      {isShowDelete && (
                  
            <div className='book-confirm-delete'>
              <p >Are you sure you want to <strong>delete </strong> the book? </p>
              <button className='btn-authorD' onClick={handleDelete}>Yes</button>
              <button className='btn-authorD' onClick={()=> setIsShowDelete(false)}>No</button>
            
            </div>
       
      )}
        </div>
    </div>
  )
}

export default BookDetails