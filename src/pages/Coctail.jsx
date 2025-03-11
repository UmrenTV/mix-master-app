import Wrapper from "../assets/wrappers/CocktailPage";
import { useLoaderData, Link, Navigate } from "react-router-dom";
import axios from "axios";
import { useQuery } from "@tanstack/react-query";

const coctailSingleUrl =
    "https://www.thecocktaildb.com/api/json/v1/1/lookup.php?i=";

const getCoctailQuery = (id) => {
    return {
        queryKey: ["coctail", id],
        queryFn: async () => {
            const { data } = await axios.get(`${coctailSingleUrl}${id}`);
            return data;
        },
    };
};

export const loader = (queryClient) => async (things) => {
    const { params } = things;
    const { id } = params;
    const data = await queryClient.ensureQueryData(getCoctailQuery(id));
    return { id, data };
};

const Coctail = () => {
    const { id } = useLoaderData();
    const { data } = useQuery(getCoctailQuery(id));

    // if no data
    if (!data) return <Navigate to="/" />;

    const singleDrink = data.drinks[0];
    const {
        strDrink: name,
        strCategory: category,
        strDrinkThumb: image,
        strAlcoholic: info,
        strGlass: glass,
        strInstructions: instructions,
    } = singleDrink;

    const ingredientList = Object.keys(singleDrink)
        .filter((key) => {
            return key.startsWith("strIngredient") && singleDrink[key] !== null;
        })
        .map((item) => singleDrink[item]);

    return (
        <Wrapper>
            <header>
                <Link to="/" className="btn">
                    back home
                </Link>
                <h3>{name}</h3>
            </header>
            <div className="drink">
                <img src={image} alt={name} className="img" />
                <div className="drink-info">
                    <p>
                        <span className="drink-data">name :</span>
                        {name}
                    </p>
                    <p>
                        <span className="drink-data">category :</span>
                        {category}
                    </p>
                    <p>
                        <span className="drink-data">info :</span>
                        {info}
                    </p>
                    <p>
                        <span className="drink-data">glass :</span>
                        {glass}
                    </p>
                    <p>
                        <span className="drink-data">ingredients :</span>
                        {ingredientList.map((ingredient, index) => {
                            return (
                                <span key={ingredient + index} className="ing">
                                    {ingredient +
                                        (index !== ingredientList.length - 1
                                            ? ","
                                            : "")}
                                </span>
                            );
                        })}
                    </p>
                    <p>
                        <span className="drink-data">instructions :</span>
                        {instructions}
                    </p>
                </div>
            </div>
        </Wrapper>
    );
};

export default Coctail;
