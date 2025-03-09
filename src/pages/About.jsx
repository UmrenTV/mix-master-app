import { Outlet } from "react-router-dom";

const About = () => {
    return (
        <div>
            <h2>About Page</h2>
            <Outlet />
        </div>
    );
};

export default About;
