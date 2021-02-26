const express = require("express")
const app = express()
const mysql = require("mysql")
const cors = require('cors')

app.use(cors());
app.use(express.json());

const db = mysql.createConnection({
    user: "Ryan",
    host: "localhost",
    password: "pass",
    database: "website_user/pass",
});

app.post("/create", (req, res) => {
    const Username = req.body.Username;
    const Password = req.body.Password;

    db.query(
    "INSERT INTO reguser (UserName, UserPassword) VALUES (?,?)", 
    [Username, Password], 
    (err, result) => {
        if (err)
        {
            console.log(err);
        }
        else
        {
            res.send("Values Inserted");
        }
    }
    );

});

app.listen(3001, ()=> {
    console.log("Server Running port 3001");
})