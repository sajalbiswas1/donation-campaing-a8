
import Cards from '../Cards/Cards';
import './Home.css'
const Home = () => {
    return (
        <div>
            <div className="hero h-[500px] bg-img" >
                <div className="hero-overlay bg-opacity-80 bg-white"></div>
                <div className="text-center text-neutral-content">
                    <h1 className='text-5xl font-bold mb-10 text-[#0B0B0B]'>I Grow By Helping People In Need</h1>
                    <div className="hero-overlay bg-opacity-0 bg-white"></div>
                    <input className='w-96 text-black rounded-l-lg py-2 border-y border-l border-black text-lg px-7' type="text" placeholder='Search here....' />
                    <button className="text-lg font-normal bg-[#FF444A] px-4 py-2 rounded-r-lg text-white">Search</button>
                </div>
            </div >
            <Cards></Cards>
        </div>
    );
};

export default Home;