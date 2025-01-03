import React, { useState } from "react";
import axios from "axios";
import NavBar from "../NavBar/NavBar";
import SubmitButton from "./FormSubmitButton";
import Footer from "../Footer/Footer";

const ResponseDisplay = ({ text }) => {
  if (!text) return null;

  const processText = (text) => {
    return text
      .replace(/\*\*(.*?)\*\*/g, '<strong>$1</strong>')
      .replace(/\*(.*?)\*/g, '<em>$1</em>')
      .replace(/₹(\d+(?:,\d+)*(?:\.\d+)?)/g, '<span style="white-space: nowrap">₹$1</span>')
      .replace(/(\d+(?:,\d+)*(?:\.\d+)?)/g, '<span style="white-space: nowrap">$1</span>')
      .replace(/(!important|!note|note:|important:)/gi, '<strong>$1</strong>');
  };

  const sections = text.split(/(?=\*\*[A-Za-z\s]+:\*\*)/g);

  return (
    <div className="space-y-6">
      {sections.map((section, index) => {
        if (!section.trim()) return null;

        if (section.startsWith('**')) {
          const [header, ...content] = section.split('\n');
          return (
            <div key={index} className="mb-6">
              <div
                className="font-semibold text-lg mb-4"
                dangerouslySetInnerHTML={{
                  __html: processText(header)
                }}
              />
              {content.length > 0 && (
                <div className="space-y-4">
                  {content.map((item, idx) => {
                    const trimmedItem = item.trim();
                    if (!trimmedItem) return null;

                    const pointMatch = trimmedItem.match(/^\*\*(\d+)\.\*\*/);
                    if (pointMatch) {
                      const [, number] = pointMatch;
                      const pointContent = trimmedItem.replace(/^\*\*\d+\.\*\*/, '').trim();
                      return (
                        <div key={idx} className="flex items-start gap-3">
                          <div className="flex-shrink-0">
                            <span className="font-bold">{number}.</span>
                          </div>
                          <div
                            className="flex-1 leading-relaxed"
                            dangerouslySetInnerHTML={{
                              __html: processText(pointContent)
                            }}
                          />
                        </div>
                      );
                    }

                    return (
                      <div
                        key={idx}
                        className="leading-relaxed"
                        dangerouslySetInnerHTML={{
                          __html: processText(trimmedItem)
                        }}
                      />
                    );
                  })}
                </div>
              )}
            </div>
          );
        }

        return (
          <div
            key={index}
            className="leading-relaxed"
            dangerouslySetInnerHTML={{
              __html: processText(section)
            }}
          />
        );
      })}
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
  const [response, setResponse] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const [errorMessage, setErrorMessage] = useState("");

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
    setErrorMessage("");
  };

  const formatDataToString = () => {
    const expenseString = `Monthly Income: ₹${formData.total_income}, Housing Expenses: ₹${formData.housing}, Utility Bills: ₹${formData.utilities}, Grocery Spending: ₹${formData.groceries}, Transportation Costs: ₹${formData.transportation}, Entertainment Budget: ₹${formData.entertainment}, Current Savings: ₹${formData.savings}, Miscellaneous Expenses: ₹${formData.miscellaneous}, Savings Goal: ₹${formData.savings_target}`;

    return `Please analyze the following monthly budget data and provide specific recommendations: ${expenseString}. Please focus on: 1) Identifying areas of overspending, 2) Suggesting budget reallocations to reach the savings goal of ₹${formData.savings_target}, and 3) Providing practical cost-cutting measures for the next 6 months.`;
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
      <div className="flex gap-8 p-8 mt-[4%] flex-1">
        {/* Form Section */}
        <div className="w-[45%]">
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

            <div className="space-y-4">
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

            <div className="pt-4">
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
          <div className="w-[45%] fixed right-8 top-[20%] max-h-[70vh] overflow-y-auto custom-scrollbar">
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
      </div>

      <Footer />

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