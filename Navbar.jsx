import { Link } from "react-router-dom";

function Navbar() {
  return (
    <nav className="navbar">
      <h2>"EAT SMILE, REPEAT!"</h2>
      <div>
        <Link to="/">Home</Link>
        <Link to="/register">Register</Link>
        <Link to="/menu">Menu</Link>
        <Link to="/review">Review</Link>
      </div>
    </nav>
  );
}

export default Navbar;