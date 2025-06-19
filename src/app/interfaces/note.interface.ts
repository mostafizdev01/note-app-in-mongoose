import { Types } from "mongoose";

export interface Inote {
    title: string,
    content: string,
    category: string,
    pinned: boolean,
    tags: string,
    userId: Types.ObjectId
}