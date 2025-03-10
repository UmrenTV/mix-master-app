import { createBrowserRouter, RouterProvider } from "react-router-dom";
import { Home, About, Coctail, Newsletter, Error, HomeLayout } from "./pages";

const router = createBrowserRouter([
    {
        path: "/",
        element: <HomeLayout />,
        errorElement: <Error />,
        children: [
            {
                index: true,
                element: <Home />,
            },
            {
                path: "coctail",
                element: <Coctail />,
            },
            {
                path: "newsletter",
                element: <Newsletter />,
            },
            {
                path: "about",
                element: <About />,
            },
        ],
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
