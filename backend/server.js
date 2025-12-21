import express from 'express';
import { connectDB } from './db/db';



const app = express();
connectDB();

app.use(express.json());
app.use(cors());
app.get('/', (req,res)=>{
    res.send('Hello')
})
app.get('/about', (req,res)=>{
    console.log('about page');
    res.send('about')
})



app.listen(port, ()=>{
    console.log(`the server is listening at port , ${port}`)
})
