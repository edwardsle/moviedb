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
    methods: ["GET", "POST", "DELETE"],
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
//localhost:3001/user/signup    Method: POST
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
//localhost:3001/user/login     Method: GET
app.get("/user/login", (req, res) => {
    if (req.session.user) {
        res.send({ loggedIn: true, user: req.session.user });
    }
    else {
        res.send({ loggedIn: false });
    }
})

//Login users
//localhost:3001/user/login     Method: POST
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
                        const name = result.rows[0].firstname + " " + result.rows[0].lastname;
                        const token = jwt.sign({ id, name }, "datatest", {
                            expiresIn: 300,
                        })
                        req.session.user = result.rows[0];
                        res.json({ auth: true, token: token, user: result.rows[0] });
                        loggedIn = true;
                    }
                    else {
                        res.json({ auth: false, message: "Wrong username/password" })
                    }
                }
                else {
                    res.json({ auth: false, message: "User doesn't exist" })
                }
            });
    } catch (err) {
        console.error(err.message);
    }
})

const verifyJWT = (req, res, next) => {
    const token = req.headers["x-access-token"];
    if (!token) {
        res.send("You need token")
    }
    else {
        jwt.verify(token, "datatest", (err, decoded) => {
            if (err) {
                res.json({ auth: false, message: "Authentification failed" })
            }
            else {
                req.userId = decoded.id;
                next();
            }
        })
    }
}

//Check userlogin status
//localhost:3001/user/isLogin     Method: GET
app.get('/user/isLogin', verifyJWT, (req, res) => {
    console.log(result.rows[0]);
    res.send("You are authorized");
})

//Logout user
//localhost:3001/user/logout     Method: GET
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


//all movies 
//localhost:3001/movie/all     Method: GET
app.get("/movie/all", async (req, res) => {
    try {
        db.query("select * from moviedb.movies", function (err, result) {
            if (err) {
                return res.send({ err: err });
            }
            if (result.rowCount > 0) {
                res.json({ data: result.rows })
            }
            else {
                res.json({ message: "No result found" })
            }
        });
    } catch (err) {
        console.error(err.message);
    }
})

//get movies by id
//localhost:3001/movie/:tt0354407   Method: GET
app.get("/movie/:id", async (req, res) => {
    try {
        const id = req.params.id;
        db.query("select * from moviedb.movies where movies.id = $1", [id], function (err, result) {
            if (err) {
                return res.send({ err: err });
            }
            if (result.rowCount > 0) {
                res.json({ data: result.rows })
            }
            else {
                res.json({ message: "No result found" })
            }
        });
    } catch (err) {
        console.error(err.message)
    }
})

//add movie to wishlist
//localhost:3001/user/addtowatchlist   Method: POST
app.post("/user/addtowatchlist", async (req, res) => {
    try {
        const id = req.body.customerid;
        const title = req.body.title;
        db.query("insert into moviedb.watchlist(title,customerid) values ($1,$2)", [title, id]);

    } catch (err) {
        console.error(err.message);
    }
})

//all wishlist by userID
//localhost:3001/wishlist/:490001   Method: GET
app.get("/wishlist/:userID", async (req, res) => {
    try {
        const user_id = req.params.userID;
        console.log(user_id);
        db.query("select movies.id,movies.title,movies.year,movies.director "
            + "from moviedb.movies join moviedb.wishlist on movies.id = wishlist.movieid "
            + "and wishlist.customerid = $1", [user_id], function (err, result) {
                if (err) {
                    return res.send({ err: err });
                }
                if (result.rowCount > 0) {
                    res.json({ data: result.rows })
                }
                else {
                    res.json({ message: "No result found" })
                }
            });

    } catch (err) {
        console.error(err.message);
    }
})

//delete items wishlist
//localhost:3001/watchlistDel   Method: DELETE
app.delete("/watchlistDel", async (req, res) => {
    try {
        const movieID = req.body.movieID;
        const userID = req.body.customerID;
        console.log(movieID + " " + userID);
        db.query("delete from moviedb.wishlist where "
            + "wishlist.movieid = $1 and wishlist.customerid = $2", [movieID, userID], function (err, result) {
                if (err) {
                    return res.send({ err: err });
                }
                if (result.rowCount > 0) {
                    console.log(result.rows);
                    res.json({ message: "Data deleted sucessfully" })
                }
                else {
                    res.json({ message: "No result found" })
                }
            });

    } catch (err) {
        console.error(err.message);
    }
})

//search by keyword - find movie
//localhost:3001/search/movie   Method: GET
app.get("/search/movie", (req, res) => {
    try {
        const keyvalue = req.body.keyword;
        console.log(keyvalue);
        db.query("select * from moviedb.movies where movies.title like $1 || '%'", [keyvalue], function (err, result) {
            if (err) {
                return res.send({ err: err });
            }
            if (result.rowCount > 0) {
                res.json({ data: result.rows });
            }
            else {
                res.json({message: "No data found"});
            }
        });
    } catch (err) {
        console.error(err.message);
    }
})

// search by keyword - find artist
//localhost:3001/search/artist   Method: GET
app.get("/search/artist", (req, res) => {
    try {
        const keyvalue = req.body.keyword;
        console.log(keyvalue);
        db.query("select * from moviedb.stars where stars.name like $1 || '%'", [keyvalue], function (err, result) {
            if (err) {
                return res.send({ err: err });
            }
            if (result.rowCount > 0) {
                res.json({ data: result.rows });
            }
            else {
                res.json({message: "No data found"});
            }
        });
    } catch (err) {
        console.error(err.message);
    }
})

// find all movie by artist name
//localhost:3001/artist/movies   Method: GET
app.get("/artist/movies", (req, res) => {
    try {
        const cast = req.body.name;
        console.log(cast);
        db.query("select stars.id from moviedb.stars where stars.name = $1", [cast], function (err, result) {
            if (err) {
                return res.send({ err: err });
            }
            if (result.rowCount > 0) {
                db.query("select movies.id,movies.title,movies.year,movies.director from moviedb.movies "
                + "join moviedb.stars_in_movies "
                + "on stars_in_movies.movie_id = movies.id  "
                + "where stars_in_movies.star_id = $1;", [result.rows[0].id], function (err, result) {
                    if (err) {
                        return res.send({ err: err });
                    }
                    if (result.rowCount > 0) {
                        res.json({ data: result.rows });
                    }
                    else {
                        res.json({message: "No data found"});
                    }
                });
            }
            else {
                res.json({message: "No data found"});
            }
        });
    } catch (err) {
        console.error(err.message);
    }
})

// find movie by genras
//localhost:3001/genras/:1   Method: GET
app.get("/genras/:id", (req, res) => {
    try {
        const id = req.params.id;
        console.log(id);
        db.query("select movies.id,movies.title,movies.year,movies.director "
        +"from moviedb.movies "
        +"join moviedb.genres_in_movies "
        +"on genres_in_movies.movieid = movies.id  "
        +"where genres_in_movies.genreid = $1;", [id], function (err, result) {
            if (err) {
                return res.send({ err: err });
            }
            if (result.rowCount > 0) {
                res.json(result.rows);
            }
            else {
                res.json({message: "No data found"});
            }
        });
    } catch (err) {
        console.error(err.message);
    }
})

//Get poster by movieID
//localhost:3001/poster/:movieID   Method: GET
app.get("/poster/:movieID", (req, res) => {
    try {
        const movieid = req.params.movieID;
        db.query("select posterurl "
        +"from moviedb.posters "
        +"join moviedb.movies"
        +"on posters.movie_id = movies.id "
        +"where movies.id = $1;", [movieid], function (err, result) {
            if (err) {
                return res.send({ err: err });
            }
            if (result.rowCount > 0) {
                res.json({ data: result.rows })
            }
            else {
                res.json({ message: "No result found" })
            }
        });
    } catch (err) {
        console.error(err.message);
    }
})

//insert purchase
//localhost:3001/sale       Method: POST
app.get("/sale", (req,res) => {
    try {
        const customerid = req.body.customerID;
        const movieid = req.body.movieID;
        db.query("insert into moviedb.sales(customerid,movieid) values ($1,$2)", [customerid, movieid]);
    } catch (err) {
        console.error(err.message);
    }
})


//get all sales
//localhost:3001/all/sale   Method: GET
app.get("/all/sale", (req,res)=> {
    try {
        db.query("select sales.customerid, sales.movieid, sales.saledate  "
        +"from moviedb.sales "
        +"group by sales.customerid, sales.movieid, sales.saledate ;", function (err, result) {
            if (err) {
                return res.send({ err: err });
            }
            if (result.rowCount > 0) {
                res.json({ data: result.rows })
            }
            else {
                res.json({ message: "No result found" })
            }
        });
    } catch (err) {
        console.error(err.message);
    }
})

//get sales by id
//localhost:3001/all/sale/:id   Method: GET
app.get("/all/sale/:userID", (req,res)=> {
    try {
        const customerID = req.params.userID;
        db.query("select movies.id,movies.title,movies.year,movies.director "
        +"from moviedb.movies "
        +"join moviedb.sales "
        +"on sales.movieid = movies.id  "
        +"where customerid = $1;", [customerID], function (err, result) {
            if (err) {
                return res.send({ err: err });
            }
            if (result.rowCount > 0) {
                res.json(result.rows);
            }
            else {
                res.json({message: "No data found"});
            }
        });
    } catch (err) {
        console.error(err.message);
    }
})

//find best movie 
//localhost:3001/collection/bestmovie   Method: GET
app.get("/collection/bestmovie", (req, res) => {
    try {
        db.query("select movies.id,movies.title,movies.year,movies.director,movies_in_collection.rank  "
        +"from moviedb.movies "
        +"join moviedb.movies_in_collection "
        +"on movies_in_collection.movieid = movies.id "
        +"where movies_in_collection.collectionid = '1'"
        +"group by movies.id;movies_in_collection.rank", function (err, result) {
            if (err) {
                return res.send({ err: err });
            }
            if (result.rowCount > 0) {
                res.json({ data: result.rows })
            }
            else {
                res.json({ message: "No result found" })
            }
        });
    } catch (err) {
        console.error(err.message);
    }
})

//find most popular
//localhost:3001/collection/mostpopular   Method: GET
app.get("/collection/mostpopular", (req, res) => {
    try {
        db.query("select movies.id,movies.title,movies.year,movies.director,movies_in_collection.rank  "
        +"from moviedb.movies "
        +"join moviedb.movies_in_collection "
        +"on movies_in_collection.movieid = movies.id "
        +"where movies_in_collection.collectionid = '2' "
        +"group by movies.id,movies_in_collection.rank ;", function (err, result) {
            if (err) {
                return res.send({ err: err });
            }
            if (result.rowCount > 0) {
                res.json({ data: result.rows })
            }
            else {
                res.json({ message: "No result found" })
            }
        });
    } catch (err) {
        console.error(err.message);
    }
})

//find most popular tv shows
//localhost:3001/collection/tvshows   Method: GET
app.get("/collection/tvshows", (req, res) => {
    try {
        db.query("select movies.id,movies.title,movies.year,movies.director,movies_in_collection.rank  "
        +"from moviedb.movies "
        +"join moviedb.movies_in_collection "
        +"on movies_in_collection.movieid = movies.id "
        +"where movies_in_collection.collectionid = '3'"
        + "group by movies.year,movies_in_collection.rank;", function (err, result) {
            if (err) {
                return res.send({ err: err });
            }
            if (result.rowCount > 0) {
                res.json({ data: result.rows })
            }
            else {
                res.json({ message: "No result found" })
            }
        });
    } catch (err) {
        console.error(err.message);
    }
})

app.listen(3001, () => {
    console.log("Server is listening on port 3001");
})

