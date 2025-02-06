import express from 'express';
import User from '../models/user.js';

const router = express.Router();

router.post('/register', async (req, res) => {
    try {
        const { name, age, state } = req.body;

        if (!name || !age || !state) {
            return res.status(400).json({ error: 'Name, age, and state are required' });
        }

        // Check if user already exists
        const existingUser = await User.findOne({ name, state });
        if (existingUser) {
            return res.status(409).json({ error: 'User already registered' });
        }

        const newUser = new User({ name, age, state });
        await newUser.save();

        res.status(201).json({ message: 'User registered successfully', user: newUser });
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
});

router.get('/', async (req, res) => {
    try {
        const users = await User.find().lean();
        res.status(200).json(users);
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
});

export default router;
