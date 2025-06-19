import { model, Schema } from "mongoose"
import { Inote } from "../interfaces/note.interface"

const noteSchema = new Schema<Inote>({
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
    },
    userId: {
        type: Schema.Types.ObjectId,
        ref: "User",
        required: true
    }
}, {versionKey: false, timestamps: true}
)

export const Note = model("Note", noteSchema)