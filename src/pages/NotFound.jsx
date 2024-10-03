import dragon from "../images/toothless.gif"
import { Link } from "react-router-dom";
import fire from "../images/fire-flame.gif"

function NotFound() {
  return (
    <div className="notFound-container"> 
        <h3>Something went wrong!</h3>
        <img src={dragon} alt="gif-dragon" />
        <br />
        <Link to={"/"}>
        <button className="button-container">
          <img src={fire} alt="" />
          </button>
        </Link>
        <br />
          <p className="read-the-docs">Go home!</p>
    </div>
  )
}

export default NotFound