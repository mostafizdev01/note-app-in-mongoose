import { Server } from 'http';
import app from './app';
import mongoose from 'mongoose';
let server: Server;

const PORT = 5000;

async function main() {
    try {
        await mongoose.connect('mongodb+srv://NoteApp:NotePass@cluster0.eywn0.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0');
        console.log('✅ Connected Successfull to MongoDB Useing Mongose!!');
        
        server = app.listen(PORT, () => {
            console.log(`✅ APP is listening on port ${PORT}`);
        })
    } catch (error) {
        console.log(error);

    }
}

main()

