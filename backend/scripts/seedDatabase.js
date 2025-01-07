// backend/scripts/seedDatabase.js
import mongoose from 'mongoose';
import dotenv from 'dotenv';
import { fileURLToPath } from 'url';
import { dirname, join } from 'path';
import Content from '../models/content.js';

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

dotenv.config({ path: join(__dirname, '../.env') });

const MONGODB_URI = process.env.MONGODB_URI;

if (!MONGODB_URI) {
    console.error('MONGODB_URI is not defined in environment variables');
    process.exit(1);
}

const initialData = {
"Business Planning": {
    "title": {
      "en": "Planting Your Business: A Step-by-Step Guide to Business Planning",
      "hi": "अपने व्यवसाय की योजना बनाना: एक कदम दर कदम मार्गदर्शिका"
    },
    "overallGoal": {
      "en": "By the end of this module, you will understand the core elements of a business plan and be able to create a simple, actionable plan for your own business.",
      "hi": "इस मॉड्यूल के अंत तक, आप एक व्यापार योजना के मुख्य तत्वों को समझेंगे और अपने व्यवसाय के लिए एक सरल, क्रियाशील योजना बनाने में सक्षम होंगे।"
    },
    "sections": [
      {
        "title": {
          "en": "Introduction: The Seeds of Success",
          "hi": "परिचय: सफलता के बीज"
        },
        "content": {
          "en": "The journey to a successful business starts with a solid plan. A business plan helps you set clear goals, anticipate challenges, and measure progress effectively. In this section, we will discuss how a structured plan can act as a roadmap to guide your entrepreneurial journey. Just like planting a seed, it requires preparation, care, and consistent effort to grow.",
          "hi": "एक सफल व्यवसाय की यात्रा एक ठोस योजना से शुरू होती है। एक व्यापार योजना आपको स्पष्ट लक्ष्य निर्धारित करने, चुनौतियों का पूर्वानुमान लगाने और प्रगति को प्रभावी ढंग से मापने में मदद करती है। इस खंड में, हम चर्चा करेंगे कि कैसे एक संरचित योजना आपकी उद्यमशील यात्रा का मार्गदर्शन करने वाले रोडमैप के रूप में कार्य कर सकती है। जैसे एक बीज बोना, यह तैयारी, देखभाल और निरंतर प्रयास से बढ़ता है।"
        },
        "interactiveActivity": {
          "en": "Think about your business idea. Write down 2-3 main goals you want to achieve in the next year and reflect on the challenges you might face.",
          "hi": "अपने व्यवसायिक विचार के बारे में सोचें। उन 2-3 मुख्य लक्ष्यों को लिखें जिन्हें आप अगले वर्ष में प्राप्त करना चाहते हैं और जिन चुनौतियों का आप सामना कर सकते हैं, उस पर विचार करें।"
        },
        "learningObjectives": {
          "en": [
            "Understand why a business plan is essential.",
            "Learn how planning can address potential challenges.",
            "Feel motivated to create your own plan."
          ],
          "hi": [
            "समझें कि व्यापार योजना क्यों आवश्यक है।",
            "जानें कि योजना कैसे संभावित चुनौतियों का समाधान कर सकती है।",
            "अपनी योजना बनाने के लिए प्रेरित महसूस करें।"
          ]
        }
      },
      {
        "title": {
          "en": "Key Components of a Business Plan",
          "hi": "व्यापार योजना के मुख्य घटक"
        },
        "content": {
          "en": "A comprehensive business plan typically includes: an executive summary, business description, market research, organizational structure, product/service details, marketing strategy, and financial projections. Each of these elements serves a specific purpose. For example, market research helps you understand your customers and competition, while financial projections keep you on track with budgeting and profitability goals.",
          "hi": "एक व्यापक व्यापार योजना में आम तौर पर शामिल होते हैं: एक कार्यकारी सारांश, व्यापार विवरण, बाजार अनुसंधान, संगठनात्मक संरचना, उत्पाद/सेवा का विवरण, विपणन रणनीति और वित्तीय प्रक्षेपण। इनमें से प्रत्येक तत्व एक विशिष्ट उद्देश्य की पूर्ति करता है। उदाहरण के लिए, बाजार अनुसंधान आपको अपने ग्राहकों और प्रतिस्पर्धा को समझने में मदद करता है, जबकि वित्तीय प्रक्षेपण आपको बजट और लाभप्रदता लक्ष्यों के साथ ट्रैक पर रखता है।"
        },
        "interactiveActivity": {
          "en": "Identify one component you feel confident about and one you think will be challenging. Write down your thoughts to revisit later.",
          "hi": "एक ऐसा घटक पहचानें जिसमें आपको आत्मविश्वास हो और एक ऐसा जिसे आप चुनौतीपूर्ण मानते हैं। अपनी सोच को लिखें ताकि आप बाद में उसे दोबारा देख सकें।"
        },
        "learningObjectives": {
          "en": [
            "Identify the essential components of a business plan.",
            "Recognize how each component contributes to overall success."
          ],
          "hi": [
            "व्यापार योजना के मुख्य घटकों की पहचान करें।",
            "समझें कि प्रत्येक घटक कुल सफलता में कैसे योगदान देता है।"
          ]
        }
      },
      {
        "title": {
          "en": "Drafting Your Business Plan",
          "hi": "अपनी व्यापार योजना तैयार करना"
        },
        "content": {
          "en": "Now it’s time to put your ideas into action. Start by outlining the key sections of your plan and filling in details for each. Begin with the executive summary—a brief overview of your business idea, mission, and vision. Move on to describe your target market, the problem your business solves, and how it stands out from competitors.",
          "hi": "अब समय है कि आप अपने विचारों को कार्यान्वित करें। अपनी योजना के मुख्य खंडों का विवरण तैयार करके शुरू करें और प्रत्येक के लिए विवरण भरें। कार्यकारी सारांश से शुरू करें - अपने व्यवसायिक विचार, मिशन और दृष्टि का संक्षिप्त अवलोकन। अपने लक्षित बाजार का वर्णन करने के लिए आगे बढ़ें, आपके व्यवसाय द्वारा हल की जाने वाली समस्या और यह प्रतिस्पर्धियों से कैसे अलग है।"
        },
        "interactiveActivity": {
          "en": "Use the provided template to draft your business plan. Share a summary of your draft with your peers for feedback.",
          "hi": "प्रदान किए गए टेम्पलेट का उपयोग करके अपनी व्यापार योजना का मसौदा तैयार करें। अपने मसौदे का सारांश अपने साथियों के साथ साझा करें ताकि वे प्रतिक्रिया दे सकें।"
        },
        "learningObjectives": {
          "en": [
            "Learn to structure and draft a business plan.",
            "Develop confidence in presenting your ideas."
          ],
          "hi": [
            "एक व्यापार योजना को संरचित और मसौदा तैयार करना सीखें।",
            "अपने विचार प्रस्तुत करने में आत्मविश्वास विकसित करें।"
          ]
        }
      }
    ]
  },
    "Basic Accounting": {
    "title": {
      "en": "Basic Accounting: A Simple Guide for Beginners",
      "hi": "मूलभूत लेखांकन: शुरुआती के लिए एक सरल मार्गदर्शिका"
    },
    "overallGoal": {
      "en": "By the end of this module, you will understand the basics of accounting and be able to manage your financial records effectively.",
      "hi": "इस मॉड्यूल के अंत तक, आप लेखांकन की बुनियादी बातें समझेंगे और अपनी वित्तीय रिकॉर्ड को प्रभावी ढंग से प्रबंधित करने में सक्षम होंगे।"
    },
    "sections": [
      {
        "title": {
          "en": "Introduction: Understanding Accounting",
          "hi": "परिचय: लेखांकन को समझना"
        },
        "content": {
          "en": "Accounting is the language of business, allowing you to communicate the financial health of your operations. In this section, you’ll learn about the basic accounting equation: Assets = Liabilities + Equity. We'll explain how to classify financial transactions and keep accurate records to make informed business decisions.",
          "hi": "लेखांकन व्यवसाय की भाषा है, जो आपको अपने परिचालन की वित्तीय स्थिति को व्यक्त करने में मदद करता है। इस खंड में, आप लेखांकन समीकरण के बारे में जानेंगे: संपत्ति = देनदारियां + इक्विटी। हम यह समझाएंगे कि वित्तीय लेनदेन को कैसे वर्गीकृत किया जाए और सटीक रिकॉर्ड कैसे रखा जाए ताकि सूचित व्यापारिक निर्णय लिए जा सकें।"
        },
        "interactiveActivity": {
          "en": "List three assets, three liabilities, and your equity for your business. Use this list to see how the accounting equation balances.",
          "hi": "अपने व्यवसाय के लिए तीन संपत्तियों, तीन देनदारियों और अपनी इक्विटी की सूची बनाएं। इस सूची का उपयोग यह देखने के लिए करें कि लेखांकन समीकरण कैसे संतुलित होता है।"
        },
        "learningObjectives": {
          "en": [
            "Learn the fundamental concepts of accounting.",
            "Understand the accounting equation and its components.",
            "Gain the ability to classify basic financial transactions."
          ],
          "hi": [
            "लेखांकन के मौलिक विचारों को सीखें।",
            "लेखांकन समीकरण और इसके घटकों को समझें।",
            "मूल वित्तीय लेनदेन को वर्गीकृत करने की क्षमता प्राप्त करें।"
          ]
        }
      },
      {
        "title": {
          "en": "Recording Transactions: Income and Expenses",
          "hi": "लेनदेन रिकॉर्ड करना: आय और व्यय"
        },
        "content": {
          "en": "Recording financial transactions is crucial for maintaining accurate financial records. You’ll learn how to categorize transactions as income or expenses. For example, selling products generates income, while purchasing raw materials counts as an expense. By maintaining clear records, you can identify areas of profit and loss.",
          "hi": "वित्तीय लेनदेन को रिकॉर्ड करना सटीक वित्तीय रिकॉर्ड बनाए रखने के लिए महत्वपूर्ण है। आप यह जानेंगे कि लेनदेन को आय या व्यय के रूप में कैसे वर्गीकृत किया जाए। उदाहरण के लिए, उत्पादों की बिक्री आय उत्पन्न करती है, जबकि कच्चे माल की खरीद व्यय के रूप में गिनी जाती है। स्पष्ट रिकॉर्ड बनाए रखने से, आप लाभ और हानि के क्षेत्रों की पहचान कर सकते हैं।"
        },
        "interactiveActivity": {
          "en": "Keep a log of all your business transactions for one week. Categorize each as income or expense and calculate the total for both categories.",
          "hi": "एक सप्ताह के लिए अपने सभी व्यापारिक लेनदेन का लॉग रखें। प्रत्येक को आय या व्यय के रूप में वर्गीकृत करें और दोनों श्रेणियों के लिए कुल योग की गणना करें।"
        },
        "learningObjectives": {
          "en": [
            "Understand how to categorize financial transactions.",
            "Learn to maintain accurate records of income and expenses.",
            "Develop skills to calculate profit or loss."
          ],
          "hi": [
            "वित्तीय लेनदेन को वर्गीकृत करने का तरीका समझें।",
            "आय और व्यय के सटीक रिकॉर्ड बनाए रखना सीखें।",
            "लाभ या हानि की गणना करने का कौशल विकसित करें।"
          ]
        }
      },
      {
        "title": {
          "en": "Managing Financial Records",
          "hi": "वित्तीय रिकॉर्ड का प्रबंधन"
        },
        "content": {
          "en": "Organizing financial records is essential for the growth of your business. Learn how to use tools like ledgers or digital accounting software to store and track data efficiently. Regularly reviewing your financial records can help you identify patterns, spot discrepancies, and make better decisions.",
          "hi": "वित्तीय रिकॉर्ड को व्यवस्थित करना आपके व्यवसाय की वृद्धि के लिए आवश्यक है। डेटा को कुशलतापूर्वक संग्रहीत और ट्रैक करने के लिए लेजर या डिजिटल लेखांकन सॉफ़्टवेयर जैसे उपकरणों का उपयोग करना सीखें। अपने वित्तीय रिकॉर्ड की नियमित समीक्षा आपको पैटर्न पहचानने, विसंगतियों को पकड़ने और बेहतर निर्णय लेने में मदद कर सकती है।"
        },
        "interactiveActivity": {
          "en": "Choose a method for maintaining financial records (e.g., ledger, Excel, or software). Set up a sample record for a week’s transactions.",
          "hi": "वित्तीय रिकॉर्ड बनाए रखने के लिए एक विधि चुनें (जैसे, लेजर, एक्सेल, या सॉफ़्टवेयर)। एक सप्ताह के लेनदेन के लिए एक नमूना रिकॉर्ड सेट करें।"
        },
        "learningObjectives": {
          "en": [
            "Learn how to organize financial records effectively.",
            "Explore tools and methods for managing transactions.",
            "Understand the importance of regular financial reviews."
          ],
          "hi": [
            "वित्तीय रिकॉर्ड को प्रभावी ढंग से व्यवस्थित करना सीखें।",
            "लेनदेन प्रबंधन के लिए उपकरण और विधियों का अन्वेषण करें।",
            "नियमित वित्तीय समीक्षा के महत्व को समझें।"
          ]
        }
      }
    ]
  },
    "Accessing Agricultural Loan": {
    "title": {
      "en": "Accessing Agricultural Loan: A Comprehensive Guide",
      "hi": "कृषि ऋण तक पहुंच: एक व्यापक मार्गदर्शिका"
    },
    "overallGoal": {
      "en": "By the end of this module, you will know how to apply for agricultural loans and the benefits they provide for farmers.",
      "hi": "इस मॉड्यूल के अंत तक, आप जानेंगे कि कृषि ऋण के लिए कैसे आवेदन करें और ये किसानों के लिए क्या लाभ प्रदान करते हैं।"
    },
    "sections": [
      {
        "title": {
          "en": "Introduction: Understanding Agricultural Loans",
          "hi": "परिचय: कृषि ऋण को समझना"
        },
        "content": {
          "en": "Agricultural loans are financial tools designed to support farmers in their farming activities. These loans can be used for purchasing seeds, fertilizers, equipment, or even land. Understanding the types of loans available, such as short-term and long-term loans, can help farmers select the right financial product. This section provides an overview of agricultural loans, their benefits, and their role in promoting sustainable farming.",
          "hi": "कृषि ऋण किसानों की कृषि गतिविधियों का समर्थन करने के लिए बनाए गए वित्तीय उपकरण हैं। इन ऋणों का उपयोग बीज, उर्वरक, उपकरण, या यहां तक कि भूमि खरीदने के लिए किया जा सकता है। उपलब्ध ऋणों के प्रकारों को समझना, जैसे अल्पकालिक और दीर्घकालिक ऋण, किसानों को सही वित्तीय उत्पाद चुनने में मदद कर सकता है। यह खंड कृषि ऋणों का अवलोकन, उनके लाभ और सतत कृषि को बढ़ावा देने में उनकी भूमिका प्रदान करता है।"
        },
        "interactiveActivity": {
          "en": "List two challenges farmers face when applying for loans and suggest solutions for these challenges.",
          "hi": "किसानों को ऋण के लिए आवेदन करते समय आने वाली दो चुनौतियों की सूची बनाएं और इन चुनौतियों के लिए समाधान सुझाएं।"
        },
        "learningObjectives": {
          "en": [
            "Understand the concept and types of agricultural loans.",
            "Recognize the benefits of loans for farming activities.",
            "Learn about the role of financial institutions in agriculture."
          ],
          "hi": [
            "कृषि ऋण की अवधारणा और प्रकारों को समझें।",
            "कृषि गतिविधियों के लिए ऋण के लाभों को पहचानें।",
            "कृषि में वित्तीय संस्थानों की भूमिका के बारे में जानें।"
          ]
        }
      },
      {
        "title": {
          "en": "Applying for Agricultural Loans",
          "hi": "कृषि ऋण के लिए आवेदन करना"
        },
        "content": {
          "en": "Applying for an agricultural loan involves several steps. Farmers must gather documents like land ownership proof, bank account details, and income records. This section explains how to fill out loan application forms and approach banks or financial institutions. It also highlights common mistakes to avoid during the application process.",
          "hi": "कृषि ऋण के लिए आवेदन करने में कई चरण शामिल होते हैं। किसानों को भूमि स्वामित्व प्रमाण, बैंक खाता विवरण, और आय रिकॉर्ड जैसे दस्तावेज़ इकट्ठा करने चाहिए। यह खंड ऋण आवेदन फॉर्म भरने और बैंकों या वित्तीय संस्थानों से संपर्क करने के तरीके को समझाता है। यह आवेदन प्रक्रिया के दौरान सामान्य गलतियों को भी उजागर करता है।"
        },
        "interactiveActivity": {
          "en": "Prepare a checklist of documents required for an agricultural loan application. Share it with your group for review.",
          "hi": "कृषि ऋण आवेदन के लिए आवश्यक दस्तावेज़ों की एक चेकलिस्ट तैयार करें। समीक्षा के लिए इसे अपने समूह के साथ साझा करें।"
        },
        "learningObjectives": {
          "en": [
            "Learn the steps involved in applying for a loan.",
            "Understand the documentation process for agricultural loans.",
            "Avoid common mistakes during the application process."
          ],
          "hi": [
            "ऋण के लिए आवेदन करने में शामिल चरणों को जानें।",
            "कृषि ऋण के लिए दस्तावेज़ीकरण प्रक्रिया को समझें।",
            "आवेदन प्रक्रिया के दौरान सामान्य गलतियों से बचें।"
          ]
        }
      },
      {
        "title": {
          "en": "Loan Repayment and Benefits",
          "hi": "ऋण चुकौती और लाभ"
        },
        "content": {
          "en": "Timely repayment of agricultural loans is critical to maintaining financial credibility. Farmers should understand the repayment schedule and the penalties for delays. This section also discusses the benefits of loans, such as access to better farming tools, increased productivity, and financial security.",
          "hi": "कृषि ऋण की समय पर चुकौती वित्तीय साख बनाए रखने के लिए महत्वपूर्ण है। किसानों को चुकौती अनुसूची और देरी के लिए दंड को समझना चाहिए। यह खंड ऋणों के लाभों, जैसे बेहतर कृषि उपकरणों तक पहुंच, उत्पादकता में वृद्धि, और वित्तीय सुरक्षा पर भी चर्चा करता है।"
        },
        "interactiveActivity": {
          "en": "Create a sample repayment plan for a hypothetical loan and discuss its feasibility with your group.",
          "hi": "एक काल्पनिक ऋण के लिए एक नमूना चुकौती योजना बनाएं और इसकी व्यवहार्यता पर अपने समूह के साथ चर्चा करें।"
        },
        "learningObjectives": {
          "en": [
            "Understand the importance of timely repayment.",
            "Learn about repayment schedules and penalties.",
            "Explore the benefits of loans for agricultural development."
          ],
          "hi": [
            "समय पर चुकौती के महत्व को समझें।",
            "चुकौती अनुसूची और दंड के बारे में जानें।",
            "कृषि विकास के लिए ऋण के लाभों का अन्वेषण करें।"
          ]
        }
      }
    ]
  },
    "How to plan a budget?": {
    "title": {
      "en": "How to Plan a Budget? A Step-by-Step Guide",
      "hi": "कैसे बजट बनाएं? एक कदम दर कदम मार्गदर्शिका"
    },
    "overallGoal": {
      "en": "By the end of this module, you will know how to create a budget, manage expenses, and save for future goals.",
      "hi": "इस मॉड्यूल के अंत तक, आप जानेंगे कि बजट कैसे बनाएं, खर्चों का प्रबंधन कैसे करें, और भविष्य के लक्ष्यों के लिए बचत कैसे करें।"
    },
    "sections": [
      {
        "title": {
          "en": "Introduction: The Importance of Budgeting",
          "hi": "परिचय: बजट बनाने का महत्व"
        },
        "content": {
          "en": "Budgeting is a powerful financial tool that helps you plan your spending, avoid debt, and save for future needs. It involves analyzing your income, categorizing your expenses, and setting aside money for your priorities. Effective budgeting empowers you to live within your means while achieving both short-term and long-term financial goals.",
          "hi": "बजट बनाना एक शक्तिशाली वित्तीय उपकरण है जो आपको अपने खर्च की योजना बनाने, कर्ज से बचने, और भविष्य की जरूरतों के लिए बचत करने में मदद करता है। इसमें आपकी आय का विश्लेषण, आपके खर्चों को वर्गीकृत करना, और आपकी प्राथमिकताओं के लिए धन अलग रखना शामिल है। प्रभावी बजट बनाना आपको अपनी आय के भीतर रहते हुए अल्पकालिक और दीर्घकालिक वित्तीय लक्ष्यों को प्राप्त करने का अधिकार देता है।"
        },
        "interactiveActivity": {
          "en": "List three reasons why budgeting is important in your life. Discuss with a partner how budgeting can help achieve your goals.",
          "hi": "अपने जीवन में बजट बनाने के तीन कारण सूचीबद्ध करें। एक साथी के साथ चर्चा करें कि बजट कैसे आपके लक्ष्यों को प्राप्त करने में मदद कर सकता है।"
        },
        "learningObjectives": {
          "en": [
            "Understand the basics of budgeting.",
            "Learn how to track income and expenses.",
            "Feel confident in planning your finances."
          ],
          "hi": [
            "बजट बनाने की बुनियादी बातें समझें।",
            "आय और व्यय का ट्रैक रखने का तरीका सीखें।",
            "अपने वित्तीय योजना में आत्मविश्वास महसूस करें।"
          ]
        }
      },
      {
        "title": {
          "en": "Step 1: Analyze Your Income and Expenses",
          "hi": "चरण 1: अपनी आय और खर्चों का विश्लेषण करें"
        },
        "content": {
          "en": "The first step in budgeting is understanding your financial situation. Start by listing all sources of income, such as salary, freelance work, or business earnings. Next, categorize your expenses into fixed expenses (like rent and utilities) and variable expenses (like groceries and entertainment). This helps identify areas where you can cut costs and save money.",
          "hi": "बजट बनाने का पहला कदम आपकी वित्तीय स्थिति को समझना है। सभी आय स्रोतों को सूचीबद्ध करके शुरू करें, जैसे वेतन, फ्रीलांस कार्य, या व्यवसाय से आय। फिर अपने खर्चों को निश्चित खर्चों (जैसे किराया और उपयोगिता) और परिवर्तनीय खर्चों (जैसे किराने का सामान और मनोरंजन) में वर्गीकृत करें। यह उन क्षेत्रों की पहचान करने में मदद करता है जहां आप लागत को कम कर सकते हैं और पैसे बचा सकते हैं।"
        },
        "interactiveActivity": {
          "en": "Prepare a list of your income and expenses for the last month. Categorize them as fixed or variable expenses.",
          "hi": "पिछले महीने की अपनी आय और खर्चों की एक सूची तैयार करें। उन्हें निश्चित या परिवर्तनीय खर्चों के रूप में वर्गीकृत करें।"
        },
        "learningObjectives": {
          "en": [
            "Identify sources of income and categorize expenses.",
            "Understand the difference between fixed and variable expenses.",
            "Find areas for potential savings."
          ],
          "hi": [
            "आय के स्रोतों की पहचान करें और खर्चों को वर्गीकृत करें।",
            "निश्चित और परिवर्तनीय खर्चों के बीच अंतर समझें।",
            "संभावित बचत के क्षेत्रों को खोजें।"
          ]
        }
      },
      {
        "title": {
          "en": "Step 2: Set Financial Goals and Create a Budget",
          "hi": "चरण 2: वित्तीय लक्ष्य निर्धारित करें और बजट बनाएं"
        },
        "content": {
          "en": "Define your financial goals, such as saving for emergencies, paying off debt, or planning for a vacation. Allocate your income to cover necessary expenses, savings, and discretionary spending. Use tools like the 50/30/20 rule, where 50% of your income goes to needs, 30% to wants, and 20% to savings or debt repayment.",
          "hi": "अपने वित्तीय लक्ष्यों को परिभाषित करें, जैसे आपात स्थिति के लिए बचत करना, कर्ज चुकाना, या छुट्टी की योजना बनाना। आवश्यक खर्चों, बचत, और वैकल्पिक खर्चों को कवर करने के लिए अपनी आय आवंटित करें। 50/30/20 नियम जैसे उपकरणों का उपयोग करें, जिसमें 50% आय आवश्यकताओं के लिए, 30% इच्छाओं के लिए, और 20% बचत या कर्ज चुकाने के लिए होती है।"
        },
        "interactiveActivity": {
          "en": "Using the 50/30/20 rule, allocate your current monthly income into needs, wants, and savings. Compare with your current spending habits.",
          "hi": "50/30/20 नियम का उपयोग करते हुए, अपनी वर्तमान मासिक आय को आवश्यकताओं, इच्छाओं और बचत में विभाजित करें। अपनी वर्तमान खर्च करने की आदतों की तुलना करें।"
        },
        "learningObjectives": {
          "en": [
            "Set realistic financial goals.",
            "Learn how to allocate income effectively.",
            "Use budgeting tools to simplify the process."
          ],
          "hi": [
            "यथार्थवादी वित्तीय लक्ष्य निर्धारित करें।",
            "आय को प्रभावी ढंग से आवंटित करना सीखें।",
            "प्रक्रिया को सरल बनाने के लिए बजट उपकरणों का उपयोग करें।"
          ]
        }
      },
      {
        "title": {
          "en": "Step 3: Monitor and Adjust Your Budget",
          "hi": "चरण 3: अपने बजट की निगरानी करें और समायोजित करें"
        },
        "content": {
          "en": "A budget is not static; it requires regular monitoring. Track your spending weekly or monthly to ensure you are staying on track. Adjust your budget as needed to account for changes in income or unexpected expenses. Budgeting apps and tools can help automate this process.",
          "hi": "बजट स्थिर नहीं होता; इसे नियमित निगरानी की आवश्यकता होती है। यह सुनिश्चित करने के लिए अपने खर्चों को साप्ताहिक या मासिक रूप से ट्रैक करें कि आप सही रास्ते पर हैं। आय में बदलाव या अप्रत्याशित खर्चों को समायोजित करने के लिए अपने बजट को आवश्यकतानुसार समायोजित करें। बजटिंग ऐप्स और उपकरण इस प्रक्रिया को स्वचालित करने में मदद कर सकते हैं।"
        },
        "interactiveActivity": {
          "en": "Download a budgeting app and use it to track your expenses for one week. Share your experience with the group.",
          "hi": "एक बजटिंग ऐप डाउनलोड करें और इसे एक सप्ताह के लिए अपने खर्चों को ट्रैक करने के लिए उपयोग करें। अपने अनुभव को समूह के साथ साझा करें।"
        },
        "learningObjectives": {
          "en": [
            "Understand the importance of monitoring budgets.",
            "Learn to adapt budgets for changing circumstances.",
            "Use tools and apps for easier budget management."
          ],
          "hi": [
            "बजट की निगरानी के महत्व को समझें।",
            "परिस्थितियों के बदलने पर बजट को अनुकूलित करना सीखें।",
            "आसान बजट प्रबंधन के लिए उपकरणों और ऐप्स का उपयोग करें।"
          ]
        }
      }
    ]
  },
    "Managing Debt": {
  "title": {
    "en": "Managing Debt: A Guide to Financial Freedom",
    "hi": "ऋण प्रबंधन: वित्तीय स्वतंत्रता की एक मार्गदर्शिका"
  },
  "overallGoal": {
    "en": "By the end of this module, you will know how to manage debt, reduce financial stress, and create a plan to become debt-free.",
    "hi": "इस मॉड्यूल के अंत तक, आप जानेंगे कि ऋण का प्रबंधन कैसे करें, वित्तीय तनाव को कम करें, और ऋण मुक्त बनने के लिए एक योजना बनाएं।"
  },
  "sections": [
    {
      "title": {
        "en": "Introduction: Overcoming the Burden of Debt",
        "hi": "परिचय: ऋण के बोझ को कम करना"
      },
      "content": {
        "en": "Managing debt is crucial for achieving financial freedom. This module explains how to prioritize debt repayment, manage multiple debts, and build a plan to eliminate debt over time. Debt can be overwhelming, but with a structured approach, you can regain control of your finances and reduce financial stress.",
        "hi": "ऋण का प्रबंधन वित्तीय स्वतंत्रता प्राप्त करने के लिए महत्वपूर्ण है। यह मॉड्यूल समझाता है कि ऋण भुगतान को प्राथमिकता कैसे दें, कई ऋणों का प्रबंधन कैसे करें, और समय के साथ ऋण को समाप्त करने के लिए एक योजना कैसे बनाएं। ऋण बोझिल हो सकता है, लेकिन एक संरचित दृष्टिकोण के साथ, आप अपने वित्तीय स्थिति पर नियंत्रण पुनः प्राप्त कर सकते हैं और वित्तीय तनाव को कम कर सकते हैं।"
      },
      "interactiveActivity": {
        "en": "Create a debt repayment plan for yourself by listing all your debts, their interest rates, and monthly payments. Then prioritize them using either the snowball method (paying smallest debts first) or avalanche method (paying highest interest debts first). Share your approach with the group.",
        "hi": "अपनी सभी ऋणों, उनकी ब्याज दरों और मासिक भुगतान की सूची बनाकर अपने लिए एक ऋण चुकौती योजना बनाएं। फिर उन्हें प्राथमिकता दें - स्नोबॉल विधि (सबसे छोटे ऋण पहले चुकाएं) या एवलांच विधि (सबसे अधिक ब्याज वाले ऋण पहले चुकाएं) का उपयोग करके। अपने दृष्टिकोण को समूह के साथ साझा करें।"
      },
      "learningObjectives": {
        "en": [
          "Understand the importance of managing debt.",
          "Learn strategies to reduce debt.",
          "Feel empowered to take control of your finances."
        ],
        "hi": [
          "ऋण का प्रबंधन करने का महत्व समझें।",
          "ऋण को कम करने की रणनीतियां जानें।",
          "अपने वित्तीय स्थिति पर नियंत्रण पाने के लिए प्रेरित महसूस करें।"
        ]
      }
    },
    {
      "title": {
        "en": "Strategies to Reduce Debt",
        "hi": "ऋण को कम करने की रणनीतियां"
      },
      "content": {
        "en": "There are several methods to reduce debt effectively. These include creating a budget to identify areas for saving, negotiating with creditors for lower interest rates, and consolidating debts to simplify repayments. It's essential to stick to a repayment plan and avoid accumulating more debt.",
        "hi": "ऋण को प्रभावी रूप से कम करने के लिए कई तरीके हैं। इनमें बचत के लिए क्षेत्रों की पहचान करने के लिए बजट बनाना, कर्जदाताओं से ब्याज दर कम करने के लिए बातचीत करना, और भुगतान को सरल बनाने के लिए ऋणों का समेकन शामिल है। एक चुकौती योजना का पालन करना और अधिक ऋण से बचना आवश्यक है।"
      },
      "interactiveActivity": {
        "en": "Write down three steps you can take immediately to reduce your debt. Discuss these steps with a partner and create an action plan for the next three months.",
        "hi": "तीन कदम लिखें जो आप तुरंत अपने ऋण को कम करने के लिए उठा सकते हैं। इन कदमों पर एक साथी के साथ चर्चा करें और अगले तीन महीनों के लिए एक कार्य योजना बनाएं।"
      },
      "learningObjectives": {
        "en": [
          "Learn practical methods to minimize debt.",
          "Understand how to negotiate with creditors.",
          "Build a disciplined repayment habit."
        ],
        "hi": [
          "ऋण को कम करने के व्यावहारिक तरीके जानें।",
          "कर्जदाताओं के साथ बातचीत कैसे करें, इसे समझें।",
          "एक अनुशासित चुकौती आदत बनाएं।"
        ]
      }
    },
    {
      "title": {
        "en": "Staying Debt-Free: Building Financial Habits",
        "hi": "ऋण-मुक्त रहना: वित्तीय आदतें बनाना"
      },
      "content": {
        "en": "Staying debt-free requires strong financial discipline. Build habits like saving regularly, avoiding unnecessary expenses, and having an emergency fund. These steps will help you maintain financial stability and avoid falling back into debt.",
        "hi": "ऋण-मुक्त रहना मजबूत वित्तीय अनुशासन की आवश्यकता है। नियमित रूप से बचत करना, अनावश्यक खर्चों से बचना, और आपातकालीन फंड रखना जैसी आदतें बनाएं। ये कदम आपको वित्तीय स्थिरता बनाए रखने और फिर से ऋण में पड़ने से बचने में मदद करेंगे।"
      },
      "interactiveActivity": {
        "en": "List three habits you can develop to stay debt-free and share them with your group. Discuss how to implement these habits in daily life.",
        "hi": "तीन आदतों की सूची बनाएं जो आप ऋण-मुक्त रहने के लिए विकसित कर सकते हैं और उन्हें अपने समूह के साथ साझा करें। इन आदतों को दैनिक जीवन में लागू करने के तरीके पर चर्चा करें।"
      },
      "learningObjectives": {
        "en": [
          "Build habits for financial stability.",
          "Understand the importance of an emergency fund.",
          "Feel confident in maintaining a debt-free lifestyle."
        ],
        "hi": [
          "वित्तीय स्थिरता के लिए आदतें बनाएं।",
          "आपातकालीन फंड के महत्व को समझें।",
          "ऋण-मुक्त जीवनशैली बनाए रखने में आत्मविश्वास महसूस करें।"
        ]
      }
    }
  ]
}
  };

async function seedDatabase() {
    try {
        console.log('Connecting to MongoDB...');
        await mongoose.connect(MONGODB_URI);
        console.log('Connected successfully to MongoDB');
        
        // Clear existing data
        console.log('Clearing existing data...');
        await Content.deleteMany({});
        
        // Convert data to documents
        const documents = Object.entries(initialData).map(([key, value]) => ({
            _id: key,
            ...value
        }));
        
        // Insert the documents
        console.log('Inserting new data...');
        await Content.insertMany(documents);
        
        console.log('Database seeded successfully');
        process.exit(0);
    } catch (err) {
        console.error('Error seeding database:', err);
        console.error('Error details:', err.message);
        process.exit(1);
    }
}

seedDatabase();