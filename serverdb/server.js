const express = require('express');
const cors = require('cors');

const app = express();
const db = require("./db");

app.use(cors());
app.use(express.json()) // =>req.body

//create users
app.post("/user/signup", async(req,res)=>{ 
    try {
        const {email,name,address,password} = req.body;
        console.log(req.body);
        const mySQL = await db.query("insert into moviedb.register (email,full_name,address,pass) values ($1,$2,$3,$4)",
        [email,name,address,password]);
    }catch (err) {
        console.error(err.message);
    }
})

//check userLogin
app.get("/user/login/:email", async(req,res) =>{
    try{
        const {email,password} = req.params;
        console.log(email);
        // console.log(password);
        // const mySQL = await db.query("select ")
    }catch (err) {
        console.error(err.message);
    }
})

app.listen(3001, () => { 
    console.log("Server is listening on port 3001");
})