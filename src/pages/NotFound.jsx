import dragon from "../images/toothless.gif"
import { Link } from "react-router-dom";

function NotFound() {
  return (
    <div>
        <h3>Something went wrong!</h3>
        <img src={dragon} alt="gif-dragon" />
        <br />
        <Link to={"/"}>
        <button>Go back!</button>
        </Link>
    </div>
  )
}

export default NotFound