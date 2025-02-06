import express from 'express';
import mongoose from 'mongoose';
import cors from 'cors';
import dotenv from 'dotenv';
import { fileURLToPath } from 'url';
import { dirname } from 'path';
import router from './routes/route.js';
import userRouter from './routes/userRoute.js'; // Separate routes for users

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

dotenv.config();

const app = express();

app.use(cors());
app.use(express.json());

// Connect to LearningPath Database
const learningPathDB = mongoose.createConnection(
    'mongodb+srv://prableensingh0401:prabhleen0401@learningpath.lm54g.mongodb.net/learningpath?retryWrites=true&w=majority&appName=LearningPath',
    { useNewUrlParser: true, useUnifiedTopology: true }
);

// Connect to Users Database
const usersDB = mongoose.createConnection(
    'mongodb+srv://prableensingh0401:prabhleen0401@learningpath.lm54g.mongodb.net/Users?retryWrites=true&w=majority&appName=LearningPath',
    { useNewUrlParser: true, useUnifiedTopology: true }
);

learningPathDB.on('error', console.error.bind(console, 'LearningPath DB connection error:'));
learningPathDB.once('open', () => {
    console.log('Connected to LearningPath Database');
});

usersDB.on('error', console.error.bind(console, 'Users DB connection error:'));
usersDB.once('open', () => {
    console.log('Connected to Users Database');
});

// Middleware for routes
app.use('/api/content', router); // LearningPath-related routes
app.use('/api/users', userRouter); // User-related routes

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});

// Export the database connections
export { learningPathDB, usersDB };
