import mongoose from "mongoose";



const dbConnect = async () => {
    const res = await mongoose.connect(process.env.MONGO_URI);

    if(res){
        console.log(`MongoDB connection success`);
        return true
    }else{
        console.log(`MongoDB connection failed`);
        return false
    }
}

export default dbConnect