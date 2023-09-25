import { useEffect } from "react";
import { useState } from "react";
import Card from "../Card/Card";

const Cards = () => {
    const [cards, setCards] = useState([]);
    useEffect(() => {
        fetch('donate.json')
            .then(res => res.json())
            .then(data => setCards(data))
    }, [])
    console.log(cards)
    return (
        <div className="grid lg:grid-cols-4 md:grid-cols-2 gap-6 w-10/12 m-auto mt-24 mb-48">
            {
                cards.map(card => <Card key={card.id} card={card}></Card>)
            }
        </div>
    );
};

export default Cards;