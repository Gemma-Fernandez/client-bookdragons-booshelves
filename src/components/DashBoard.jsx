import React from 'react'
import {useState, useEffect} from "react"
import axios from "axios";
import Carousel from 'react-bootstrap/Carousel';
import { Link } from 'react-router-dom';
import Spinner from 'react-bootstrap/Spinner'





function DashBoard() {

  const[ allBooks, setAllBooks] = useState([])

  useEffect(()=>{
    axios.get(`${import.meta.env.VITE_SERVER_URL}/books?limit=5`)
    .then ((response) =>{
        
        setAllBooks(response.data)
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
        <p>Welcome to a bookdragon's bookshelves!! Here you can find some of our favorite books and some that are on our TBR, but pleaese, be our guest and add more!! Like every dragon, we like to hoard our treasures!</p>
      </section>



        <h3>Five books with five stars</h3>
        <Carousel data-bs-theme="dark">
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

        <br />
        <br />
          <h4>Add a new book</h4>
          <Link to={"/addBook"}>
          <button> add book</button>
          </Link>
        
      </div>
  )
}

export default DashBoard