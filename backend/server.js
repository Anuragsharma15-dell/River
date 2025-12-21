import express from 'express';
import { connectDB } from './db/db';



const app = express();
connectDB();

app.use(express.json());
app.use(cors());


app.listen(port, ()=>{
    console.log(`the server is listening at port , ${port}`)
})
