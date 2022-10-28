import {NavLink} from "react-router-dom";

export default function NavBar() {
  return (

    <div>
    <NavLink to="/">Home</NavLink>
    <NavLink to="/category">Category</NavLink>
    <NavLink to="/item">Item</NavLink>
    </div>
  )
}
