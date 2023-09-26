import {useLoaderData, useParams } from "react-router-dom";
import { setLocalStorage } from "../../localStorage";
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const DonateDetails = () => {
    const cards = useLoaderData();
    const { id } = useParams();
    const notify = () => toast.success("Donate Successfully");
    const notify2 = () => toast.error("This is Duplicate");
    const intId = parseInt(id);
    const donates = cards.find(card => card.id === intId);
    const {Category_bg3} =donates
    const handelSetLocalStore = ()=>{

    const valu = setLocalStorage(intId);
    if(valu === true){
        notify();
    }
    else{
        notify2()
    }
    
    }

    return (
        <div className="mt-16 w-10/12 m-auto mb-24">
            <div className="relative ">
                <img className="w-full rounded-lg" src={donates.Picture} alt="" />
                <div className="absolute bg-[#0B0B0B80] p-9 bg-opacity-50 rounded-b-lg  bottom-0 w-full">
                    <button style={{backgroundColor:Category_bg3}} onClick={handelSetLocalStore} className=" px-6 py-4 rounded-md font-semibold text-xl text-white">Donate <span>{donates.Price}</span></button>
                </div>
            </div>

            <h3 className="text-4xl font-bold mt-14 mb-6 text-[#0B0B0B]">{donates.Title}</h3>
            <p className="text-base font-normal text-[#0B0B0BB2]">{donates.Description}</p>
            <ToastContainer position="top-center" className="mt-32" />
        </div>
    );
};

export default DonateDetails;