import axios from "axios"
import { useEffect, useState } from "react"
import {useParams, Link} from "react-router-dom"
import Spinner from 'react-bootstrap/Spinner';



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
    return <Spinner animation="grow" />;
  }



  return (
    <div >
      <h3>Author details</h3>
      <div className="carticasAuthor">
        <div className="authorInfo">
        <h4>{authorToShow.fullName}</h4>
        <img src={authorToShow.image} style={{width:"200px"}}/>
        <p> {authorToShow.location}</p>
        </div>
        <p className="authorDes">{authorToShow.description}</p>
        <h4>Books written by the author: </h4>
        <div className="imagesBA">
        {authorToShow.books.map((eachBook)=>{
          return(
            <div >
              <Link to={`/books/${eachBook.id}`}>
            <img  src={eachBook.image} style={{width:"150px", margin: "8px"}}/>
            </Link>
            </div>
          )
        })}
        </div>
      </div>
      <div className="edit-author-btn">
        <Link to={`/authors/${params.authorId}/editAuthor`}>
          <button className="btn-authorD" >Edit Author</button>
         </Link>
      </div>


    </div>
  )
}

export default AuthorDetails