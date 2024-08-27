import mongoose, { Types } from 'mongoose';
import { User } from './userinfo.model';

const getUsers = async ()=>{
    const users = await User.find()
    return users;
}
const getUserById = async (data:number)=>{
    // const collection = mongoose.connection.collection('users');
    // const indexes = await collection.indexes();
    // console.log('Indexes:', indexes);
    const users = await User.find({id: data})
    // console.log(users);
    return users;
}

export const userService = {
    getUsers,
    getUserById,
}