const mongoose = require('mongoose');
const { User: user, Thought: thought } = require('./data');
const User = require('../models/User');
const Thought = require('../models/Thought');

mongoose.connect('mongodb://localhost:27017/social-c18', {
    useNewUrlParser: true,
    useUnifiedTopology: true,
});

async function seedDatabase() {
    try {
        // Delete existing documents first
        await User.deleteMany();
        await Thought.deleteMany();

        // Create and save new documents
        await User.create(user);
        await Thought.create(thought);

        console.log('Database seeded successfully');
    } catch (error) {
        console.error('Error seeding database:', error);
    } finally {
        mongoose.disconnect();
    }
}

seedDatabase();
