import mongoose from 'mongoose';
import { DATABASE_URL } from '../constants/settings.constant';

let db:any = null

try {
    db = mongoose.createConnection(DATABASE_URL, {useNewUrlParser: true});
} catch (error) {
    console.log(error)
}

export default db;