import React, { useState } from "react";
import { useNavigate } from "react-router-dom"; // Ensure you are using React Router
import { Gallery } from "../Image-Gallery/Gallery";

const LandingPage = () => {
    const navigate = useNavigate();
    const [formData, setFormData] = useState({ name: "", age: "", state: "" });
    const [language, setLanguage] = useState("english");
    const [errorMessage, setErrorMessage] = useState("");

    const indianStates = [
        "Andhra Pradesh", "Arunachal Pradesh", "Assam", "Bihar", "Chhattisgarh",
        "Delhi", "Goa", "Gujarat", "Haryana", "Himachal Pradesh", "Jharkhand", "Karnataka",
        "Kerala", "Madhya Pradesh", "Maharashtra", "Manipur", "Meghalaya", "Mizoram",
        "Nagaland", "Odisha", "Punjab", "Rajasthan", "Sikkim", "Tamil Nadu",
        "Telangana", "Tripura", "Uttar Pradesh", "Uttarakhand", "West Bengal"
    ];

    const translations = {
        english: { name: "Name", age: "Age", state: "State", submit: "Submit" },
        hindi: { name: "नाम", age: "उम्र", state: "राज्य", submit: "जमा करें" }
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        
        if (!formData.name || !formData.age || !formData.state) {
            alert("All fields are required!");
            return;
        }

        try {
            const response = await fetch("http://localhost:3000/api/users/register", {
                method: "POST",
                headers: { "Content-Type": "application/json" },
                body: JSON.stringify(formData),
            });

            const data = await response.json();

            if (response.status === 201) {
                alert("Registration successful!");
                navigate("/Tutorial");
            } else if (response.status === 409) {
                alert("User already registered! Redirecting...");
                navigate("/Tutorial");
            } else {
                setErrorMessage(data.error || "Something went wrong.");
            }
        } catch (error) {
            setErrorMessage("Something went wrong. Please try again.");
        }
    };

    return (
        <div className="flex items-center justify-center">
            <Gallery />
            <div className="absolute z-10 w-[90vw] lg:w-[68vw] bg-zinc-800 h-[70vh] rounded-3xl top-[15%] lg:flex justify-center items-center">
                <div className="lg:w-[30vw] lg:bg-transparent bg-gray-700 flex items-center justify-center h-[35vh] lg:h-[60vh] rounded-3xl">
                    <img src="/IconSmall.png" className="h-16" alt="MoneyMitra Logo" />
                    <h1 className="text-4xl font-extrabold ml-2 text-white">Money Mitra</h1>
                </div>
                <div className="lg:w-[30vw] ml-5 mr-5 lg:ml-10 lg:h-[60vh]">
                    <div className="flex justify-start mb-4 space-x-2 mt-5">
                        <button 
                            onClick={() => setLanguage('english')}
                            className={`px-24 lg:px-16 py-2 rounded ${language === 'english' ? 'bg-blue-600 text-white' : 'bg-gray-600'}`}
                        >
                            English
                        </button>
                        <button 
                            onClick={() => setLanguage('hindi')}
                            className={`px-28 lg:px-20 py-2 rounded ${language === 'hindi' ? 'bg-blue-600 text-white' : 'bg-gray-600'}`}
                        >
                            हिंदी
                        </button>
                    </div>

                    {errorMessage && (
                        <p className="text-red-500 text-sm mb-3">{errorMessage}</p>
                    )}

                    <form onSubmit={handleSubmit} className="space-y-4">
                        <div>
                            <label className="block text-white mb-1">{translations[language].name}</label>
                            <input
                                type="text"
                                name="name"
                                value={formData.name}
                                onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                                className="w-full p-2 rounded bg-zinc-700/20 text-white border border-zinc-600 focus:outline-none focus:border-blue-500"
                                required
                            />
                        </div>

                        <div>
                            <label className="block text-white mb-1">{translations[language].age}</label>
                            <input
                                type="number"
                                name="age"
                                value={formData.age}
                                onChange={(e) => setFormData({ ...formData, age: e.target.value })}
                                className="w-full p-2 rounded bg-zinc-700/20 text-white border border-zinc-600 focus:outline-none focus:border-blue-500"
                                required
                            />
                        </div>

                        <div>
                            <label className="block text-white mb-1">{translations[language].state}</label>
                            <select
                                name="state"
                                value={formData.state}
                                onChange={(e) => setFormData({ ...formData, state: e.target.value })}
                                className="w-full p-2 rounded bg-zinc-700/20 text-white border border-zinc-600 focus:outline-none focus:border-blue-500"
                                required
                            >
                                <option value="">Select your state</option>
                                {indianStates.map((state) => (
                                    <option key={state} value={state}>
                                        {state}
                                    </option>
                                ))}
                            </select>
                        </div>

                        <button
                            type="submit"
                            className="w-full px-5 py-3 bg-blue-600 text-white font-bold rounded-full hover:bg-blue-700 transition duration-200"
                        >
                            {translations[language].submit}
                        </button>
                    </form>
                </div>
            </div>
        </div>
    );
};

export default LandingPage;
