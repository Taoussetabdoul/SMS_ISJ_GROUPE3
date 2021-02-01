import app from './app';
import { CLEAN_DB, PORT } from './constants/settings.constant';
import models from './models';
import db from './models/connection';


/* (async () => {
    if (db && CLEAN_DB) {
        await Promise.all([
            models.User.deleteMany()
        ])
    }
})() */
app.listen(PORT, () => console.log(`Listening on port ${PORT}`))