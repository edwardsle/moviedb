const express = require('express');
const cors = require('cors');

const app = express();
const db = require("./db");

//cookie, session, body-parser
const bodyParser = require('body-parser');
const cookieParser = require('cookie-parser');
const session = require('express-session');

// const jwt = require('jsonwebtoken');
// const secretKey = "datatest";

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
        console.log(req.body);
        const mySQL = await db.query("insert into moviedb.register (email,full_name,address,pass) values ($1,$2,$3,$4)",
            [email, name, address, password]);
    } catch (err) {
        console.error(err.message);
    }
})

//Login users
app.get("/user/login", async (req, res) => {
    try {
        var email = req.query.email;
        var password = req.query.pass;
        db.connect(function (err, db, done) {
            if (err) {
                return res.status(400).send(err);
            }
            else {
                db.query("select * from moviedb.register where register.email = $1 and register.pass = $2",
                    [email, password], function (err, table) {
                        done();
                        if (err) {
                            return res.status(400).send(err);
                        }
                        else {
                            if (table.rows == 0) {
                                return res.json({
                                    message: 'Wrong email or password'
                                });
                            }
                            else {
                                req.session.user = table.rows;
                                console.log(req.session.user);
                                return res.json({
                                    message: 'loggin successfully'
                                }
                                )
                            }
                        }
                    });
            }
        })
    } catch (err) {
        console.error(err.message);
    }
})

//Check user login
app.get("/user/auth", async (req, res) => {
    try {
        if (req.session.user) {
            res.send({ loggedIn: true, user: req.session.user });
        }
        else {
            res.send({ loggedIn: false });
        }
    } catch (err) {
        console.error(err.message);
    }
})

app.listen(3001, () => {
    console.log("Server is listening on port 3001");
})