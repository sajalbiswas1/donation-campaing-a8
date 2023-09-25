import { createBrowserRouter } from "react-router-dom";
import MainPage from "../component/MainPage/MainPage";
import Home from "../component/Home/Home";
import ErrorPage from "../component/ErrorPage/ErrorPage";
import DonateDetails from "../component/DonateDetails/DonateDetails";
import Donation from "../component/Donation/Donation";

const myCreateRouter = createBrowserRouter([
    {
        path:'/',
        element: <MainPage></MainPage>,
        errorElement: <ErrorPage></ErrorPage>,
        children:([
            {
                path:'/',
                element: <Home></Home>
            },
            {
                path:'/donate/:id',
                element:<DonateDetails></DonateDetails>,
                loader:()=>fetch('donate.json')
            },
            {
                path:'/donation',
                element: <Donation></Donation>,
                loader: ()=>fetch('../../public/donate.json')
            }
        ])
    }
])


export default myCreateRouter;