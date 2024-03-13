
import mongoose from 'mongoose'
import { MONGO_URI } from '../config'

// mongoose.connect(MONGO_URI).then(result => {
//   // console.log(result);
//   console.log('DB connection established');
  
// }).catch(err => console.log('Error:', err));

export default async() => {
    try {
        await mongoose.connect(MONGO_URI)
        console.log("DB connection established")
    } catch (error) {
        console.log("error "+ error);
        
    }
}