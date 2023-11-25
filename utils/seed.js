const mongoose = require('mongoose');
const { User, Thought } = require('./data');
const User = require('../models/User');
const Thought = require('../models/Thought');

async function seedDatabase() {
    const dbURI = 'mongodb://127.0.0.1/my_database';

    try {
        await mongoose.connect(dbURI, { useNewUrlParser: true, useUnifiedTopology: true });
        console.log('Connected to MongoDB');

        await User.deleteMany();
        await Thought.deleteMany();

        await User.create(users);
        await Thought.create(thoughts);

        console.log('Database seeded successfully.');
    } catch (error) {
        console.error('Error seeding database:', error);
    } finally {
        await mongoose.disconnect();
        console.log('Disconnected from MongoDB');
    }
}

seedDatabase();
