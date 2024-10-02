import axios from "axios"
import {useState, useEffect} from "react"
import AuthorCard from "../components/AuthorCard"

function AuthorsList() {
  
  const [allAuthors, setAllAuthors] = useState([])
  
  useEffect(() => {
    axios.get(`${import.meta.env.VITE_SERVER_URL}/authors`)
    .then ((response) =>{
      
      setAllAuthors(response.data)
    })
    .catch ((error) => {
      console.log(error)
    })
    
  }, [])
  
  return (
    <div>
      <ul>
        {allAuthors.map((eachAuthor) => {
          return (
            <>
              <AuthorCard allAuthors={allAuthors} {...eachAuthor}/>
            </>
          )
        })}
      </ul>


    </div>
  )
}

export default AuthorsList