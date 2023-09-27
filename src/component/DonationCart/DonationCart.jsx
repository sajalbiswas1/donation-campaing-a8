import { Link } from "react-router-dom";
import PropTypes from 'prop-types';
const DonationCart = ({ card }) => {
    const { id, Picture, Title, Category, Price, Category_bg1, Category_bg2, Category_bg3 } = card
    return (
        <div style={{ backgroundColor: Category_bg1 }} className="grid lg:grid-cols-3 md:grid-cols-2 gap-6 rounded-lg">
            <div className="grid col-span-1 ">
                <img className="h-full w-full rounded-l-lg" src={Picture} alt="" />
            </div>
            <div className="grid lg:col-span-2 md:col-span-1 lg:pl-0 md:pl-0 pl-5">
                <p style={{ backgroundColor: Category_bg2, color: Category_bg3 }} className="font-normal w-min text-sm px-3 py-1 mt-6 rounded-md mb-1">{Category}</p>
                <h3 className="text-2xl font-semibold mb-1">{Title}</h3>
                <p style={{ color: Category_bg3 }} className="mb-3 font-semibold text-base">{Price}</p>
                <Link to={`/donate/${id}`}><button style={{ backgroundColor: Category_bg3 }} className="text-white text-lg font-semibold px-4 py-1 rounded-md mb-6">View Details</button></Link>
            </div>
        </div>
    );
};
DonationCart.propTypes = {
    card: PropTypes.object
};
export default DonationCart;