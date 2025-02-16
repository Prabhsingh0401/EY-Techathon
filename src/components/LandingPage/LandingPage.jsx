import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { Gallery } from "../Image-Gallery/Gallery";

const LandingPage = () => {
    const navigate = useNavigate();
    const [formData, setFormData] = useState({ name: "", age: "", state: "" });
    const [language, setLanguage] = useState("english");
    const [errorMessage, setErrorMessage] = useState("");
    const [showKeyboard, setShowKeyboard] = useState(false);

    const indianStates = [ "Andhra Pradesh", "Arunachal Pradesh", "Assam", "Bihar", "Chhattisgarh",
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
                localStorage.setItem("userInfo", JSON.stringify({
                    name: formData.name,
                    state: formData.state
                }));
                alert("Registration successful!");
                navigate("/Tutorial");
            } else if (response.status === 409) {
                localStorage.setItem("userInfo", JSON.stringify({
                    name: formData.name,
                    state: formData.state
                }));
                alert("User already registered! Redirecting...");
                navigate("/Tutorial");
            } else {
                setErrorMessage(data.error || "Something went wrong.");
            }
        } catch (error) {
            localStorage.setItem("guestUser", JSON.stringify(formData));
            localStorage.setItem("userInfo", JSON.stringify({
                name: formData.name,
                state: formData.state
            }));
            alert("Network issue! Registered as Guest.");
            navigate("/Tutorial");
        }
    };

    return (
        <div className="flex items-center justify-center">
            <Gallery />
            <div className="absolute z-10 w-[90vw] lg:w-[90vw] bg-zinc-800 lg:h-[75vh] h-[83vh] rounded-3xl top-[8%] lg:top-[15%] lg:flex justify-center items-center">
                <div className="lg:w-[22vw] lg:bg-transparent bg-gray-700 flex items-center justify-center h-[32vh] lg:h-[60vh] rounded-3xl">
                    <img src="/IconSmall.png" className="h-16" alt="MoneyMitra Logo" />
                    <h1 className="text-4xl font-extrabold ml-2 text-white">Money Mitra</h1>
                </div>
                <div className="lg:w-[30vw] ml-5 mr-5 lg:ml-10 lg:h-[60vh]">
                    <div className="flex justify-start mb-4 space-x-2 mt-5">
                        <button 
                            onClick={() => setLanguage('english')}
                            className={`px-12 lg:px-16 py-2 rounded ${language === 'english' ? 'bg-blue-600 text-white' : 'bg-gray-600'}`}
                        >
                            English
                        </button>
                        <button 
                            onClick={() => setLanguage('hindi')}
                            className={`px-12 lg:px-20 py-2 rounded ${language === 'hindi' ? 'bg-blue-600 text-white' : 'bg-gray-600'}`}
                        >
                            हिंदी
                        </button>
                        <div id="google_translate_element" style={{ position: "absolute", width: "0%", height: "80%", zIndex: 1000, marginLeft: "31%"}}></div>
                    </div>

                    {errorMessage && (
                        <p className="text-red-500 text-sm mb-3">{errorMessage}</p>
                    )}

                    <form onSubmit={handleSubmit} className="space-y-4 mt-1">
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
                            <h1>Download keyboard to type in your regional language</h1>
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
                                className="w-full p-2 rounded bg-zinc-700/90 text-white border border-zinc-600 focus:outline-none focus:border-blue-500"
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
