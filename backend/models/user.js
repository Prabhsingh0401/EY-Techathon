import mongoose from 'mongoose';

const usersDB = mongoose.createConnection(
    'mongodb+srv://prableensingh0401:prabhleen0401@learningpath.lm54g.mongodb.net/Users?retryWrites=true&w=majority&appName=LearningPath',
    { useNewUrlParser: true, useUnifiedTopology: true }
);

const UserSchema = new mongoose.Schema({
    name: { type: String, required: true, trim: true },
    age: { type: Number, required: true, min: 1 },
    state: { type: String, required: true, trim: true }
}, { timestamps: true }); 

const User = usersDB.model('User', UserSchema);
export default User;
