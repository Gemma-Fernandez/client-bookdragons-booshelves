import {useParams} from "react-router-dom"


function AuthorDetails(props) {
  
  const params = useParams()
  
  const authorToDisplay = props.allAuthors.find ((eachAuthor) => {
    return eachAuthor.id === params.id
  })
  return (
    <div>
      <h3>Detalles del autor</h3>
      <div>
        <h4>{authorToDisplay.fullName}</h4>
        <p>{authorToDisplay.location}</p>
        <p>{authorToDisplay.description}</p>
        <p>Libros escritos por el autor</p>
      </div>


    </div>
  )
}

export default AuthorDetails