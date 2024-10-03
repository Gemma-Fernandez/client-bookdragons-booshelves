import {useEffect, useState} from "react"
import axios from "axios"
import BookCard from "./BookCard"
import { Link, useParams } from "react-router-dom"
import Spinner from 'react-bootstrap/Spinner'

function SearchBarResults({searchValue}) {

console.log("searchValue", searchValue)
const [allBooks, setAllBooks] = useState([])
const params = useParams()
console.log("params", params)


useEffect(()=>{
  getData()
}, [])

const getData= async ()=> {
  try {
    const response = await axios.get(`${import.meta.env.VITE_SERVER_URL}/books`)
    setAllBooks(response.data)
  } catch (error) {
    console.log(error)
  }
};
if (allBooks === null){
  return <Spinner animation="grow" />;
}

  return (
    <div>
      <h3>Search Results</h3>

      <div className="bookList-container">
      {allBooks
      .filter((eachBook)=>{
        return eachBook.title.toLowerCase().includes(searchValue.toLowerCase()) ||
        eachBook.author.toLowerCase().includes(searchValue.toLowerCase()) ||
        eachBook.genre.toLowerCase().includes(searchValue.toLowerCase())
      })
      .map((eachBook =>{
        return (
          <div className="bookCard-container">
          <Link to={`/books/${eachBook.id}`}>
          <img src={eachBook.image} style={{width:"200px", borderRadius:"20px", boxShadow: "5px 5px 15px 5px #00000095", marginBottom: "25px"}}/>
          <h4>{eachBook.title}</h4>
          </Link>

          <Link to={`/authors/${eachBook.id}`}>
          <p>Author: {eachBook.author}</p>
          </Link>
          <p>Genre: {eachBook.genre}</p>
          </div>
        )
      }))}
      </div>

    </div>
  )
}

export default SearchBarResults