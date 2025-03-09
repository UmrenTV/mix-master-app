import { Outlet, Link } from "react-router-dom";

const ErrorLayout = () => {
    return (
        <div>
            <nav>
                <Link to="/">Home</Link>
                <Link to="/about">About</Link>
                <Link to="/coctail">Coctail</Link>
                <Link to="/newsletter">Newsletter</Link>
            </nav>
            <Outlet />
        </div>
    );
};

export default ErrorLayout;
