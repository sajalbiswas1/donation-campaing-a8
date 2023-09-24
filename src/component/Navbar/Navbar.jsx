
const Navbar = () => {
    return (
        <div className="navbar w-10/12 m-auto">
            <div className="flex-1">
                <img src="../../../public/image/Logo.png" alt="" />
            </div>
            <div className="flex-none">
                <ul className="menu menu-horizontal px-1">
                    <li><a>Home</a></li>
                    <li><a>Donation</a></li>
                    <li><a>Statistics</a></li>
                </ul>
            </div>
        </div>
    );
};

export default Navbar;