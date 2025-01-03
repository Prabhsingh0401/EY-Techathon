import React, { useEffect, useState } from 'react';
import contentData from '../../data/PathContent.json';

const PathContent = ({ activeItem }) => {
    const [content, setContent] = useState(null);
    const [language, setLanguage] = useState("en"); // Default language is English

    useEffect(() => {
        // Set the content for the active item based on selected language
        setContent(contentData[activeItem]);
    }, [activeItem, language]); // Re-render when activeItem or language changes

    if (!content) {
        return <div>Loading...</div>;
    }

    const renderSection = (section) => {
        // Safe check if learningObjectives is an array before using .map()
        const learningObjectives = Array.isArray(section.learningObjectives) ? section.learningObjectives : [];

        return (
            <div key={section.title[language]} className="mb-6">
                <h3 className="text-lg font-bold mb-2">{section.title[language]}</h3>
                <p className="mb-2">{section.content[language]}</p>
                {section.interactiveActivity && (
                    <div className="mb-2">
                        <strong>Interactive Activity:</strong> {section.interactiveActivity[language]}
                    </div>
                )}
                {section.highlights && Array.isArray(section.highlights) && (
                    <ul className="list-disc pl-5 mb-2">
                        {section.highlights.map((item, index) => (
                            <li key={index}>{item[language]}</li>
                        ))}
                    </ul>
                )}
                {learningObjectives.length > 0 && (
                    <div>
                        <strong>Learning Objectives:</strong>
                        <ul className="list-disc pl-5">
                            {learningObjectives.map((obj, index) => (
                                <li key={index}>{obj[language]}</li>
                            ))}
                        </ul>
                    </div>
                )}
            </div>
        );
    };

    const handleLanguageToggle = () => {
        // Toggle between English and Hindi
        setLanguage(language === "en" ? "hi" : "en");
    };

    return (
        <div className="flex-1 p-4 bg-zinc-700/50 ml-10 rounded-lg shadow-md overflow-auto h-[80vh]" style={{ scrollbarWidth: 'none', msOverflowStyle: 'none' }}>
            <h2 className="text-xl font-semibold mb-4">{content.title[language]}</h2>
            <p className="mb-6">{content.overallGoal[language]}</p>
            {content.sections ? content.sections.map(renderSection) : <p>{content.content[language]}</p>}
            <button 
                className="mt-4 p-2 bg-blue-500 text-white rounded" 
                onClick={handleLanguageToggle}>
                Toggle Language
            </button>
        </div>
    );
};

export default PathContent;
