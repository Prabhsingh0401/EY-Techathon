import React, { useState } from "react";
import axios from "axios";
import NavBar from "../NavBar/NavBar";
import Footer from "../Footer/Footer";
import parse from 'html-react-parser';
import SubmitButtonInvestiMate from "./FormSubmitButton";

const ResponseDisplay = ({ text }) => {
  if (!text) return null;

  const processText = (text) => {
    const paragraphs = text.split('\n');
    
    return paragraphs.map((paragraph, index) => {
      if (!paragraph.trim()) return null;
      
      const processedText = paragraph
        .replace(/\*\*(.*?)\*\*/g, '<strong>$1</strong>')
        .replace(/\*(.*?)\*/g, '<em>$1</em>')
        .replace(/₹(\d+(?:,\d+)*(?:\.\d+)?)/g, '<span class="whitespace-nowrap">₹$1</span>')
        .replace(/(\d+(?:,\d+)*(?:\.\d+)?)/g, '<span class="whitespace-nowrap">$1</span>')
        .replace(/(!important|!note|note:|important:)/gi, '<strong class="text-blue-500">$1</strong>');

      return (
        <div key={index} className="mb-4 last:mb-0 leading-relaxed">
          {parse(processedText)}
        </div>
      );
    });
  };

  return (
    <div className="space-y-2">
      {processText(text)}
    </div>
  );
};

const InvestiMate = () => {
  const [formData, setFormData] = useState({
    initial_investment: "",
    monthly_investment: "",
    investment_period: "",
    risk_tolerance: "",
    goal_amount: "",
  });
  const [response, setResponse] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const [errorMessage, setErrorMessage] = useState("");

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
    setErrorMessage("");
  };

  const formatDataToString = () => {
    return `Please suggest the best investment plan based on the following details: Initial Investment: ₹${formData.initial_investment}, Monthly Contribution: ₹${formData.monthly_investment}, Investment Period: ${formData.investment_period} years, Risk Tolerance: ${formData.risk_tolerance}, Goal Amount: ₹${formData.goal_amount}. Provide specific plans and expected returns.`;
  };

  const validateForm = () => {
    const fields = Object.entries(formData);
    for (const [key, value] of fields) {
      if (!value || value.trim() === "") {
        setErrorMessage(`Please enter your ${key.replace("_", " ")}`);
        return false;
      }
      if (parseFloat(value) < 0) {
        setErrorMessage(`${key.replace("_", " ")} cannot be negative`);
        return false;
      }
    }
    return true;
  };

  const sendDataToAPI = () => {
    if (!validateForm()) return;

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

  return (
    <>
    <NavBar/>
    <div className="lg:flex gap-8 p-8 mt-8 flex-1">
      <div className="lg:w-[46%]">
        <form onSubmit={(e) => e.preventDefault()} className="space-y-6">
          <h1 className="text-3xl font-bold mt-10 mb-1 bg-gradient-to-r from-pink-500 to-purple-900 bg-clip-text text-transparent">
            InvestiMate - Investment Planning Tool 
          </h1>

          <input
            type="number"
            name="initial_investment"
            value={formData.initial_investment}
            onChange={handleInputChange}
            placeholder="Initial Investment (₹)"
            required
            className="w-full p-3 bg-zinc-900/50 text-white rounded-lg"
          />

          <input
            type="number"
            name="monthly_investment"
            value={formData.monthly_investment}
            onChange={handleInputChange}
            placeholder="Monthly Investment (₹)"
            required
            className="w-full p-3 bg-zinc-900/50 text-white rounded-lg"
          />

          <input
            type="number"
            name="investment_period"
            value={formData.investment_period}
            onChange={handleInputChange}
            placeholder="Investment Period (years)"
            required
            className="w-full p-3 bg-zinc-900/50 text-white rounded-lg"
          />

          <input
            type="text"
            name="risk_tolerance"
            value={formData.risk_tolerance}
            onChange={handleInputChange}
            placeholder="Risk Tolerance (Low, Medium, High)"
            required
            className="w-full p-3 bg-zinc-900/50 text-white rounded-lg"
          />

          <input
            type="number"
            name="goal_amount"
            value={formData.goal_amount}
            onChange={handleInputChange}
            placeholder="Goal Amount (₹)"
            required
            className="w-full p-3 bg-zinc-900/50 text-white rounded-lg"
          />

          <SubmitButtonInvestiMate
            onClick={sendDataToAPI}
            disabled={isLoading}
          >
          </SubmitButtonInvestiMate>

          {errorMessage && (
            <div className="mt-4 p-3 bg-red-500/10 border border-red-500/20 rounded-lg">
              <p className="text-red-400 text-sm">{errorMessage}</p>
            </div>
          )}
        </form>
      </div>

      {/* Response Section */}
      {(response || isLoading) && (
        <div className="lg:w-[45%] lg:absolute right-8 top-[10%] mt-10 lg:mt-0 max-h-[75vh] overflow-y-auto" style={{ scrollbarWidth: 'none', msOverflowStyle: 'none' }}>
          <div className="w-full rounded-lg border border-gray-700 bg-zinc-800/50 backdrop-blur-sm shadow-lg">
            <div className="border-b border-gray-700 p-6 flex items-center justify-between">
              <h3 className="text-xl font-semibold text-white">Your personlised Investment Plan</h3>
            </div>

            <div className="p-6">
              {isLoading ? (
                <div className="flex items-center space-x-3">
                    <div className="flex space-x-1">
                      <div className="w-2 h-2 bg-pink-500 rounded-full animate-pulse"></div>
                      <div className="w-2 h-2 bg-pink-500 rounded-full animate-pulse delay-150"></div>
                      <div className="w-2 h-2 bg-pink-500 rounded-full animate-pulse delay-300"></div>
                    </div>
                  <span className="text-gray-400">Analyzing your data...</span>
                </div>
              ) : (
                <ResponseDisplay text={response} />
              )}
            </div>
          </div>
        </div>
      )}
    </div>
    <Footer/>
    </>
  );
};

export default InvestiMate;
