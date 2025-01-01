import express from 'express';
import dotenv from 'dotenv';
import cors from 'cors';
import OpenAI from 'openai';

dotenv.config();

const app = express();
const port = process.env.PORT || 5000;

// Middleware setup
app.use(cors());
app.use(express.json());

// OpenAI SDK initialization
const openai = new OpenAI({
  apiKey: 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,
  baseURL: 'https://integrate.api.nvidia.com/v1',
});

app.post('/api/chat', async (req, res) => {
  const userMessage = req.body.message;

  if (!userMessage) {
    return res.status(400).json({ error: 'Message is required.' });
  }

  if (!process.env.NVIDIA_API_KEY) {
    return res.status(500).json({ error: 'NVIDIA_API_KEY is missing in environment variables.' });
  }

  try {
    const completion = await openai.chat.completions.create({
      model: 'nvidia/nemotron-4-mini-hindi-4b-instruct',
      messages: [{ role: 'user', content: userMessage }],
      max_tokens: 1024,
      temperature: 0.5,
      top_p: 1,
      stream: true,
    });

    // Stream the response back to the client
    res.setHeader('Content-Type', 'text/plain; charset=utf-8');
    for await (const chunk of completion) {
      res.write(chunk.choices[0]?.delta?.content || '');
    }
    res.end();
  } catch (error) {
    console.error('Error in /api/chat route:', error.message);
    res.status(500).json({
      error: `Internal Server Error: ${error.message}`,
      details: error.details || 'No additional details available',
    });
  }
});

// Start the server
app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
