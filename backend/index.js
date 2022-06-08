const express = require('express')
const cookieSession = require('cookie-session');
const cors = require('cors')
require('./passport')
const passport = require('passport');
const authRoute = require('./routes/auth')
const session = require('express-session')
const mysql = require('mysql');

const app = express();
app.use(express.json())

app.use(session({
    secret: "Our little secret.",
    resave: false,
    saveUninitialized: false
}));

app.use(passport.initialize());
app.use(passport.session());

app.use(cors())

app.use(cors({
    origin: "http://localhost:3000",
    methods: "GET POST DELETE PUT",
    Credential: true,
    "Access-Control-Allow-Credentials": true,
}))

const db = mysql.createConnection({
    user: 'root',
    host: 'localhost',
    password: 'aashu000@#$',
    database: 'employeeSystem'
})

app.post('/addtodo', (req, res) => {
    const task = JSON.stringify(req.body.task);
    const name = req.body.name;
    db.query(`SELECT * FROM EMPLOYEES WHERE name='${name}'`, function (err, result, fields) {
        if (err) throw err;
        db.query('INSERT into employees(name, task) VALUES(?, ?) ', [name, task],
            (err, result) => {
                if (err) {
                    console.log(err);
                } else {
                    res.send("values inserted")
                }
            })
        console.log(result)
    })
    // console.log(colNo);
});

app.get('/addtodo', (req, res)=>{
    const name = "test";
    
    db.query(`SELECT * FROM EMPLOYEES WHERE name='${name}'`, function (err, result, fields) {
        // console.log(result)
        res.send(result)
    })

})
app.delete('/addtodo', (req, res)=>{
    const id = req.body.id;
    // const name = "test";
    // console.log(req);
    console.log(id);
    
    
    db.query(`DELETE FROM EMPLOYEES WHERE id='${id}'`, function (err, result, fields) {
        // console.log(result)
        res.send(result)
    })

})

app.use("/auth", authRoute)

app.listen(5000, () => {
    console.log("Server is running on port 5000")
});