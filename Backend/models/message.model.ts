import mongoose from 'mongoose';
import { contactSchema } from './contact.model';
import { userSchema } from './user.model'

export const messageSchema = new mongoose.Schema(
    {
        // from: userSchema,
        from: String,
        to: {
            // type: contactSchema,
            type: String,
            required: true
        },
        dateTime: {
            type: Date,
            default: Date.now()
        },
        message: {
            type: String,
            default: "Cameroun"
        }
    },
    { timestamps: true },
);

const Message = mongoose.model('Message', messageSchema);

export default Message;