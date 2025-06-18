import { model, Schema } from "mongoose"

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

export const Note = model("Note", noteSchema)