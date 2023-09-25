import PropTypes from 'prop-types';
import { NavLink } from 'react-router-dom';

const Card = ({ card }) => {
    const { id, Picture, Title, Category, Category_bg1, Category_bg2, Category_bg3 } = card;
    // const blue = `${Category === 'Health' && '[#0052FF]'}`;
    // const red = `${Category === 'Education' && '[#FF444A]'}`;
    // const green = `${Category === 'Clothing' && '[#79C23F]'}`;
    // const red2 = `${Category === 'Food' && '[#F87147]'}`;



    return (
        <NavLink to={`/donate/${id}`}>
            <div style={{ backgroundColor: Category_bg1 }} className={`rounded-lg bg-[${Category_bg1}] bg-opacity-[15%] `}>
                <img className="w-full" src={Picture} alt="" />
                <div className=" p-4">
                    <p style={{ backgroundColor: Category_bg2,color: Category_bg3}} className={`bg-opacity-[20%] bg-[${Category_bg2}] w-min px-3 py-1 text-[${Category_bg2}] font-medium rounded-md mb-2`}>{Category}</p>
                    <h3 style={{color: Category_bg3}}  className={`text-[${Category_bg3}] text-xl font-bold`}>{Title}</h3>
                </div>
            </div>
        </NavLink>


        // <div style={{
        //     backgroundColor:Category_bg,
        //     opacity: 15
        // }} className={`rounded-lg `}>
        //     <img className="w-full" src={Picture} alt="" />
        //     <div className=" p-4">
        //         <p className={`bg-opacity-[20%] bg-[${Category_bg}] w-min px-3 py-1 text-[${Category_bg}] font-medium rounded-md mb-2`}>{Category}</p>
        //         <h3 className={`text-[${Category_bg}] text-xl font-bold`}>{Title}</h3>
        //     </div>
        // </div>
    );
};
Card.propTypes = {
    card: PropTypes.object
}
export default Card;