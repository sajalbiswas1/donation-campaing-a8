import { createBrowserRouter } from "react-router-dom";
import MainPage from "../component/MainPage/MainPage";
import Home from "../component/Home/Home";
import ErrorPage from "../component/ErrorPage/ErrorPage";

const myCreateRouter = createBrowserRouter([
    {
        path:'/',
        element: <MainPage></MainPage>,
        errorElement: <ErrorPage></ErrorPage>,
        children:([
            {
                path:'/',
                element: <Home></Home>
            }
        ])
    }
])


export default myCreateRouter;