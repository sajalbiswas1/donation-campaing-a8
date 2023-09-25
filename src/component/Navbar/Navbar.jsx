import { NavLink } from "react-router-dom";

const Navbar = () => {
    return (
        <div className="navbar w-10/12 m-auto">
            <div className="flex-1">
                <img src="https://i.ibb.co/wgC30W4/Logo.png" alt="" />
            </div>
            <div className="flex-none">
                <ul className="menu menu-horizontal px-1">
                    <li><NavLink to={'/home'}>Home</NavLink></li>
                    <li><NavLink to={`/donate`}>Donation</NavLink></li>
                    <li><NavLink to={`/statistics`}>Statistics</NavLink></li>
                </ul>
            </div>
        </div>
    );
};

export default Navbar;