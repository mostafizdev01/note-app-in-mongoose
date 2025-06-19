import  validator  from 'validator';
import { model, Schema } from "mongoose";
import { IUser } from "../interfaces/user.interface";


 const userSchema = new Schema<IUser>({
    firstName: {
        type: String,
        required: true,
        trim: true,
        minlength: 3,
        maxlength: 10
    },
    lastName: {
        type: String,
        required: true,
        trim: true
    },
    email: {
        type: String,
        unique: true,
        required: [true, "Email Already Exiest!!"],
        trim: true,
        lowercase: true,
        // validate: {
        //     validator: function (value){
        //         return /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/.test(value)
        //     },
        //     message: function (props){
        //         return `Email ${props.value} is not valid email`
        //     }
        // }

        /// validate steap - 02

        validate: [validator.isEmail, "Invalid Email {VALUE}"]
    },

    // age: {
    //     type: String,
    //     required: true,
    //     min: [18, 'You must be 18 you got{VALUE}'],
    //     max: 60
    // },
    password: {
        type: String,
        required: true,
        trim: true
    },
    role: {
        type: String,
        // enum: ['user', 'admin'], /// ===>> way 01
        enum: {
            values: ['user', 'admin'],
            message: "Role is not valid {VALUE}"
        }, /// ===>> way 02
        default: 'user'
    },
 }, {versionKey: false, timestamps: true}
)

 export const User = model("User", userSchema)