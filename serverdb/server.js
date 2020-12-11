const express = require('express');
const cors = require('cors');

const app = express();
const db = require("./db");

//cookie, session, body-parser
const bodyParser = require('body-parser');
const cookieParser = require('cookie-parser');
const session = require('express-session');

const jwt = require('jsonwebtoken');
var loggedIn = false;
//need to add {} to work with session
app.use(cors({
    origin: ["http://localhost:3000"],
    methods: ["GET", "POST"],
    credentials: true
}));

// app.use(cookieParser);
app.use(bodyParser.urlencoded({ extended: true }));
app.use(
    session({
        key: "userId",
        secret: "datatest",
        resave: false,
        saveUninitialized: false,
        //cookie expire in 24hrs
        cookie: {
            expires: 60 * 60 * 24,
        },
    })
);

app.use(express.json()) // =>req.body

//Create users
app.post("/user/signup", async (req, res) => {
    try {
        const { email, name, address, password } = req.body;
        const mySQL = await db.query("insert into moviedb.customers (email,full_name,address,pass) values ($1,$2,$3,$4)",
            [email, name, address, password]);
    } catch (err) {
        console.error(err.message);
    }
})

//Check Login
app.get("/user/login", (req,res) => {
    if(req.session.user){ 
        res.send({loggedIn:true, user: req.session.user});
    }
    else{
        res.send({loggedIn:false});
    }
})

//Login users
app.post("/user/login", (req, res) => {
    try {
        const email = req.body.email;
        const password = req.body.pass;
        db.query("select * from moviedb.customers where customers.email = $1;",
            [email], function (err, result) {
                if (err) {
                    return res.send({ err: err });
                }
                if (result.rowCount > 0) {
                    if (result.rows[0].password == password) {
                        const id = result.rows[0].id;
                        const name  = result.rows[0].firstname+ " " +result.rows[0].lastname;
                        const token = jwt.sign({id, name}, "datatest",{
                            expiresIn: 300,
                        })
                        req.session.user = name;
                        console.log(email);
                        console.log(password);
                        console.log(req.session.user);
                        res.json({auth: true, token:token, user:result.rows});
                        loggedIn = true;
                    }
                    else {
                        res.json({auth:false, message: "Wrong username/password" })
                    }
                }
                else {
                    res.json({auth:false, message: "User doesn't exist" })
                }
            });
    } catch (err) {
        console.error(err.message);
    }
})

const verifyJWT = (req,res,next)  => {
    const token = req.headers["x-access-token"];
    if(!token) {
        res.send("You need token")
    }
    else{
        jwt.verify(token, "datatest",(err,decoded) => {
            if(err) {
                res.json({auth:false, message: "Authentification failed"})
            }
            else{
                req.userName = decoded.name;
                next();
            }
        })
    }
}

app.get('/user/isLogin',verifyJWT, (req,res) => {
    res.send(loggedIn);
})



//Logout user
app.get("/user/logout", async (req, res) => {
    try {
        if (req.session.user) {
            loggedIn = false;
            res.send({ loggedIn: false, user: req.session.destroy() });
        }
    } catch (err) {
        console.error(err.message);
    }
})

//add movie to wishlist
app.post("/user/addtowatchlist", async (req, res) => {
    try {
        const id  = req.body.customerid;
        const title = req.body.title;
        db.query("insert into moviedb.watchlist(title,customerid) values ($1,$2)",[title,id]);
        // db.query("select id from moviedb.watchlist where title = $1;",
        //     [title], function (err, result) {
        //         if (err) {
        //             return res.send({ err: err });
        //         }
        //         if (result.rowCount > 0) {
        //             db.query("insert into moviedb.movies_in_watchlist(title,customerid) values ($1,$2)",[title,id]);
        //         }
        //         else {
        //             console.log("Movie title is not found");
        //         }
        //     });
       
    } catch (err) {
        console.error(err.message);
    }
})



app.listen(3001, () => {
    console.log("Server is listening on port 3001");
})

