import Card from "../Card/Card";
// import { useLoaderData } from "react-router-dom";
import PropTypes from 'prop-types';
import { useEffect, useState } from "react";

const Cards = ({ seeValue }) => {
    // const data = useLoaderData();
    // console.log(data)
    const [allCard, setAllCard] = useState([])
    // setAllCard(data)
    console.log(seeValue, allCard)
    useEffect(() => {
        fetch('donate.json')
            .then(res => res.json())
            .then(data => {
                const result = data.filter(dat => dat.Category.toLowerCase().includes(seeValue))
                if (result == `${[]}`) {
                    setAllCard(data)
                    
                }
                else {
                    setAllCard(result)

                }
            })
    }, [seeValue])

    // const result = data.filter(dat => dat.Category.toLowerCase().includes(seeValue))
    // if(result){
    //     setAllCard(result);
    // }


    //     const data1 = data.filter(dat => dat.Category === "Health");
    //     const data2 = data.filter(dat => dat.Category === "Education");
    //     const data3 = data.filter(dat => dat.Category === "Clothing");
    //     const data4 = data.filter(dat => dat.Category === "Food");
    //     let hello = data;
    //     if(seeValue === "Health"){
    //          hello = data1
    //     }
    //     else if(seeValue === "health"){
    //         hello = data1
    //    }
    //     else if(seeValue === "Education"){
    //         hello = data2
    //     }
    //     else if(seeValue === "Clothing"){
    //         hello = data3
    //     }
    //     else if(seeValue === "Food"){
    //         hello = data4
    //     }
    //     else if(seeValue === "education"){
    //         hello = data2
    //     }
    //     else if(seeValue === "clothing"){
    //         hello = data3
    //     }
    //     else if(seeValue === "food"){
    //         hello = data4
    //     }

    //     else{
    //         hello = data;
    //     }

    return (
        <div className="grid lg:grid-cols-4 md:grid-cols-2 gap-6 w-10/12 m-auto lg:mt-24 md:mt-24 mt-5 mb-48">
            {
                allCard.map(card => <Card key={card.id} card={card}></Card>)
            }
        </div>
    );
};

Cards.propTypes = {
    seeValue: PropTypes.string
}
export default Cards;