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
import { loader as singleCoctailLoader } from "./pages/Coctail";

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
                loader: singleCoctailLoader,
                errorElement: <SinglePageError />,
            },
            {
                path: "newsletter",
                element: <Newsletter />,
                errorElement: <SinglePageError />,
            },
            {
                path: "about",
                element: <About />,
                errorElement: <SinglePageError />,
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
