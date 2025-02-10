import React, { useState, useEffect } from "react";
import axios from "axios";
import PathContent from "./PathContent";
import config from "./config";

const PathSidebar = () => {
    const [activeItem, setActiveItem] = useState(null);
    const [items, setItems] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);

    useEffect(() => {
        const fetchItems = async () => {
            try {
                const response = await axios.get(`${config.apiUrl}/api/content`, { withCredentials: true });

                console.log("✅ API Response:", response.data); // Debugging API response

                if (response.data && Array.isArray(response.data)) {
                    setItems(response.data);
                    setActiveItem(response.data.length > 0 ? response.data[0]._id : null);
                    setError(null);
                } else {
                    throw new Error("Invalid data format");
                }
            } catch (err) {
                console.error("❌ Error fetching items:", err);
                setError("Failed to fetch items. Please try again later.");
            } finally {
                setLoading(false);
            }
        };

        fetchItems();
    }, []);

    if (loading) {
        return (
            <div className="flex h-[80vh] items-center justify-center">
                <div className="animate-pulse text-gray-400">Loading...</div>
            </div>
        );
    }

    if (error) {
        return <div className="m-4 text-red-500">{error}</div>;
    }

    return (
        <div className="lg:flex h-[80vh] relative">
            <aside className="relative top-0 left-0 z-40 w-74 h-full transition-transform -translate-x-full sm:translate-x-0">
                <div className="h-full px-3 py-4 overflow-y-auto backdrop-blur-sm bg-zinc-800/50 rounded-xl">
                    <ul className="space-y-2 font-medium">
                        {items.map((item) => (
                            <li key={item._id || Math.random()}>
                                <button
                                    className={`flex items-center w-full p-2 text-white rounded-lg hover:bg-zinc-900 ${
                                        activeItem === item._id ? "bg-zinc-900" : ""
                                    }`}
                                    onClick={() => setActiveItem(item._id)}
                                >
                                    <svg
                                        className="w-5 h-5 text-gray-500 transition duration-75 dark:text-gray-400 group-hover:text-white"
                                        aria-hidden="true"
                                        fill="currentColor"
                                        viewBox="0 0 24 24"
                                    >
                                        <path d="M3 3v18h18V3H3zm8 14H5v-2h6v2zm0-4H5v-2h6v2zm0-4H5V7h6v2zm8 8h-6v-2h6v2zm0-4h-6v-2h6v2zm0-4h-6V7h6v2z" />
                                    </svg>
                                    <span className="ml-3">{item.title?.en || "Unnamed Item"}</span>
                                </button>
                            </li>
                        ))}
                    </ul>
                </div>
            </aside>
            <PathContent activeItem={activeItem} />
        </div>
    );
};

export default PathSidebar;
