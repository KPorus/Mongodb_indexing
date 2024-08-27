import mongoose, { Schema, Document } from 'mongoose';

interface IUser extends Document {
    id: number;
    name: string;
    email: string;
    age: number;
    address: string;
    phone: string;
    job: string;
    company: string;
    username: string;
    created_at: Date;
}

const UserSchema: Schema = new Schema({
    id: { type: Number, required: true, unique: true },
    name: { type: String, required: true },
    email: { type: String, required: true },
    age: { type: Number, required: true },
    address: { type: String, required: true },
    phone: { type: String, required: true },
    job: { type: String, required: true },
    company: { type: String, required: true },
    username: { type: String, required: true },
    created_at: { type: Date, required: true, default: Date.now },
});

UserSchema.index({id:1})

export const User = mongoose.model<IUser>('users', UserSchema);

