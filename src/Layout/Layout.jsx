import { createBrowserRouter } from "react-router-dom";
import MainPage from "../component/MainPage/MainPage";
import Home from "../component/Home/Home";

const myCreateRouter = createBrowserRouter([
    {
        path:'/',
        element: <MainPage></MainPage>,
        children:([
            {
                path:'/',
                element: <Home></Home>
            }
        ])
    }
])


export default myCreateRouter;