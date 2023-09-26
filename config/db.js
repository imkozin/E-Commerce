import mongoose from 'mongoose';
import dotenv from 'dotenv';

dotenv.config()

const connectDatabase = async () => {
    try {
        const conn = await mongoose.connect(process.env.MONGO_URL, {
          useUnifiedTopology: true,
          useNewUrlParser: true,
        })
        console.log('Mongo connected');
    } catch (err) {
        console.log(`Error : ${err.message}`);
        process.exit(1);
    }
}

export default connectDatabase;