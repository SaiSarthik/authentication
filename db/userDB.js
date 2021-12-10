import mongoose from 'mongoose';

const connectDB = async(db_URL) =>{
    try {
        const dboptions = {
            dbName : 'blogdb'
        }
        await mongoose.connect(db_URL, dboptions);
        console.log('connected to DB successfully');

    } catch (error) {
        console.log(error);
    }
}

export default connectDB;