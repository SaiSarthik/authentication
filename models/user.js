import mongoose from 'mongoose';

const userSchema = new mongoose.Schema({
    name : {type : 'string', required: true, trim : true},
    email : {type : 'string', required: true, trim : true, unique : true},
    password : {type : 'string', required: true, trim : true},
    join : {type: Date, default: Date.now()},
})




const userModel = mongoose.model('user', userSchema);



export default userModel;