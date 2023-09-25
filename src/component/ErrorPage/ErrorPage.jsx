import { Link } from "react-router-dom";

const ErrorPage = () => {
    return (
        <div className="text-center mt-56">
            <h1>Page Error</h1>
            <Link to={'/'}><button className="bg-slate-400 px-4 py-2 rounded-md text-white mt-5">Go back Home</button></Link>
        </div>
    );
};

export default ErrorPage;