import express from 'express';



const app = express();


app.use(express.json());
app.use(cors());


app.listen(port, ()=>{
    console.log(`the server is listening at port , ${port}`)
})
