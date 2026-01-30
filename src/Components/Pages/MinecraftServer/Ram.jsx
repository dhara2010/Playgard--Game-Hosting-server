import React, { useEffect, useRef } from 'react'
import RamBox from './RamBox'

function Ram() {
    const scrollRef = useRef(null);

    const scrollLeft = () => {
        scrollRef.current.scrollBy({ left: -245, behavior: "smooth" });
    };

    const scrollRight = () => {
        scrollRef.current.scrollBy({ left: 245, behavior: "smooth" });
    };
    useEffect(() => {
        const interval = setInterval(() => {
            scrollRight();
        }, 5000);

        return () => clearInterval(interval);
    }, []);
    return (
        <div className='bg-dark -mt-45 text-white'>
            <div className="px-30 pt-30">
                <div className="relative w-full max-w-[1200px] mx-auto  pr-15 pl-15">
                    <button onClick={scrollLeft} className="absolute left-0 top-1/2 -translate-y-1/2 border text-white size-12 hover:bg-gradient-to-r from-red-400 to-purple-500 rounded-full z-10"><i className='fa-solid fa-arrow-left'></i></button>
                    <div ref={scrollRef} className="overflow-x-auto scrollbar-hide scroll-smooth" style={{ scrollBehavior: "smooth" }} >
                        <div className="flex gap-4 min-w-max">
                            <RamBox />
                            <RamBox />
                            <RamBox />
                            <RamBox />
                            <RamBox />
                            <RamBox />
                            <RamBox />
                            <RamBox />
                            <RamBox />
                            <RamBox />
                            <RamBox />
                            <RamBox />
                        </div>
                    </div>
                    <button onClick={scrollRight} className="absolute right-0 top-1/2 -translate-y-1/2 border text-white size-12 hover:bg-gradient-to-r from-red-400 to-purple-500 rounded-full z-10"><i className='fa-solid fa-arrow-right'></i></button>
                </div>
            </div>
        </div>
    )
}

export default Ram
