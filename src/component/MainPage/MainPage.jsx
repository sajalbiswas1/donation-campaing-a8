import { Outlet } from "react-router-dom";
import Navbar from "../Navbar/Navbar";

const MainPage = () => {
    return (
        <div>
            <div>
            <div className="">
                <Navbar></Navbar>
            </div>
            <Outlet></Outlet>
            </div>
        </div>
    );
};

export default MainPage;