import React, { useState } from 'react';

const Tabs = () => {
    const [activeTab, setActiveTab] = useState('Chart');

    const tabs = ['Summary', 'Chart', 'Statistics', 'Analysis', 'Settings'];

    return (
        <div className="font-circular text-sm font-medium text-center text-gray-500 border-b border-gray-200">
            <ul className="flex flex-wrap -mb-px">
                {tabs.map((tab) => (
                    <li key={tab} className="me-4">
                        <button
                            onClick={() => setActiveTab(tab)}
                            className={`inline-block p-4 border-b-4 rounded-t-lg ${activeTab === tab
                                ? 'text-[#1A243A] border-[#4B40EE]'
                                : 'text-gray-500 border-transparent hover:text-gray-600 hover:border-gray-300'
                                }`}
                        >
                            {tab}
                        </button>
                    </li>
                ))}
            </ul>
        </div>
    );
};

export default Tabs;
