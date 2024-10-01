import React from 'react'
import {useState, useEffect} from "react"
import axios from "axios";
import Carousel from 'react-bootstrap/Carousel';
import { Link } from 'react-router-dom';
import AddBook from '../pages/AddBook';




function DashBoard() {

  const[ allBooks, setAllBooks] = useState([])

  useEffect(()=>{
    axios.get("http://localhost:5000/books?limit=5")
    .then ((response) =>{
        
        setAllBooks(response.data)
    })
    .catch ((error) =>{
        console.log(error)

    })
}, [])

  

  return (
    <div>
      
        <Carousel data-bs-theme="dark">
          {allBooks.filter((eachBook)=>{
            if(eachBook.rating === 5){
              return true
            }
          })
          .map((eachBook)=>{
            return(
              <Carousel.Item>
                <img src={eachBook.image} alt="cover" style={{width:"200px"}}/>
              </Carousel.Item>
            )
          })}
        </Carousel>  

        <br />
        <br />
          <Link to={"/addBook"}>
          <button> add book</button>
          </Link>
        
      </div>
  )
}

export default DashBoard