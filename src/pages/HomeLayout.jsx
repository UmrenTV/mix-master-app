import { Outlet, useNavigation } from "react-router-dom";
import Navbar from "../components/Navbar";

const HomeLayout = () => {
    const navigation = useNavigation();
    const isPageLoading = navigation.state === "loading";
    const contextValue = "some value";
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
