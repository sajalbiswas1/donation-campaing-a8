
import { useState } from 'react';
import Cards from '../Cards/Cards';
import './Home.css'
const Home = () => {
    const [seeValue, setSeeValue] = useState('')
    const handelSetValue = (e) => {
        e.preventDefault()
        setSeeValue(e.target.search.value)
    }

    return (
        <div>
            <div className="hero lg:h-[500px] md:h-[500px] h-[200px] bg-img" >
                <div className="hero-overlay bg-opacity-80 bg-white"></div>
                <div className="text-center text-neutral-content">
                    <h1 className='lg:text-5xl md:text-5xl text-2xl font-bold mb-10 text-[#0B0B0B]'>I Grow By Helping People In Need</h1>
                    <div className="hero-overlay bg-opacity-0 bg-white"></div>
                    <form onSubmit={handelSetValue} className='flex justify-center'>
                        <input className='lg:w-96 md:w-96 w-48 text-black rounded-l-lg py-2 border-y border-l border-black text-lg px-7' type="text" name='search' placeholder='Search here....' />
                        <input className="text-lg font-normal bg-[#FF444A] px-4 py-2 rounded-r-lg text-white" name='text' type='submit' value='Search' />
                    </form>
                </div>
            </div >
            <Cards seeValue={seeValue}></Cards>
        </div>
    );
};

export default Home