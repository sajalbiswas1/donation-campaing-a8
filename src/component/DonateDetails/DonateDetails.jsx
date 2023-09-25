import { useLoaderData, useParams } from "react-router-dom";

const DonateDetails = () => {
    const cards = useLoaderData();
    const { id } = useParams();
    const intId = parseInt(id);
    const donates = cards.find(card => card.id === intId);
    console.log(donates.Picture)
    return (
        <div className="mt-16 w-10/12 m-auto mb-24">
            <div className="relative">
                <img className="w-full" src={donates.Picture} alt="" />
                <div className="absolute bg-zinc-800 p-6 bg-opacity-10 bottom-6">
                    <button className="bg-red-700 px-6 py-4 rounded-md font-semibold text-xl text-white">Donate <span>{donates.Price}</span></button>
                </div>
            </div>

            <h3 className="text-4xl font-bold mt-14 mb-6 text-[#0B0B0B]">{donates.Title}</h3>
            <p className="text-base font-normal text-[#0B0B0BB2]">{donates.Description}</p>
        </div>
    );
};

export default DonateDetails;