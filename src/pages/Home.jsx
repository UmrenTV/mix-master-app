import { useEffect } from "react";
import axios from "axios";
import { useLoaderData } from "react-router-dom";
import SearchForm from "../components/SearchForm";
import { useQuery } from "@tanstack/react-query";

import CoctailList from "../components/CoctailList";

const coctailSearchUrl =
    "https://www.thecocktaildb.com/api/json/v1/1/search.php?s=";

const searchCoctailsQuery = (searchTerm) => {
    return {
        queryKey: ["search", searchTerm || "vodka"],
        queryFn: async () => {
            const response = await axios.get(
                `${coctailSearchUrl}${searchTerm}`
            );
            return response.data.drinks;
        },
    };
};
// we've modified this loader function, to return a function, so we can grab the query client from App.jsx (router configuration)
export const loader = (queryClient) => {
    return async ({ request }) => {
        const url = new URL(request.url);
        const searchTerm = url.searchParams.get("search") || "vodka";
        await queryClient.ensureQueryData(searchCoctailsQuery(searchTerm));
        // ensureQueryData is basically ensuring that the query is in the cache, if it isn't, it will fetch it.
        return { searchTerm };
    };
};

const Home = () => {
    const { searchTerm } = useLoaderData();
    const { data: drinks } = useQuery(searchCoctailsQuery(searchTerm));

    return (
        <>
            <SearchForm searchTerm={searchTerm} />
            <CoctailList drinks={drinks} />
        </>
    );
};

export default Home;
