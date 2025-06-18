import express, {Application, Request, Response} from 'express'
import { model, Schema } from 'mongoose';
const app: Application = express();


app.use(express.json());


const noteSchema = new Schema({
    title: {type: String, required: true, trim: true},
    content: {type: String, default: ''}, 
    category: {
        type: String,
        enum: ["personal", "work", "study", "other"],
        default: "personal"
    },
    pinned: {
        type: Boolean,
        default: false
    },
    tags: {
        label: {type : String, default: ''},
        color: {type : String, default: 'gray'}
    }
}, {versionKey: false, timestamps: true}
)

const Note = model("Note", noteSchema)

/// posted data 
app.post('/notes/create-note', async (req: Request, res: Response)=>{

    const body = req.body;

    //<<<<<<<====== *** Approach 01 - of creating a data useing mongoose ** ============>>>>>>>>>
    // const myNote = new Note({
    //     title: "Learning Mongoose",
    //     content: "I'm Learning Mongodb and Mongoose"
    // })
    // await myNote.save()

    //<<<<<<<====== *** Approach 02 - of creating a data useing mongoose ** ============>>>>>>>>>
    
    const note = await Note.create(body)

    res.status(201).json({
        success: true,
        message: "Note created successfully ✅",
        note
    })
    
})

/// find data 
app.get('/notes', async (req: Request, res: Response)=>{
    const notes = await Note.find();
    //  console.log(notes);
     
    res.status(200).json({
        success: true,
        message: "Note geting successfully ✅",
        notes
    })
    
})

/// find a single data 
app.get('/notes/:noteId', async (req: Request, res: Response)=>{
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
app.patch('/notes/:noteId', async (req: Request, res: Response)=>{
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
app.delete('/notes/:noteId', async (req: Request, res: Response)=>{
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


app.get('/', (req: Request, res: Response)=>{
    res.send("Wellcome to my webserver..")
})

export default app;