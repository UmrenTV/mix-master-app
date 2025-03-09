import { createBrowserRouter, RouterProvider } from "react-router-dom";
import { Home, About, Coctail, Newsletter, Error, HomeLayout } from "./pages";

const router = createBrowserRouter([
    {
        path: "/",
        element: <HomeLayout />,
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
                children: [
                    {
                        index: true,
                        element: <h2>Our Company</h2>,
                    },
                    {
                        path: "person",
                        element: <h2>John Doe</h2>,
                    },
                ],
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
