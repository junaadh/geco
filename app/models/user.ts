import mongoose, { Document } from "mongoose";

export interface User extends Document {
    username: string;
    firstname: string;
    lastname: string;
    password: string;
}

const userSchema = new mongoose.Schema<User>({
    username: {
        type: String,
        required: [true, "Please provide a username"],
        unique: true,
    },
    firstname: {
        type: String,
        required: [true, "please provide a firstname"],
    },
    lastname: {
        type: String,
        required: [true, "please provide a lastname"],
    },
    password: {
        type: String,
        required: [true, "Please provide a password"]
    },
})

const User = mongoose.models.users ? mongoose.models.users as mongoose.Model<User> : mongoose.model<User>("users", userSchema)

export default User;