import React from 'react';

const PriceSummaryCard = () => {
    return (
        <div className="flex items-center justify-between font-circular">
            <div className="relative">
                {/* Number with USD */}
                <h2 className="text-6xl font-bold text-[#1A243A]">
                    63,179.71
                    <span className="text-sm absolute top-0 right-[-2rem] text-[#BDBEBF]">
                        USD
                    </span>
                </h2>

                {/* Percentage */}
                <p className="text-sm text-[#67BF6B]">+2,161.42 (3.54%)</p>
            </div>
        </div>
    );
};

export default PriceSummaryCard;
