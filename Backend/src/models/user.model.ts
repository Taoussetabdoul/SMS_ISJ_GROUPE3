import mongoose from 'mongoose';
import db from './connection';

// Crée le schéma de validation des données d'un utilisateur
const userSchema = new mongoose.Schema(
    {
        username: {
            type: String,
            unique: true,
            required: true
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
const User = db.model('User', userSchema);

export default User;