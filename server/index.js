const express = require("express")
const app = express()
const mysql = require("mysql")
const cors = require('cors')

const bodyParser = require("body-parser")
const cookieParser = require("cookie-parser")
const session = require("express-session")

const bcrpyt = require('bcrypt')
const saltRounds = 10

app.use(express.json());
app.use(cors({
    origin: ["http://localhost:3000"],
    methods: ["GET", "POST"],
    credentials: true
}));
app.use(cookieParser())
app.use(bodyParser.urlencoded({ extended: true}));

app.use(session({
    key: "userID",
    secret: "VerySecretKey",
    resave: true,
    saveUninitialized: true,
    cookie: {
        expires: 20 * 1000 * 1000
    },
}))

const db = mysql.createConnection({
    user: "Ryan",
    host: "localhost",
    password: "pass",
    database: "website_user/pass",
});

app.post("/create", (req, res) => {
    const Username = req.body.Username;
    const Password = req.body.Password;

    bcrpyt.hash(Password, saltRounds, (err, hash) => {
        
        if (err) {
            res.send(err);
        }
        db.query(
            "INSERT INTO reguser (UserName, UserPassword, HeadSlot, BodySlot, ArmSlot, LegSlot, RingOneSlot, RingTwoSlot, PrimaryWep, SecondaryWep) VALUES (?,?,0,0,0,0,0,0,0,0)", 
            [Username, hash], 
            (err, result) => {
                if(err){
                    res.send({message: "Error! User Already Exists"});
                }
                else{
                    res.send({message: "Success!"})
                }
                
            }
            );
    })
});

app.get("/login", (req, res) => {
    if (req.session.user){
        db.query(
            "SELECT * FROM reguser WHERE UserName = ?",
             [req.session.user[0].UserName],
             (err, result) => {
                 if (err){
                     console.log(err);
                 }
                 else{
                     res.send({LoggedIn: true, user: result})
                 }
             })
    }
    else{
        res.send({LoggedIn: false})
    }
})

app.post("/login", (req, res) => {
    const Username = req.body.Username;
    const Password = req.body.Password;

    db.query(
    "SELECT * FROM reguser WHERE UserName = ?;", 
    Username, 
    (err, result) => {
        if (err)
        {
            res.send({err: err});
        }
        if (result.length > 0) {
            bcrpyt.compare(Password, result[0].UserPassword, (error, response) => {
                if(response){
                    req.session.user = result
                    res.send(result)
                }
                else
                    {
            res.send({message: "Wrong Username/Password"});
                    }
            })
        }
        else {
            res.send ({message: "User does not exist!"});
        }
    }
    );
});

app.post("/items", (req, res) => {
    const pwepID = req.body.pwepID;
    const swepID = req.body.swepID;
    const hitemID = req.body.hitemID;
    const bitemID = req.body.bitemID;
    const aitemID = req.body.aitemID;
    const litemID = req.body.litemID;
                
        db.query(
            "UPDATE reguser SET HeadSlot = ?, BodySlot = ?, ArmSlot = ?, LegSlot = ?, PrimaryWep = ?, SecondaryWep = ? WHERE UserName = ?;", 
            [hitemID, bitemID, aitemID,litemID,pwepID,swepID,req.session.user[0].UserName], 
            (err, result) => {
                if (err){
                    console.log(err);
                }
                else{
                    res.send("Values Inserted");
                }
            });
        }
    );

app.listen(3001, ()=> {
    console.log("Server Running port 3001");
})