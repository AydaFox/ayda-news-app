import { Link } from "react-router-dom";
import Topics from "./Topics";

const Nav = () => {
  return (
    <nav>
      <Link to="/" className="link">Home</Link>
      <Topics />
    </nav>
  );
};

export default Nav;
