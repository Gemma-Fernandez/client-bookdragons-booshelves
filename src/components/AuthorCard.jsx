import {Link} from "react-router-dom"
import AuthorDetails from "./AuthorDetails"

function AuthorCard(props) {
  return (
    <div>
      <Link to={`/authors/${props.id}`} element={<AuthorDetails/>}>
      <img src={props.image} style={{width:"200px"}}/>
      <h3>{props.fullName}</h3>
      </Link>
       
    </div>
  )
}

export default AuthorCard