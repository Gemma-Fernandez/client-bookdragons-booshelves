import {Link} from "react-router-dom"
import AuthorDetails from "./AuthorDetails"

function AuthorCard(props) {
  return (
    <div className="authorCard-container">
      <Link to={`/authors/${props.id}`} element={<AuthorDetails/>}>
      <img  className="authorImg" src={props.image} />
      <h3 className="authorCard-info" >{props.fullName}</h3>
      </Link>
       
    </div>
  )
}

export default AuthorCard