import React from 'react';
import { BsArrowsAngleExpand } from "react-icons/bs";
import { IoIosAddCircleOutline } from "react-icons/io";

const ChartToolbar = ({ activeRange, setActiveRange }) => {
    const timeRanges = ['1d', '3d', '1w', '1m', '6m', '1y', 'max'];

    return (
        <div className="flex justify-between items-center my-10 font-circular">

            <div className="flex space-x-10">
                <span className="flex items-center text-[#6F7177] space-x-1 cursor-pointer">
                    <BsArrowsAngleExpand className='mr-2 text-xl' />
                    <span className='text-sm'>Fullscreen</span>
                </span>
                <span className="flex items-center text-[#6F7177] space-x-1 cursor-pointer">
                    <IoIosAddCircleOutline className='mr-2 text-2xl' />
                    <span className='text-sm'>Compare</span>
                </span>
            </div>

            {/* Time Range Buttons */}
            <div className="flex space-x-4">
                {timeRanges.map((range) => (
                    <button
                        key={range}
                        onClick={() => setActiveRange(range)}
                        className={`px-3 py-1 rounded-md ${activeRange === range
                            ? 'text-white bg-[#4B40EE]'
                            : 'text-gray-500 hover:text-gray-700'
                            }`}
                    >
                        {range}
                    </button>
                ))}
            </div>
        </div>
    );
};

export default ChartToolbar;
