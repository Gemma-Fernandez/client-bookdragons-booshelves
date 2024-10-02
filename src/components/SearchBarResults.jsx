import {useEffect, useState} from "react"
import axios from "axios"
import BookCard from "./BookCard"
import { Link, useParams } from "react-router-dom"

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
}

  return (
    <div>
      <h2>Search Results</h2>
      {allBooks
      .filter((eachBook)=>{
        return eachBook.title.toLowerCase().includes(searchValue.toLowerCase()) ||
        eachBook.author.toLowerCase().includes(searchValue.toLowerCase()) ||
        eachBook.genre.toLowerCase().includes(searchValue.toLowerCase())
      })
      .map((eachBook =>{
        return (
          <div>
          <Link to={`/books/${eachBook.id}`}>
          <img src={eachBook.image} style={{width:"200px"}}/>
          <h3>{eachBook.title}</h3>
          </Link>

          <Link to={`/authors/${eachBook.id}`}>
          <p>Author: {eachBook.author}</p>
          </Link>
          <p>Genre: {eachBook.genre}</p>
          </div>
        )
      }))}

    </div>
  )
}

export default SearchBarResults