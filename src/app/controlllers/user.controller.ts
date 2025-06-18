import express, { Request, Response } from "express";
import { User } from "../modules/user.model";

export const usersRoutes = express.Router()

/// posted data 
 usersRoutes.post('/create-user', async (req: Request, res: Response)=>{

    const body = req.body;
    const Users = await User.create(body)

    res.status(201).json({
        success: true,
        message: "User created successfully ✅",
        Users
    })
    
})

/// find data 
 usersRoutes.get('/', async (req: Request, res: Response)=>{
    const  Users = await User.find();
    //  console.log( );
     
    res.status(200).json({
        success: true,
        message: "User geting successfully ✅",
        Users
    })
    
})

/// find a single data 
 usersRoutes.get('/:UserId', async (req: Request, res: Response)=>{
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
 usersRoutes.patch('/:UserId', async (req: Request, res: Response)=>{
    const UserId = req.params.UserId
    const updatedBody = req.body;
    /// =====>>>>>> single data finding steap one
    const Users = await User.findByIdAndUpdate(UserId, updatedBody, {new: true});
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
 usersRoutes.delete('/:UserId', async (req: Request, res: Response)=>{
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
