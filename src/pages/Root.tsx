import {Outlet} from "react-router-dom";
import Header from "../components/Header.tsx";
import Footer from "../components/Footer.tsx";

const Root = () => {
    return (
        <div>
            <Header/>
            <div className="ml-[15%]">
                <Outlet/>
            </div>
            <div className="ml-[15%]">
                <Footer/>
            </div>
        </div>
    );
};

export default Root;