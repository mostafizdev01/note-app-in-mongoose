import express, {Application, Request, Response} from 'express'
import { model, Schema } from 'mongoose';
const app: Application = express();


const noteSchema = new Schema({
    title: String,
    content: String
})

const Note = model("Note", noteSchema)


app.post('/create-note', async (req: Request, res: Response)=>{
    const myNote = new Note({
        title: "Learning Mongoose",
        content: "I'm Learning Mongodb and Mongoose"
    })
    res.status(201).json({
        success: true,
        message: "Note created successfully ✅",
        note: myNote
    })
    await myNote.save()
})


app.get('/', (req: Request, res: Response)=>{
    res.send("Wellcome to my webserver..")
})

export default app;