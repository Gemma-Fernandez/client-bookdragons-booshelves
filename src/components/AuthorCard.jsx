import {Link} from "react-router-dom"


function AuthorCard(props) {
  return (
    <div>
      <Link to={`/authors/${props.id}`}>
      <img src="../images/logo.png" />
      <h3>{props.fullName}</h3>
      </Link>
       
    </div>
  )
}

export default AuthorCard