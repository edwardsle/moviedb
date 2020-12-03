const express = require('express');
const cors = require('cors');

const app = express();
const db = require("./db");

app.use(cors());
app.use(express.json()) // =>req.body

//create users
app.post("/user/signup", async(req,res)=>{ 
    res.header('Access-Control-Allow-Origin','*');
    try {
        const {email,password} = req.body;
        console.log(req.body);
        const mySQL = await db.query("insert into moviedb.register (email,pass) values ($1,$2)",
        [email, password]);
    }catch (err) {
        console.error(err.message);
    }
})

app.listen(3001, () => { 
    console.log("Server is listening on port 3001");
})