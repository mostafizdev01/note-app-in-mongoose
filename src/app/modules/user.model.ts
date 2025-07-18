import  bcrypt  from 'bcryptjs';
import  validator  from 'validator';
import { Model, model, Schema } from "mongoose";
import { IUser, UserIntenceMethods, UserStaticMethods } from "../interfaces/user.interface";
import { Note } from './notes.model';


 const userSchema = new Schema<IUser, UserStaticMethods, UserIntenceMethods>({
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
 }, {versionKey: false, timestamps: true, toJSON: {virtuals: true}, toObject: {virtuals: true}}
)

userSchema.method("hashPassword", async function(plainPassword: string){
    const password = await bcrypt.hash(plainPassword, 10);
    return password
})

userSchema.static("hashPassword", async function(plainPassword: string){
    const password = await bcrypt.hash(plainPassword, 10);
    return password
})

userSchema.pre("save", async function(){
    this.password = await bcrypt.hash(this.password, 10)
})

userSchema.post("save", async function(doc, next){
    if(doc){
      console.log(doc);
      await Note.deleteMany({user: doc._id})
    }
    next()
})

userSchema.post("save", async function(doc, next){
    console.log(`${doc.email} has been saved`);
    next()
})

userSchema.virtual('fullName').get(function(){
    return `${this.firstName} ${this.lastName}`
})

 export const User = model<IUser, UserStaticMethods>("User", userSchema)