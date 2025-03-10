import { createBrowserRouter, RouterProvider } from "react-router-dom";
import {
    Home,
    About,
    Coctail,
    Newsletter,
    Error,
    HomeLayout,
    SinglePageError,
} from "./pages";
import { loader as loadingLoader } from "./pages/Home";

const router = createBrowserRouter([
    {
        path: "/",
        element: <HomeLayout />,
        errorElement: <Error />,
        children: [
            {
                index: true,
                element: <Home />,
                errorElement: <SinglePageError />,
                loader: loadingLoader,
            },
            {
                path: "coctail/:id",
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
