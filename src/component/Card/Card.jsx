import PropTypes from 'prop-types';
const Card = ({ card }) => {
    const { Picture, Title, Category, Category_bg, Card_bg, Text_button_bg, Button_bg } = card;
    // const blue = `${Category === 'Health' && '[#0052FF]'}`;
    // const red = `${Category === 'Education' && '[#FF444A]'}`;
    // const green = `${Category === 'Clothing' && '[#79C23F]'}`;
    // const red2 = `${Category === 'Food' && '[#F87147]'}`;

    console.log(Category_bg)

    return (
        <div className={`rounded-lg bg-[${Category_bg}] bg-opacity-[15%]`}>
            <img className="w-full" src={Picture} alt="" />
            <div className=" p-4">
            <p className={`bg-opacity-[20%] bg-[${Category_bg}] w-min px-3 py-1 text-[${Category_bg}] font-medium rounded-md mb-2`}>{Category}</p>
            <h3 className={`text-[${Category_bg}] text-xl font-bold`}>{Title}</h3>
            </div>
        </div>
        

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