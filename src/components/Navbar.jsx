import { Link } from "react-router-dom";

const Navbar = () => {
    return (
        <nav>
            <Link to="/">Home</Link>
            <Link to="/about">About</Link>
            <Link to="/coctail">Coctail</Link>
            <Link to="/newsletter">Newsletter</Link>
        </nav>
    );
};

export default Navbar;
