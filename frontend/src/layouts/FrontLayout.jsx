import { Outlet } from "react-router";
import Footer from "../components/user/Footer";
import Header from "../components/user/Header";

const FrontLayout = () => {
    return (
        <>
            <Header />
            <Outlet />
            <Footer />
        </>
    );
};

export default FrontLayout;