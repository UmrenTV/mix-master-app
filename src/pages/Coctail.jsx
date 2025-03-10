import Wrapper from "../assets/wrappers/CocktailPage";
import { useLoaderData, Link, Navigate } from "react-router-dom";
import axios from "axios";

const coctailSingleUrl =
    "https://www.thecocktaildb.com/api/json/v1/1/lookup.php?i=";

export const loader = async (things) => {
    const { params } = things;
    const { id } = params;
    const { data } = await axios.get(`${coctailSingleUrl}${id}`);
    return { id, data };
};

const Coctail = () => {
    const { id, data } = useLoaderData();

    // if no data
    if (!data) return <Navigate to="/" />;
    // return <h2>That coctail doesn't exist</h2>

    const singleDrink = data.drinks[0];
    console.log(singleDrink);
    const {
        strDrink: name,
        strCategory: category,
        strDrinkThumb: image,
        strAlcoholic: info,
        strGlass: glass,
        strInstructions: instructions,
    } = singleDrink;
    // const ingredientList = [];
    // for (let i = 1; i <= 15; i++) {
    //     const ingredient = singleDrink[`strIngredient${i}`];
    //     if (ingredient) ingredientList.push(ingredient);
    //     else break;
    // } one way of doing it.

    const ingredientList = Object.keys(singleDrink)
        .filter((key) => {
            return key.startsWith("strIngredient") && singleDrink[key] !== null;
        })
        .map((item) => singleDrink[item]);
    // another way of doing it.

    console.log(ingredientList);
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
