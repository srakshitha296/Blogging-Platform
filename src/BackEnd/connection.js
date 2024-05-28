const MONGO_URI = 'mongodb+srv://srakshitha296:srakshitha@cluster0.54p6coa.mongodb.net/blog'
const mongoose = require('mongoose')
const connectDB = async () => {
    try {
        const conn = await mongoose.connect(MONGO_URI)
        console.log('-:DataBase Connection Successfull:-');
    } catch (error) {
        console.log(error);
    }
}

module.exports = connectDB