import React, { useState } from 'react';
import PathContent from './PathContent';

const PathSidebar = () => {
    const [activeItem, setActiveItem] = useState("Business Planning");

    const items = [
        "Business Planning",
        "Basic Accounting",
        "Accessing Agricultural Loan",
        "How to plan a budget?",
        "Managing Debt"
    ];

    return (
        <div className="flex h-[80vh] relative">
            {/* Sidebar */}
            <aside
                id="default-sidebar"
                className="relative top-0 left-0 z-40 w-74 h-full transition-transform -translate-x-full sm:translate-x-0"
                aria-label="Sidebar"
            >
                <div className="h-full px-3 py-4 overflow-y-auto backdrop-blur-sm bg-zinc-800/50 rounded-xl">
                    <ul className="space-y-2 font-medium">
                        {items.map((item, index) => (
                            <li key={index}>
                                <button
                                    className={`flex items-center w-full p-2 text-white-900 rounded-lg hover:bg-zinc-900 dark:hover:bg-gray-700 group ${
                                        activeItem === item ? "bg-zinc-900" : ""
                                    }`}
                                    onClick={() => setActiveItem(item)}
                                >
                                    <svg
                                        className="w-5 h-5 text-gray-500 transition duration-75 dark:text-gray-400 group-hover:text-white-900 dark:group-hover:text-white"
                                        aria-hidden="true"
                                        fill="currentColor"
                                        viewBox="0 0 24 24"
                                    >
                                        <path d="M3 3v18h18V3H3zm8 14H5v-2h6v2zm0-4H5v-2h6v2zm0-4H5V7h6v2zm8 8h-6v-2h6v2zm0-4h-6v-2h6v2zm0-4h-6V7h6v2z" />
                                    </svg>
                                    <span className="ms-3">{item}</span>
                                </button>
                            </li>
                        ))}
                    </ul>
                </div>
            </aside>

            {/* Content Area */}
            <PathContent activeItem={activeItem} />
        </div>
    );
};

export default PathSidebar;
