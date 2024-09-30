import React from 'react'
import {useParams} from "react-router-dom"

function BookDetails(props) {
  
  const params= useParams()
  const idBooks= Number(params.bookId)
  console.log("params: ",params.id)
  
  const foundBook= props.allBooks.find((eachBook) => eachBook.id === idBooks);

  

  return (
    <div>
      <h2>{foundBook.title}</h2>
    </div>
  )
}

export default BookDetails