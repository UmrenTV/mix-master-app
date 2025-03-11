import { createBrowserRouter, RouterProvider } from "react-router-dom";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { ReactQueryDevtools } from "@tanstack/react-query-devtools";
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
import { action as newsletterAction } from "./pages/Newsletter";

const queryClient = new QueryClient({
    defaultOptions: {
        queries: {
            staleTime: 1000 * 60 * 5, // 5 minutes
        },
    },
});

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
                loader: loadingLoader(queryClient),
            },
            {
                path: "coctail/:id",
                element: <Coctail />,
                loader: singleCoctailLoader(queryClient),
                errorElement: <SinglePageError />,
            },
            {
                path: "newsletter",
                element: <Newsletter />,
                errorElement: <SinglePageError />,
                action: newsletterAction,
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
    return (
        <QueryClientProvider client={queryClient}>
            <RouterProvider router={router} />
            {/*<ReactQueryDevtools initialIsOpen={false} /> */}
        </QueryClientProvider>
    );
};
export default App;
