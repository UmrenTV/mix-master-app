import { Outlet, useNavigation } from "react-router-dom";
import Navbar from "../components/Navbar";

const HomeLayout = () => {
    const navigation = useNavigation();
    const isPageLoading = navigation.state === "loading"; // you can use this to show a loading indicator
    const contextValue = "some value"; // you can use context on the outlet to pass this as many levels deep as you want
    return (
        <>
            <Navbar />
            <section className="page">
                {isPageLoading ? (
                    <div className="loading" />
                ) : (
                    <Outlet context={{ contextValue }} />
                )}
            </section>
        </>
    );
};

export default HomeLayout;
