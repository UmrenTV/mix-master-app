import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Home from "./pages/Home";
import About from "./pages/About";
import Error from "./pages/Error";
import Newsletter from "./pages/Newsletter";
import HomeLayout from "./pages/HomeLayout";

const router = createBrowserRouter([
    {
        path: "/",
        element: <Home />,
    },
    {
        path: "/about",
        element: <About />,
    },
    {
        path: "/newsletter",
        element: <Newsletter />,
    },
    {
        path: "/error",
        element: <Error />,
    },
]);

const App = () => {
    return <RouterProvider router={router} />;
};
export default App;
