import mongoose from 'mongoose';
import colors from 'colors';


const DBConnect= async()=>{
    try {
await mongoose.connect(process.env.MONGODB_URL);
console.log("connection successfully");
        
    } catch (error) {
        console.log("Mongo Connection error "+ error)
    }
}
export default  DBConnect;