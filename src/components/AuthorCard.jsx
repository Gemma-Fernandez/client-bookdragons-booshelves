import {Link} from "react-router-dom"
import AuthorDetails from "./AuthorDetails"

function AuthorCard(props) {
  return (
    <div className="authorCard-container">
      <Link to={`/authors/${props.id}`} element={<AuthorDetails/>}>
      <img  className="authorImg" src={props.image}/>
      <h4 className="authorCard-info" >{props.fullName}</h4>
      </Link>
       
    </div>
  )
}

export default AuthorCard