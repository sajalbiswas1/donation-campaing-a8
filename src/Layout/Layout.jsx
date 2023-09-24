import { createBrowserRouter } from "react-router-dom";
import MainPage from "../component/MainPage/MainPage";

const myCreateRouter = createBrowserRouter([
    {
        path:'/',
        element: <MainPage></MainPage>
    }
])


export default myCreateRouter;