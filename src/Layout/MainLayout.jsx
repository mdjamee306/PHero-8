import { Outlet } from "react-router-dom";
import Nav from "../Components/Nav";

const MainLayout = () => {
    return (
        <div className="w-11/12 lg:max-w-[1300px] mx-auto lg:mt-10 mt-3">
            <Nav></Nav>
            <Outlet></Outlet>
        </div>
    );
};

export default MainLayout;