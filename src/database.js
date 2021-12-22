
import mongoose from 'mongoose';

// const url = 'mongodb://localhost:27017/rollingnews';
const url = 'mongodb+srv://grupo1:rollingnews@rollingnews.5l6ke.mongodb.net/rollingnews';

mongoose.connect(url,{useNewUrlParser:true});
 
const connection = mongoose.connection;

connection.once('open',()=>{
    console.log('DB CONECTED');
});