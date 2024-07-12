import mongoose from 'mongoose';

const connectDB = async ()=>{
    try {
        const connectionResponse = await mongoose.connect(process.env.DB_URL)
        console.log(`\n MongoDB connected at ${connectionResponse.connection.host}`);
    } catch (err) {
        console.log("Error : "+err);
        process.exit(1)
    }
}

export default connectDB

