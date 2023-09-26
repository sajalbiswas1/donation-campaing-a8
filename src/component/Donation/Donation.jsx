import { useLoaderData } from "react-router-dom";
import { getLocalStorage } from "../../localStorage";
import { useEffect, useState } from "react";
import DonationCart from "../DonationCart/DonationCart";

const Donation = () => {
    const cards = useLoaderData();
    const [mainCard, setMainCard] = useState([]);
    const [dataLenth, setDataLenth]= useState(4);
    useEffect(() => {
        const stroeId = getLocalStorage();
        const apliedId = [];
        setMainCard(apliedId);
        for (const id of stroeId) {
            const gear = cards.find(card => card.id === id);
            if (gear) {
                apliedId.push(gear);
            }
        }
    }, [cards])
    console.log(mainCard)
    return (
        <div className="mb-32">
            <div className="grid grid-cols-2 gap-6 w-10/12 m-auto mt-16">
                {
                    mainCard.slice(0,dataLenth).map(card => <DonationCart key={card.id} card={card}></DonationCart>)
                }
            </div>
            <div className={`${mainCard.length === dataLenth && 'hidden'} text-center`}>
            <button onClick={()=> setDataLenth(mainCard.length)} className={`${mainCard.length >4 ?'':'hidden'} bg-[#009444] text-white font-semibold text-base px-6 py-3 rounded-lg mt-10`}>See All</button>
            </div>
        </div>
    );
};

export default Donation;