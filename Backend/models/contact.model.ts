import mongoose from 'mongoose';
import { userSchema } from './user.model';

export const contactSchema = new mongoose.Schema(
    {
        name: {
            type: String,
            required: true,
        },
        phoneNumber: {
            type: String,
            required: true,
        },
        user: {
            // type: userSchema,
            type: Number,
            required: true
        }
    },
    { timestamps: true },
);

const Contact = mongoose.model('Contact', contactSchema);

export default Contact;