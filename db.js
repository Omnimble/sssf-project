import mongoose from 'mongoose';
import dotenv from 'dotenv';
import 'dotenv/config.js';

const connectMongo = async() => {
    try {
        await mongoose.connect(process.env.MONGODB_URI, {
            useNewUrlParser: true,
            useFindAndModify: false,
            useCreateIndex: true,
            useUnifiedTopology: true
        });
        console.log('Connected to the database!');
    } catch (error) {
        console.log(`Error while connecting to the database: ${error.message}`);
    }
};

export default connectMongo;