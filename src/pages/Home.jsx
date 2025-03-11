import { useEffect } from "react";
import axios from "axios";
import { useLoaderData } from "react-router-dom";
import SearchForm from "../components/SearchForm";

import CoctailList from "../components/CoctailList";

const coctailSearchUrl =
    "https://www.thecocktaildb.com/api/json/v1/1/search.php?s=";

export const loader = async ({ request }) => {
    const url = new URL(request.url);
    const searchTerm = url.searchParams.get("search") || "vodka";
    const response = await axios.get(`${coctailSearchUrl}${searchTerm}`);
    return { drinks: response.data.drinks, searchTerm };
};

const Home = () => {
    const { drinks, searchTerm } = useLoaderData();

    return (
        <>
            <SearchForm searchTerm={searchTerm} />
            <CoctailList drinks={drinks} />
        </>
    );
};

export default Home;
