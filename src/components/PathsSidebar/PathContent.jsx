import React, { useEffect, useState } from 'react';
import axios from 'axios';
import config from './config';

const PathContent = ({ activeItem }) => {
    const [content, setContent] = useState(null);
    const [language, setLanguage] = useState("en");
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);

    useEffect(() => {
        const fetchContent = async () => {
            if (!activeItem) {
                setLoading(false);
                return;
            }

            try {
                setLoading(true);
                const response = await axios.get(`${config.apiUrl}/api/content/${activeItem}`);
                setContent(response.data);
                setError(null);
            } catch (err) {
                setError('Failed to fetch content. Please try again later.');
                console.error('Error fetching content:', err);
            } finally {
                setLoading(false);
            }
        };

        fetchContent();
    }, [activeItem]);

    if (loading) {
        return (
            <div className="flex-1 p-4 bg-zinc-700/50 ml-10 rounded-lg flex items-center justify-center">
                <div className="animate-pulse text-gray-400">Loading...</div>
            </div>
        );
    }

    if (error) {
        return (
            <div className="flex-1 p-4 bg-zinc-700/50 ml-10 rounded-lg">
                <div className="text-red-500">{error}</div>
            </div>
        );
    }

    if (!content) {
        return (
            <div className="flex-1 p-4 bg-zinc-700/50 ml-10 rounded-lg flex items-center justify-center">
                <p className="text-gray-400">Select an item to view content</p>
            </div>
        );
    }

    const renderSection = (section) => {
        const learningObjectives = section.learningObjectives[language] || [];

        return (
            <div key={section.title[language]} className="mb-6">
                <h3 className="text-lg font-bold mb-2">{section.title[language]}</h3>
                <p className="mb-2">{section.content[language]}</p>
                {section.interactiveActivity && (
                    <div className="mb-2">
                        <strong>Interactive Activity:</strong> {section.interactiveActivity[language]}
                    </div>
                )}
                {learningObjectives.length > 0 && (
                    <div>
                        <strong>Learning Objectives:</strong>
                        <ul className="list-disc pl-5">
                            {learningObjectives.map((obj, index) => (
                                <li key={index}>{obj}</li>
                            ))}
                        </ul>
                    </div>
                )}
            </div>
        );
    };

    return (
        <div
            className="flex-1 p-4 bg-zinc-700/50 ml-10 rounded-lg shadow-md overflow-auto h-[80vh]"
            style={{ scrollbarWidth: 'none', msOverflowStyle: 'none' }}
        >
            <div className="flex justify-between items-center mb-4">
                <h2 className="text-xl font-semibold">{content.title[language]}</h2>
                <button
                    className="p-2 bg-blue-500 hover:bg-blue-600 text-white rounded transition-colors"
                    onClick={() => setLanguage(language === "en" ? "hi" : "en")}
                >
                    {language === "en" ? "हिंदी पर स्विच करें" : "Switch to English"}
                </button>
            </div>
            <p className="mb-6">{content.overallGoal[language]}</p>
            {content.sections?.map(renderSection)}
        </div>
    );
};

export default PathContent;
