
const mongoose = require('mongoose');
const { users, thoughts } = require('./data');
const User = require('../models/User');
const Thought = require('../models/Thought');

async function seedDatabase() {
    try {
        await mongoose.connect('mongodb://localhost:27017/', {
            useNewUrlParser: true,
            useUnifiedTopology: true,
        });

        await User.deleteMany();
        await Thought.deleteMany();

        await User.create(users);
        await Thought.create(thoughts);

        console.log('Database seeded successfully.');
    } catch (error) {
        console.error('Error seeding database:', error);
    } finally {
        await mongoose.disconnect();
    }
}

seedDatabase();
