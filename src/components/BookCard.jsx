import React from 'react'
import { Link } from "react-router-dom";

function BookCard(props) {
  return (
    <div>
        <Link to={`/books/${props.id}`}>
        <img src={props.image} />
        <h5>{props.title}</h5>
        <p>{props.author}</p>
        <p>{props.gender}</p>
        </Link>

    </div>
  )
}

export default BookCard