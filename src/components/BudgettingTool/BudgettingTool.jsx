import React, { useState } from "react";
import axios from "axios";
import NavBar from "../NavBar/NavBar";
import SubmitButton from "./FormSubmitButton";
import { PieChart, Pie, Cell, Tooltip, Legend } from "recharts";
import parse from 'html-react-parser';

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

  const data = Object.keys(formData)
    .filter((key) => key !== "total_income" && key !== "savings_target") 
    .map((key) => ({
      name: key,
      value: formData[key] ? parseFloat(formData[key]) : 0,
    }))
    .filter((item) => item.value > 0); 

    const COLORS = ["#0088FE", "#00C49F", "#FFBB28", "#FF8042", "#A28EFF", "#FF5F5F", "#82CA9D", "#FF73B5"];

  const [response, setResponse] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const [errorMessage, setErrorMessage] = useState("");

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
    setErrorMessage("");
  };

  const formatDataToString = () => {
    const totalExpenses =
        formData.housing +
        formData.utilities +
        formData.groceries +
        formData.transportation +
        formData.entertainment +
        formData.miscellaneous;

    const remainingIncome = formData.total_income - totalExpenses;
    const currentSavings = formData.savings;
    const savingsTarget = formData.savings_target;

    // Check if target is already met with current savings
    if (currentSavings >= savingsTarget) {
        return `Budget Analysis:
- Current Savings: ₹${currentSavings}
- Target: ₹${savingsTarget}
- Status: Already achieved

Key Actions:
1. Maintain current savings
2. Consider investing excess funds
3. Set new savings target`;
    }

    const monthsRequired = (savingsTarget - currentSavings) / remainingIncome;
    const monthlyShortfall = monthsRequired > 6 ? 
        ((savingsTarget - currentSavings) / 6) - remainingIncome : 0;

    return `Budget Analysis:
- Monthly Income: ₹${formData.total_income}
- Total Expenses: ₹${totalExpenses}
- Monthly Savings: ₹${remainingIncome}
- Time to Goal: ${monthsRequired.toFixed(1)} months

${monthsRequired <= 6 ? 
`Quick Wins:
1. Cut ₹${Math.round(formData.entertainment * 0.3)} from entertainment
2. Reduce groceries by ₹${Math.round(formData.groceries * 0.2)}
3. Save ₹${Math.round(formData.utilities * 0.15)} on utilities` :
`Required Changes:
1. Need extra ₹${Math.round(monthlyShortfall)} monthly
2. Cut entertainment by 50%
3. Use local markets for groceries
4. Consider side income`}`;
};

  const validateForm = () => {
    const fields = Object.entries(formData);
    for (const [key, value] of fields) {
      if (!value || value.trim() === "") {
        setErrorMessage(`Please enter your ${key.replace('_', ' ')}`);
        return false;
      }
      if (parseFloat(value) < 0) {
        setErrorMessage(`${key.replace('_', ' ')} cannot be negative`);
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

  const inputClasses = "block py-1 px-2 w-full text-sm text-white bg-transparent border-0 border-b-2 border-gray-300 appearance-none focus:outline-none focus:ring-0 focus:border-green-500 peer transition-colors duration-200 placeholder-gray-400";

  return (
    <div className="min-h-screen flex flex-col">
      <NavBar />
      <div className="lg:flex gap-8 p-8 lg:mt-[4%] mt-[20%] flex-1">
        {/* Form Section */}
        <div className="lg:w-[45%] w-[95%]">
          <form onSubmit={(e) => e.preventDefault()} className="space-y-6">
            <h1 className="text-3xl font-bold mb-8 bg-gradient-to-r from-green-500 to-green-300 bg-clip-text text-transparent">
              Spendly - AI powered Budgeting Tool
            </h1>

            <div>
              <input
                type="number"
                name="total_income"
                value={formData.total_income}
                onChange={handleInputChange}
                placeholder="Monthly Income (₹)"
                required
                className={inputClasses}
              />
            </div>

            <div className="space-y-2">
              <h2 className="text-xl font-semibold text-white">Monthly Expenses</h2>
              <div className="grid grid-cols-2 gap-6">
                <input
                  type="number"
                  name="housing"
                  value={formData.housing}
                  onChange={handleInputChange}
                  placeholder="Housing (₹)"
                  required
                  className={inputClasses}
                />
                <input
                  type="number"
                  name="utilities"
                  value={formData.utilities}
                  onChange={handleInputChange}
                  placeholder="Utilities (₹)"
                  required
                  className={inputClasses}
                />
                <input
                  type="number"
                  name="groceries"
                  value={formData.groceries}
                  onChange={handleInputChange}
                  placeholder="Groceries (₹)"
                  required
                  className={inputClasses}
                />
                <input
                  type="number"
                  name="transportation"
                  value={formData.transportation}
                  onChange={handleInputChange}
                  placeholder="Transportation (₹)"
                  required
                  className={inputClasses}
                />
                <input
                  type="number"
                  name="entertainment"
                  value={formData.entertainment}
                  onChange={handleInputChange}
                  placeholder="Entertainment (₹)"
                  required
                  className={inputClasses}
                />
                <input
                  type="number"
                  name="savings"
                  value={formData.savings}
                  onChange={handleInputChange}
                  placeholder="Current Savings (₹)"
                  required
                  className={inputClasses}
                />
                <input
                  type="number"
                  name="miscellaneous"
                  value={formData.miscellaneous}
                  onChange={handleInputChange}
                  placeholder="Miscellaneous (₹)"
                  required
                  className={inputClasses}
                />
              </div>
            </div>

            <div>
            <h2 className="text-xl font-semibold text-white mb-5">Your Goal</h2>
              <input
                type="number"
                name="savings_target"
                value={formData.savings_target}
                onChange={handleInputChange}
                placeholder="Savings Goal (₹)"
                required
                className={inputClasses}
              />
            </div>

            <div className="">
              <SubmitButton
                onClick={sendDataToAPI}
                disabled={isLoading}
              />
            </div>

            {errorMessage && (
              <div className="mt-4 p-3 bg-red-500/10 border border-red-500/20 rounded-lg">
                <p className="text-red-400 text-sm">{errorMessage}</p>
              </div>
            )}
          </form>
        </div>
        
        {/* Response Section */}
        {(response || isLoading) && (
          <div className="lg:w-[50%] w-[95%] lg:relative lg:ml-10 mt-10 lg:mt-0 right-3 top-[20%] max-h-[80vh] overflow-y-auto custom-scrollbar">
            <div className="w-full rounded-lg border border-gray-700 bg-zinc-800/50 backdrop-blur-sm shadow-lg">
              <div className="border-b border-gray-700 p-6 flex items-center justify-between">
                <h3 className="text-xl font-semibold text-white flex items-center gap-2">
                  Budget Analysis
                </h3>
              </div>
              
              <div className="p-6">
                {isLoading ? (
                  <div className="flex items-center space-x-3">
                    <div className="flex space-x-1">
                      <div className="w-2 h-2 bg-green-500 rounded-full animate-pulse"></div>
                      <div className="w-2 h-2 bg-green-500 rounded-full animate-pulse delay-150"></div>
                      <div className="w-2 h-2 bg-green-500 rounded-full animate-pulse delay-300"></div>
                    </div>
                    <span className="text-gray-400">Analyzing your budget...</span>
                  </div>
                ) : (
                  <div className="space-y-4">
                    <ResponseDisplay text={response} />
                  </div>
                )}
              </div>
            </div>
          </div>
        )}
        <div>
          <PieChart width={300} height={300}>
            <Pie
              data={data}
              cx="50%"
              cy="50%"
              outerRadius={80}
              fill="#8884d8"
              dataKey="value"
              label
            >
              {data.map((entry, index) => (
                <Cell key={entry.name} fill={COLORS[index % COLORS.length]} />
              ))}
            </Pie>
            <Tooltip />
            <Legend />
          </PieChart>
        </div>
      </div>

      <style jsx global>{`
        .custom-scrollbar::-webkit-scrollbar {
          width: 6px;
        }
        .custom-scrollbar::-webkit-scrollbar-track {
          background: rgba(0, 0, 0, 0.1);
          border-radius: 3px;
        }
        .custom-scrollbar::-webkit-scrollbar-thumb {
          background: rgba(255, 255, 255, 0.1);
          border-radius: 3px;
        }
        .custom-scrollbar::-webkit-scrollbar-thumb:hover {
          background: rgba(255, 255, 255, 0.2);
        }
        input::-webkit-outer-spin-button,
        input::-webkit-inner-spin-button {
          -webkit-appearance: none;
          margin: 0;
        }
        input[type=number] {
          -moz-appearance: textfield;
        }
      `}</style>
    </div>
  );
};

export default Spendly;