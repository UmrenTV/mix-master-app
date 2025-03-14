import axios from "axios";
import { useLoaderData } from "react-router-dom";
import SearchForm from "../components/SearchForm";
import { useQuery } from "@tanstack/react-query";

import CoctailList from "../components/CoctailList";

const coctailSearchUrl =
    "https://www.thecocktaildb.com/api/json/v1/1/search.php?s=";

const defaultSearchTerm = "vodka";

const searchCoctailsQuery = (searchTerm) => {
    localStorage.setItem("search", searchTerm);
    return {
        queryKey: ["search", searchTerm],
        queryFn: async () => {
            const response = await axios.get(
                `${coctailSearchUrl}${searchTerm}`
            );
            return response.data.drinks;
        },
    };
};

export const loader = (queryClient) => {
    return async ({ request }) => {
        const url = new URL(request.url);
        const searchTerm =
            url.searchParams.get("search") ||
            localStorage.getItem("search") ||
            defaultSearchTerm;
        await queryClient.ensureQueryData(searchCoctailsQuery(searchTerm));
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
