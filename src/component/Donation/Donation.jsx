import { useLoaderData } from "react-router-dom";
import { getLocalStorage } from "../../localStorage";
import { useEffect, useState } from "react";
import DonationCart from "../DonationCart/DonationCart";

const Donation = () => {
    const cards = useLoaderData();
    const [mainCard, setMainCard] = useState([]);
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
        <div className="grid grid-cols-2 w-10/12 m-auto">
            {
                mainCard.map(card => <DonationCart key={card.id} card={card}></DonationCart>)
            }
        </div>
    );
};

export default Donation;