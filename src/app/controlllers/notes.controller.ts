import { Note } from "../modules/notes.model";
import express, { Request, Response } from "express";

export const notesRoutes = express.Router()

/// posted data 
 notesRoutes.post('/create-note', async (req: Request, res: Response)=>{

    const body = req.body;

    //<<<<<<<====== ***  notesRoutesroach 01 - of creating a data useing mongoose ** ============>>>>>>>>>
    // const myNote = new Note({
    //     title: "Learning Mongoose",
    //     content: "I'm Learning Mongodb and Mongoose"
    // })
    // await myNote.save()

    //<<<<<<<====== ***  notesRoutesroach 02 - of creating a data useing mongoose ** ============>>>>>>>>>
    
    const note = await Note.create(body)

    res.status(201).json({
        success: true,
        message: "Note created successfully ✅",
        note
    })
    
})

/// find data 
 notesRoutes.get('/', async (req: Request, res: Response)=>{
    const  note = await Note.find();
    //  console.log( );
     
    res.status(200).json({
        success: true,
        message: "Note geting successfully ✅",
        note
    })
    
})

/// find a single data 
 notesRoutes.get('/:noteId', async (req: Request, res: Response)=>{
    const noteId = req.params.noteId
    /// =====>>>>>> single data finding steap one
    // const note = await Note.findById(noteId);
    /// =====>>>>>> single data finding steap two ===========>>>>>>>>>>
    const note = await Note.findOne({_id: noteId});
    res.status(200).json({
        success: true,
        message: "Single Note geting successfully ✅",
        note
    })
    
})

/// Update a single data 
 notesRoutes.patch('/:noteId', async (req: Request, res: Response)=>{
    const noteId = req.params.noteId
    const updatedBody = req.body;
    /// =====>>>>>> single data finding steap one
    const note = await Note.findByIdAndUpdate(noteId, updatedBody, {new: true});
    /// =====>>>>>> single data finding steap two ===========>>>>>>>>>>
    // const note = await Note.UpdateOne({_id: noteId}, updatedBody);
    /// =====>>>>>> single data finding steap three ===========>>>>>>>>>>
    // const note = await Note.findOneAndUpdate({_id: noteId}, updatedBody);
    res.status(200).json({
        success: true,
        message: "Single Note geting successfully ✅",
        note
    })
    
})

/// Update a single data 
 notesRoutes.delete(' /:noteId', async (req: Request, res: Response)=>{
    const noteId = req.params.noteId
    /// =====>>>>>> single data finding steap one
    const note = await Note.findByIdAndDelete(noteId);
    /// =====>>>>>> single data finding steap two ===========>>>>>>>>>>
    // const note = await Note.Delete({_id: noteId});
    /// =====>>>>>> single data finding steap three ===========>>>>>>>>>>
    // const note = await Note.findOneAndDelete({_id: noteId});
    res.status(200).json({
        success: true,
        message: "Single Note delete successfully ✅",
        note
    })
    
})
