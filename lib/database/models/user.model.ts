import { Document, Schema, model, models } from "mongoose";

export interface IUser extends Document {
    email?: string;
    username?: string;
    clerkId?: string; 
    firstName?: string;
    lastName?: string; 
    photo?: string; 
    planId?: number; 
    creditBalance?: number;
    createdAt?: Date;
    updatedAt?: Date;
}

const UserSchema = new Schema({
    email: { type: String, required: true, unique: true },
    username: { type: String, required: true, unique: true },
    clerkId: { type: String, required: true, unique: true },
    firstName: { type: String },
    lastName: { type: String },
    photo: { type: String, required: true },
    planId: { type: Number, default: 1 },
    creditBalance: { type: Number, default: 10 },
    createdAt: { type: Date, default: Date.now },
    updatedAt: { type: Date, default: Date.now }
});

const User = models?.User || model('User', UserSchema)

export default User