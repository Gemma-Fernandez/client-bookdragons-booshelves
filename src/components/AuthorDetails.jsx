import axios from "axios"
import { useEffect, useState } from "react"
import {useParams, Link} from "react-router-dom"



function AuthorDetails() {
  
  const params = useParams()
  
  const [authorToShow, setAuthorToShow] = useState(null)

  useEffect(()=>{
    getData()
  },[])

  const getData = async ()=>{
    try{
      const response = await axios.get(`${import.meta.env.VITE_SERVER_URL}/authors/${params.authorId}?_embed=books`)
      setAuthorToShow(response.data)
    }catch (error){
      console.log(error)
    }
  }
  if (authorToShow === null){
    return (<h3>... loading</h3>)
  }



  return (
    <div>
      <h3>Detalles del autor</h3>
      <div>
        <h4>{authorToShow.fullName}</h4>
        <img src={authorToShow.image} style={{width:"200px"}}/>
        <p>Location: {authorToShow.location}</p>
        <p>Description: {authorToShow.description}</p>
        <p>Libros escritos por el autor: </p>
        {authorToShow.books.map((eachBook)=>{
          return(
            <div>
              <Link to={`/books/${eachBook.id}`}>
            <img src={eachBook.image} style={{width:"150px"}}/>
            </Link>
            </div>
          )
        })}
      </div>


    </div>
  )
}

export default AuthorDetails