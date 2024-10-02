import React from 'react'
import { Link } from "react-router-dom";


function BookCard(props) {
  
  return (
    <div className="bookCard-container">
        <Link to={`/books/${props.id}`} >
        <div className="bookCard-cover">
          <img src={props.image} style={{width:"200px"}}/>
        </div>

        <div className="bookCard-info">
          <h5>{props.title}</h5>
          <p>Author: {props.author}</p>
          <p>Genre: {props.genre}</p>
        </div>
         </Link>

    </div>
  )
}

export default BookCard