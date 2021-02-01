import mongoose from 'mongoose';

import app from './app';
import { CLEAN_DB, DATABASE_URL, PORT } from './constants/settings.constant';

app.listen(PORT, () => {
    mongoose.connect(DATABASE_URL, { useNewUrlParser: true, useUnifiedTopology: true })
    .then(() => {
        console.info("MongoDB connection has successfull!")
    }).catch(err => {
        console.error("MongoDB connection don't has successfull!")
    })
    
    console.info(`Server started on address http://localhost:${PORT}`)
})