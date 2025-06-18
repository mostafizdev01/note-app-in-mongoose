import express, {Application, Request, Response} from 'express'
import { notesRoutes } from './app/controlllers/notes.controller';
import { usersRoutes } from './app/controlllers/user.controller';
const app: Application = express();


app.use(express.json());
app.use('/notes', notesRoutes)
app.use('/users', usersRoutes)

app.get('/', (req: Request, res: Response)=>{
    res.send("Wellcome to my webserver..")
})

export default app;