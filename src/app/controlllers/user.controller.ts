
import express, { Request, Response } from "express";
import { z } from "zod";
import { User } from "../modules/user.model";

export const usersRoutes = express.Router()

// validation user data usenig ==>> zod

const CreateUserZod = z.object(
    {
        firstName: z.string(),
        lastName: z.string(),
        // age: z.number(),
        email: z.string(),
        password: z.string(),
        role: z.string().optional(),
    }
)

/// posted data 
usersRoutes.post('/create-user', async (req: Request, res: Response) => {

    try {
        const body = await CreateUserZod.parseAsync(req.body);
        
        // password bcrypting...
        // const password = await bcrypt.hash(body.password, 10);
        // body.password=password
        // const password = await User.hashPassword(body.password)
        // body.password = password
        const Users = await User.create(body) // ===>>>> static method for creating data

        /// ===>> Built it and custom instance methods

        

        /// ===>> Built it and custom static methods

        /// ===>> approch 2 created data
        // const body = req.body
        // const user = new User(body)
        // //// create instence and password bcrypting..
        // const password = await user.hasPassword(body.password)
        // user.password = password
        // await user.save()  /// === >>> instance method for creating data

        res.status(201).json({
            success: true,
            message: "User created successfully ✅",
            Users
        })
    } catch (err) {
        console.log(err);

    }

})

/// find data 
usersRoutes.get('/', async (req: Request, res: Response) => {
    const Users = await User.find();
    //  console.log( );

    res.status(200).json({
        success: true,
        message: "User geting successfully ✅",
        Users
    })

})

/// find a single data 
usersRoutes.get('/:UserId', async (req: Request, res: Response) => {
    const UserId = req.params.UserId
    /// =====>>>>>> single data finding steap one
    const Users = await User.findById(UserId);
    /// =====>>>>>> single data finding steap two ===========>>>>>>>>>>
    // const User = await User.findOne({_id: UserId});
    res.status(200).json({
        success: true,
        message: "Single User geting successfully ✅",
        Users
    })

})

/// Update a single data 
usersRoutes.patch('/:UserId', async (req: Request, res: Response) => {
    const UserId = req.params.UserId
    const updatedBody = req.body;
    /// =====>>>>>> single data finding steap one
    const Users = await User.findByIdAndUpdate(UserId, updatedBody, { new: true });
    /// =====>>>>>> single data finding steap two ===========>>>>>>>>>>
    // const User = await User.UpdateOne({_id: UserId}, updatedBody);
    /// =====>>>>>> single data finding steap three ===========>>>>>>>>>>
    // const User = await User.findOneAndUpdate({_id: UserId}, updatedBody);
    res.status(200).json({
        success: true,
        message: "Single User geting successfully ✅",
        Users
    })

})

/// delete a single data 
usersRoutes.delete('/:UserId', async (req: Request, res: Response) => {
    const UserId = req.params.UserId
    /// =====>>>>>> single data finding steap one
    const Users = await User.findByIdAndDelete(UserId);
    /// =====>>>>>> single data finding steap two ===========>>>>>>>>>>
    // const User = await User.Delete({_id: UserId});
    /// =====>>>>>> single data finding steap three ===========>>>>>>>>>>
    // const User = await User.findOneAndDelete({_id: UserId});
    res.status(200).json({
        success: true,
        message: "Single User delete successfully ✅",
        Users
    })

})
