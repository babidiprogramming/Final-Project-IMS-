
const mongoose = require('mongoose');
mongoose.set('strictQuery', false);
const connectDB = async() => {
    try{
        const conn = await mongoose.connect('mongodb://127.0.0.1:27017/inventory');
        console.log(`Database Connected: ${conn.connection.host}`);
    }
    catch(error){
        console.log(error);
    }
}

module.exports = connectDB;