const express=require('express');
const  cors =require('cors');
const app =express();
app.use(cors());
app.use(express.json());

app.get('/',(req,res)=>{
    console.log('Default Route');
})
app.post('/add-item',(req,res)=>{
    console.log(req.body);
    req.send("added started running on port 3000");
})
app.listen(3000,()=>{
    console.log('Server started running  on port 3000');
})