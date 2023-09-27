import { NavLink } from "react-router-dom";
import Logo from "./Logo/Logo";

const Nav = () => {
    return (
        <div >
            <nav className="flex justify-between items-center gap-3">
                <div>
                    <Logo></Logo>
                </div>
                <ul className="flex gap-12 font-bold text-xl">
                    <li>
                        <NavLink to="/" className={({ isActive, isPending }) => isPending ? "pending" : isActive ? "text-[#FF444A] underline" : ""}>Home</NavLink>
                    </li>
                    <li>
                        <NavLink to="/donation" className={({ isActive, isPending }) => isPending ? "pending" : isActive ? "text-[#FF444A] underline" : ""}>Donation</NavLink>
                    </li>
                    <li>
                        <NavLink to="/statistics" className={({ isActive, isPending }) => isPending ? "pending" : isActive ? "text-[#FF444A] underline" : ""}>Statistics</NavLink>
                    </li>
                </ul>
            </nav>
        </div>
    );
};

export default Nav;