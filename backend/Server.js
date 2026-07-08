const express = require('express');
const cors = require('cors');
const app = express();
const mysql = require('mysql2');
app.use(cors());
app.use(express.json());
const db = mysql.createConnection({
    host: 'localhost',
    user: 'root',
    password: '',
    database: 'todo'
})
db.connect((err) => {
    if (err) {
        console.log(err);   // <-- Actual error print cheyyi
        return;
    }
    console.log("Connected with database");
});
app.get('/', (req, res) => {
    console.log('Default Route');
    db.query('select * from todoItems',(err,result)=>{
        if (err) {
            console.log("Error occured", err)
            return
        }
        console.log("Data:",result);
        res.send(result);
    })
})
app.post('/add-item', (req, res) => {
    console.log(req.body);

    db.query(`insert into todoitems(itemDescription) values ('${req.body.text}')`, (err, results) => {
        if (err) {
            console.log("Error occured", err)
            return
        }
        console.log("Created Successfully")
    })
    res.send("added successfully!");
})
app.listen(3000, () => {
    console.log('Server started running  on port 3000');
})