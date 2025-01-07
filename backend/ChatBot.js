import express from 'express';
import dotenv from 'dotenv';
import cors from 'cors';
import axios from 'axios';

dotenv.config();

const app = express();
const port = process.env.PORT || 5000;

app.use(cors());

app.use(express.json());

app.post('/api/chat', async (req, res) => {
  const userMessage = req.body.message;

  if (!userMessage) {
    return res.status(400).send({ error: 'Message is required.' });
  }

  try {
    const options = {
      method: 'POST',
      url: 'https://integrate.api.nvidia.com/v1/chat/completions',
      headers: {
        accept: 'application/json',
        'content-type': 'application/json',
        authorization: 'Bearer ${import.meta.env.VITE_NVIDIA_API_KEY}'
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

    // Make the API call to NVIDIA's model using Axios
    const response = await axios.request(options);

    // Send the response back to the client
    return res.status(200).json({ message: response.data.choices[0].message.content });
  } catch (error) {
    console.error("Error in chat request:", error);

    // Send detailed error information
    return res.status(500).send({
      error: `Internal Server Error: ${error.message}`,
      details: error.response?.data || 'No details available',
    });
  }
});

// Start the server
app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
