import express from 'express';
import dotenv from 'dotenv';
import cors from 'cors';
import axios from 'axios';

dotenv.config();

const app = express();
const port = process.env.PORT || 5000;

app.use(cors());
app.use(express.json());

// Function to check if the message is finance-related
const isFinanceRelated = (message) => {
  const financeKeywords = [
    'finance', 'money', 'investment', 'stock', 'market', 'banking', 
    'savings', 'budget', 'economy', 'financial', 'revenue', 'profit', 
    'expense', 'capital', 'trade', 'asset', 'wealth', 'portfolio', 
    'income', 'loan', 'debt', 'credit', 'mortgage', 'insurance', 
    'entrepreneurship', 'startup', 'business plan', 'funding', 
    'financial literacy', 'financial planning', 'economic', 
    'investment strategy', 'personal finance', 'financial goal', 
    'financial education' , 'business'
  ];

  const lowercaseMessage = message.toLowerCase();

  return financeKeywords.some(keyword => 
    lowercaseMessage.includes(keyword)
  );
};

app.post('/api/chat', async (req, res) => {
  const userMessage = req.body.message;

  if (!userMessage) {
    return res.status(400).send({ error: 'Message is required.' });
  }

  // Check if the message is finance-related
  if (!isFinanceRelated(userMessage)) {
    return res.status(400).send({ 
      error: 'Sorry, I can only assist with finance-related queries. Please ask a question about finance, business, investment, or economic topics.' 
    });
  }

  try {
    const options = {
      method: 'POST',
      url: 'https://integrate.api.nvidia.com/v1/chat/completions',
      headers: {
        accept: 'application/json',
        'content-type': 'application/json',
        authorization: 'Bearer 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'
      },    
      data: {
        model: 'nvidia/nemotron-4-mini-hindi-4b-instruct',
        max_tokens: 1024,
        stream: false,
        temperature: 0.5,
        top_p: 1,
        stop: null,
        frequency_penalty: 0,
        presence_penalty: 0,
        seed: 0,
        messages: [
          { role: 'user', content: userMessage }
        ]
      },
    };

    const response = await axios.request(options);

    return res.status(200).json({ message: response.data.choices[0].message.content });
  } catch (error) {
    console.error("Error in chat request:", error);

    return res.status(500).send({
      error: `Internal Server Error: ${error.message}`,
      details: error.response?.data || 'No details available',
    });
  }
});

app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});