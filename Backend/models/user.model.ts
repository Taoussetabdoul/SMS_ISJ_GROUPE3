import mongoose from 'mongoose';

// creating user schema
export const userSchema = new mongoose.Schema(
    {
        name: {
            type: String,
            required: true
        },
        email: {
            type: String,
            unique: true,
            required: true
        },
        phoneNumber: {
            type: String,
            unique: true,
            required: true
        },
        country: {
            type: String,
            default: "Cameroun"
        },
        login: {
            type: String,
            unique: true,
            required: true
        },
        password: {
            type: String,
            required: true
        },
        emailVerified: {
            type: Boolean,
            default: false
        },
        phoneNumberVerified: {
            type: Boolean,
            default: false
        }
    },
    { timestamps: true },
);

// On ajoute au schema une méthode `findByUsername` pour récuperer un utilisateur via username
/* userSchema.statics.findByUsername = async function(username) {
    let user = await this.findOne({username});
    return user;
}; */

// On crée le modèle User
const User = mongoose.model('User', userSchema);

export default User;