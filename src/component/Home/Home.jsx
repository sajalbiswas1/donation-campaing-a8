import './Home.css'
const Home = () => {
    return (
        <div>
            <div className="hero h-[500px] bg-img" >
            <div className="hero-overlay bg-opacity-60 bg-white"></div>
                <div className="text-center text-neutral-content">
                    <input className='w-96 rounded-l-lg  py-2 border-y border-l border-black text-lg px-7' type="text" placeholder='Search here...' />
                    <button className="text-lg font-normal bg-[#FF444A] px-4 py-2 rounded-r-lg text-white">Search</button>
                </div>
            </div >
        </div>
    );
};

export default Home;