import { NavLink } from "react-router-dom";

const Navbar = () => {
    return (
        <div className="lg:flex md:flex text-center flex-row justify-between items-center py-2 w-10/12 m-auto">
            <div className="flex justify-center">
                <img src="https://i.ibb.co/wgC30W4/Logo.png" alt="" />
            </div>
            <div className="flex-none">
                <ul className="menu menu-horizontal px-1">
                    <li ><NavLink style={({ isActive}) => {
                        return {
                            fontWeight: isActive ? "bold" : "",
                            color: isActive ? "red" : "",
                            backgroundColor: isActive ? 'white' : '',
                            textDecoration: isActive ? "underline" : '',
                        };
                    }} to={`/`}>Home</NavLink></li>
                    <li><NavLink style={({ isActive}) => {
                        return {
                            fontWeight: isActive ? "bold" : "",
                            color: isActive ? "red" : "",
                            backgroundColor: isActive ? 'white' : '',
                            textDecoration: isActive ? "underline" : '',
                        };
                    }} to={`/donation`}>Donation</NavLink></li>
                    <li><NavLink style={({ isActive}) => {
                        return {
                            fontWeight: isActive ? "bold" : "",
                            color: isActive ? "red" : "",
                            backgroundColor: isActive ? 'white' : '',
                            textDecoration: isActive ? "underline" : '',
                        };
                    }} to={`/statistics`}>Statistics</NavLink></li>
                </ul>
            </div>
        </div>
    );
};

export default Navbar;
