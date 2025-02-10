import express from 'express';
import mongoose from 'mongoose';
import cors from 'cors';
import dotenv from 'dotenv';
import { fileURLToPath } from 'url';
import { dirname } from 'path';
import router from './routes/route.js';
import userRouter from './routes/UserRoute.js';

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

dotenv.config();

const app = express();

app.use(cors());
app.use(express.json());

// Database connection options
const dbOptions = {
    useNewUrlParser: true,
    useUnifiedTopology: true,
    connectTimeoutMS: 30000,  // 30 seconds timeout
    socketTimeoutMS: 45000    // 45 seconds socket timeout
};

// Connect to LearningPath Database
const learningPathDB = mongoose.createConnection(
    process.env.LEARNING_PATH_DB_URI || 'mongodb+srv://prableensingh0401:prabhleen0401@learningpath.lm54g.mongodb.net/learningpath?retryWrites=true&w=majority',
    dbOptions
);

// Connect to Users Database
const usersDB = mongoose.createConnection(
    process.env.USERS_DB_URI || 'mongodb+srv://prableensingh0401:prabhleen0401@learningpath.lm54g.mongodb.net/Users?retryWrites=true&w=majority',
    dbOptions
);

// Debugging: Log connection status
learningPathDB.on('connected', () => console.log('✅ Connected to LearningPath Database'));
learningPathDB.on('error', (err) => console.error('❌ LearningPath DB connection error:', err));
learningPathDB.on('disconnected', () => console.warn('⚠️ LearningPath DB disconnected'));

usersDB.on('connected', () => console.log('✅ Connected to Users Database'));
usersDB.on('error', (err) => console.error('❌ Users DB connection error:', err));
usersDB.on('disconnected', () => console.warn('⚠️ Users DB disconnected'));

setTimeout(async () => {
    try {
        const testCollection = learningPathDB.collection('contents'); // Change this to an actual collection name
        const testData = await testCollection.findOne();
        console.log('🔍 Sample Data from LearningPath:', testData);
    } catch (err) {
        console.error('❌ MongoDB Query Error:', err);
    }
}, 5000);

app.use('/api/content', router);
app.use('/api/users', userRouter);

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => console.log(`🚀 Server running on port ${PORT}`));

export { learningPathDB, usersDB };
