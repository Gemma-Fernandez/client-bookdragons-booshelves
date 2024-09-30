import React from 'react'
import { Link } from "react-router-dom";


function BookCard(props) {
  
  return (
    <div>
        <Link to={`/books/${props.id}`} >
        <img src={props.image} style={{width:"200px"}}/>
        <h5>{props.title}</h5>
        <p>Author: {props.author}</p>
        <p>Genre: {props.genre}</p>
         </Link>

    </div>
  )
}

export default BookCard