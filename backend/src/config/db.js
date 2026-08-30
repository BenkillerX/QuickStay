import mongoose from 'mongoose'

export const connectDb = async ()=>{
    try {
        const conn = await mongoose.connect(process.env.MONGODN_URI)
        console.log('Mongodb connected successfully');
        
    } catch (error) {
        console.error(`Error connecting to MongoDB: ${error.message}`)
        process.exit(1)
    }
}