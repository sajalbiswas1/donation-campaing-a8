import { Link } from "react-router-dom";
import PropTypes from 'prop-types';
const DonationCart = ({ card }) => {
    const { id, Picture, Title, Category, Price, Category_bg } = card
    return (
        <div className="flex">
            <div>
                <img src={Picture} alt="" />
            </div>
            <div>
                <p>{Category}</p>
                <h3>{Title}</h3>
                <p>{Price}</p>
                <Link to={`/donate/${id}`}><button>View Details</button></Link>
            </div>
        </div>
    );
};
DonationCart.propTypes = {
    card: PropTypes.object
  };
export default DonationCart;