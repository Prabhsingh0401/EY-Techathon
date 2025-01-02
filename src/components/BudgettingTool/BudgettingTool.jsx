import React, { useState } from "react";
import axios from "axios";
import NavBar from "../NavBar/NavBar";
import SubmitButton from "./FormSubmitButton";

const Spendly = () => {
  const [formData, setFormData] = useState({
    total_income: "",
    housing: "",
    utilities: "",
    groceries: "",
    transportation: "",
    entertainment: "",
    savings: "",
    miscellaneous: "",
    savings_target: "",
  });
  const [response, setResponse] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const [errorMessage, setErrorMessage] = useState("");

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const formatDataToString = () => {
    const expenseString = `Monthly Income: ₹${formData.total_income}, Housing Expenses: ₹${formData.housing}, Utility Bills: ₹${formData.utilities}, Grocery Spending: ₹${formData.groceries}, Transportation Costs: ₹${formData.transportation}, Entertainment Budget: ₹${formData.entertainment}, Current Savings: ₹${formData.savings}, Miscellaneous Expenses: ₹${formData.miscellaneous}, Savings Goal: ₹${formData.savings_target}`;

    return `Please analyze the following monthly budget data and provide specific recommendations: ${expenseString}. Please focus on: 1) Identifying areas of overspending, 2) Suggesting budget reallocations to reach the savings goal of ₹${formData.savings_target}, and 3) Providing practical cost-cutting measures for the next 6 months.`;
  };

  const sendDataToAPI = () => {
    const hasEmptyFields = Object.values(formData).some(value => value === "");
    if (hasEmptyFields) {
      setErrorMessage("Please fill in all fields before submitting.");
      return;
    }

    setIsLoading(true);
    setErrorMessage("");

    const requestData = {
      message: formatDataToString(),
    };

    axios
      .post("/api/chat", requestData)
      .then((response) => {
        setResponse(response.data.message);
      })
      .catch((error) => {
        console.error("Error:", error);
        setErrorMessage(
          error.response?.data?.error || "Something went wrong. Please try again."
        );
      })
      .finally(() => setIsLoading(false));
  };

  const formatResponse = (text) => {
    if (!text) return null;

    const formattedText = text
      .replace(/\*(.*?)\*/g, "<strong>$1</strong>") 
      .replace(/Sure, I'd be happy to help you analyze your budget and provide recommendations.*?Here's a detailed analysis of your monthly income and expenses, along with specific recommendations for overspending areas, budget reallocation, and cost-cutting measures\./s, ""); // Remove intro text

    const sections = formattedText.split(/(?=\d+[\).])/); 

    return sections.map((section, index) => {
      const trimmedSection = section.trim();
      if (!trimmedSection) return null;

      const isMainPoint = /^\d+[\).]/.test(trimmedSection);
      return (
        <div
          key={index}
          className={`${isMainPoint ? 'mt-4 font-semibold' : 'ml-4 mt-2'} text-gray-200`}
          dangerouslySetInnerHTML={{ __html: trimmedSection }}
        />
      );
    });
  };

  return (
    <div>
      <NavBar />
      <div className="flex gap-8 p-8 mt-[7%]">
        {/* Form Section */}
        <div className="w-[45%]">
          <form onSubmit={(e) => e.preventDefault()}>
            <h1 className="text-3xl font-bold mb-5 bg-gradient-to-r from-green-500 to-green-300 bg-clip-text text-transparent">Spendly - AI powered Budgeting Tool</h1>

            <div className="relative z-0 w-full mb-5 group">
              <input
                type="number"
                name="total_income"
                value={formData.total_income}
                onChange={handleInputChange}
                placeholder="Total Monthly Income (₹)"
                required
                className="block py-1 px-2 w-full text-sm text-white bg-transparent border-0 border-b-2 border-gray-300 appearance-none focus:outline-none focus:ring-0 focus:border-zinc-300 peer"
              />
            </div>

            <h2 className="text-xl font-semibold mt-5 mb-3">Expenses</h2>
            <div className="grid grid-cols-2 gap-5 mb-5">
              {Object.keys(formData).slice(1, -1).map((field) => (
                <div key={field} className="relative z-0 w-full group">
                  <input
                    type="number"
                    name={field}
                    value={formData[field]}
                    onChange={handleInputChange}
                    placeholder={`${field.charAt(0).toUpperCase() + field.slice(1).replace('_', ' ')} (₹/month)`}
                    required
                    className="block py-1 px-2 w-full text-sm text-white bg-transparent border-0 border-b-2 border-gray-300 appearance-none focus:outline-none focus:ring-0 focus:border-zinc-300 peer"
                  />
                </div>
              ))}
            </div>

            <div className="relative z-0 w-full mb-5 group">
              <h2 className="text-xl font-semibold mt-5 mb-3">Goal</h2>
              <input
                type="number"
                name="savings_target"
                value={formData.savings_target}
                onChange={handleInputChange}
                placeholder="Savings Target (₹)"
                required
                className="block py-1 px-2 w-full text-sm text-white bg-transparent border-0 border-b-2 border-gray-300 appearance-none focus:outline-none focus:ring-0 focus:border-zinc-300 peer"
              />
            </div>

            <SubmitButton
            onClick={sendDataToAPI}
            disabled={isLoading}
            ></SubmitButton>
          </form>

          {errorMessage && (
            <p className="text-red-500 mt-4">{errorMessage}</p>
          )}
        </div>

        {/* Response Section */}
        {(response || isLoading) && (
          <div className="w-[45%] fixed right-8 top-[20%] max-h-[70vh] overflow-y-auto" style={{ scrollbarWidth: 'none', msOverflowStyle: 'none' }}>
            <div className="w-full rounded-lg border border-gray-700 bg-zinc-800/50 backdrop-blur-sm shadow-lg overflow-auto">
              <div className="border-b border-gray-700 p-6">
                <h3 className="text-xl font-semibold text-white">
                  Budget Analysis
                </h3>
              </div>

              <div className="p-6">
                {isLoading ? (
                  <div className="flex items-center space-x-2">
                    <div className="w-2 h-2 bg-blue-500 rounded-full animate-pulse"></div>
                    <div className="w-2 h-2 bg-blue-500 rounded-full animate-pulse delay-150"></div>
                    <div className="w-2 h-2 bg-blue-500 rounded-full animate-pulse delay-300"></div>
                    <span className="text-gray-400 ml-2">Analyzing your budget...</span>
                  </div>
                ) : (
                  <div className="text-gray-200">{formatResponse(response)}</div>
                )}
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default Spendly;
