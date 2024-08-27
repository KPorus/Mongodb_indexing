import mongoose, { Schema, Document } from 'mongoose';

interface IPost extends Document {
    user_id: number;
    title: string;
    body: string;
    created_at: Date;
}

const PostSchema: Schema = new Schema({
    user_id: { type: Number, required: true },
    title: { type: String, required: true },
    body: { type: String, required: true },
    created_at: { type: Date, required: true, default: Date.now },
});

PostSchema.index({ title:"text", body:"text"})
const Post = mongoose.model<IPost>('posts', PostSchema);

export default Post;
