import { useEffect } from "react";
import Card from "../Card/Card";
import { useLoaderData } from "react-router-dom";

const Cards = ({ seeValue }) => {
    const data = useLoaderData();
    const data1 = data.filter(dat => dat.Category === "Health");
    const data2 = data.filter(dat => dat.Category === "Education");
    const data3 = data.filter(dat => dat.Category === "Clothing");
    const data4 = data.filter(dat => dat.Category === "Food");
    let hello = data;
    if(seeValue === "Health"){
         hello = data1
    }
    else if(seeValue === "health"){
        hello = data1
   }
    else if(seeValue === "Education"){
        hello = data2
    }
    else if(seeValue === "Clothing"){
        hello = data3
    }
    else if(seeValue === "Food"){
        hello = data4
    }
    else if(seeValue === "education"){
        hello = data2
    }
    else if(seeValue === "clothing"){
        hello = data3
    }
    else if(seeValue === "food"){
        hello = data4
    }
    
    else{
        hello = data;
    }

    return (
        <div className="grid lg:grid-cols-4 md:grid-cols-2 gap-6 w-10/12 m-auto mt-24 mb-48">
            {
                hello.map(card => <Card key={card.id} card={card}></Card>)
            }
        </div>
    );
};

export default Cards;