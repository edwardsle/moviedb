const express = require('express');
const cors = require('cors');

const app = express();
const db = require("./db");
const { response } = require('express');
const e = require('express');

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
app.get("/user/login", async(req,res) =>{
    try{
        var email = req.query.email;
        var password = req.query.pass;
        console.log(email);
        console.log(password);
        db.connect(function(err,db,done) {
            if(err) {
                return res.status(400).send(err);
            }
            else{
                db.query("select register.full_name from moviedb.register where register.email = $1 and register.pass = $2",
                [email, password],function(err,table){
                    done();
                    if(err){
                        return res.status(400).send(err);
                    }
                    else{
                        console.log(table.rows);
                        if (table.rows == 0 ){
                            return res.status(404).send("Data not found");
                        }
                        else{
                            return res.status(200).send(table.rows);
                        }
                    }
                });
            }
        })
    }catch (err) { 
        console.error(err.message);
    }
})

app.listen(3001, () => { 
    console.log("Server is listening on port 3001");
})