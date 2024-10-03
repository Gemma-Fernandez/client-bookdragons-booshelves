import React from 'react'
import {useState, useEffect} from "react"
import axios from "axios";
import Carousel from 'react-bootstrap/Carousel';
import { Link } from 'react-router-dom';
import Spinner from 'react-bootstrap/Spinner'
import ReviewComponent from "./ReviewComponent"


function DashBoard() {

  const[ allBooks, setAllBooks] = useState([])
  const [ allReviews, setAllReviews] = useState ([])
  useEffect(()=>{
    axios.get(`${import.meta.env.VITE_SERVER_URL}/books?limit=5`)
    .then ((response) =>{
        
        setAllBooks(response.data)
    })
    .catch ((error) =>{
        console.log(error)

    })

    //llamando a las reviews de los libros
    axios.get(`${import.meta.env.VITE_SERVER_URL}/reviews`)
    .then ((response) =>{
        
      setAllReviews(response.data)
  })
  .catch ((error) =>{
      console.log(error)

  })

}, [])

if (allBooks === null){
  return <Spinner animation="grow" />;
}

  return (
    <div>
      <section className="intro">
        <p>Welcome to a bookdragon's bookshelves!! 🐲 </p>
        <p>Here you can find some of our favorite books and some that are on our TBR, but pleaese, be our guest and add more!!</p>
        <p> Like every dragon, we like to hoard our treasures! 📚</p>
      </section>

        <h3>Five books with five stars</h3>
      <section className="carousel">
        <Carousel data-bs-theme="light">
          {allBooks.filter((eachBook)=>{
            if(eachBook.rating === 5){
              return true
            }
          })
          .map((eachBook)=>{
            return(
              <Carousel.Item>
                <Link to={`/books/${eachBook.id}`}>
                <img src={eachBook.image} alt="cover" style={{width:"200px"}}/>
                </Link>
              </Carousel.Item>
            )
          })}
        </Carousel>  
      </section>
      <section className="dashboard-btns">
            <Link to={"/addBook"}>
              <button> Add a book 📖</button>
            </Link>
            <Link to={"/reviews"}>
              <button>Post a Review ✨</button>
            </Link>
      </section>
          <h3>Reviews</h3>
        {allReviews.map((eachReview)=>{
          return (
          <ReviewComponent allReviews={allReviews} {...eachReview}/>
          )
        })}  

      </div>
  )
}

export default DashBoard