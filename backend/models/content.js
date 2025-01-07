// backend/models/Content.js
import mongoose from 'mongoose';

const sectionSchema = new mongoose.Schema({
    title: {
        en: String,
        hi: String
    },
    content: {
        en: String,
        hi: String
    },
    interactiveActivity: {
        en: String,
        hi: String
    },
    learningObjectives: {
        en: [String],
        hi: [String]
    }
});

const contentSchema = new mongoose.Schema({
    _id: String,
    title: {
        en: String,
        hi: String
    },
    overallGoal: {
        en: String,
        hi: String
    },
    sections: [sectionSchema]
});

const Content = mongoose.model('Content', contentSchema);

export default Content;