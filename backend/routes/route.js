import express from 'express';
import Content from '../models/content.js';
import User from '../models/user.js';

const router = express.Router();

router.get('/', async (req, res) => {
    try {
        const content = await Content.find();
        res.json(content);
    } catch (err) {
        res.status(500).json({ message: err.message });
    }
});

router.get('/:id', async (req, res) => {
    try {
        const content = await Content.findById(req.params.id);
        if (content) {
            res.json(content);
        } else {
            res.status(404).json({ message: 'Content not found' });
        }
    } catch (err) {
        res.status(500).json({ message: err.message });
    }

    
});

export default router;