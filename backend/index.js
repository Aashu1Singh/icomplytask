const express = require('express')
const cookieSession = require('cookie-session');
const cors = require('cors')
require('./passport')
const passport = require('passport');
const authRoute = require('./routes/auth')
const session = require('express-session')
const mysql = require('mysql');
const bodyParser = require('body-parser')
const cookieParser = require('cookie-parser')
const bcrypt = require('bcrypt');
const saltRounds = 10;

const app = express();
app.use(express.json())

app.use(session({
    key: "userId",
    secret: "Our little secret.",
    resave: false,
    saveUninitialized: false,
    cookie: {
        expires: 60 * 60 * 24
    }
}));

app.use(passport.initialize());
app.use(passport.session());

app.use(cors())

app.use(cors({
    origin: ["http://localhost:3000", "http://localhost:3000/login"],
    methods: ["GET", "POST", "DELETE", "PUT"],
    credentials: true,
    "Access-Control-Allow-Credentials": true,
}));

app.use(cookieParser());
app.use(bodyParser.urlencoded({ extended: true }));



const db = mysql.createConnection({
    user: 'root',
    host: 'localhost',
    password: 'aashu000@#$',
    database: 'employeeSystem'
})

app.get('/login', (req, res) => {
    if (req.session.user) {
        res.send({ loggedIn: true, user: req.session.user })
    } else {
        res.send({ loggedIn: false })
    }
})
app.post('/register', (req, res) => {
    const username = req.body.username;
    const password = req.body.password;
    console.log(req.body);

    bcrypt.hash(password, saltRounds, (err, hash) => {
        if (err) {
            console.log(err);
        }
        db.query("INSERT into users (username, password) VALUES(?, ?)",
            [username, hash],
            (err, result) => {
                console.log(err);
            })
    });
    res.redirect('/addtodo')

});

app.post('/login', (req, res) => {
    const username = req.body.username;
    const password1 = req.body.password;

    db.query("SELECT * FROM users WHERE username = ?;",
        username,
        async (err, result) => {
            // console.log(result);
            if (err) { res.send({ err: err }) }
            if (result.length > 0) {
                let passwordCompare = await bcrypt.compare(password1, result[0].password)
                console.log(passwordCompare);

                if (passwordCompare) {
                    req.session.user = result;
                    // console.log(req.session.user);
                    res.send(result)
                } else {
                    res.send({ message: "Wrong username/password" })
                }
            }
        })

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

app.get('/addtodo', (req, res) => {
    const name = "test";

    db.query(`SELECT * FROM EMPLOYEES WHERE name='${name}'`, function (err, result, fields) {
        // console.log(result)
        res.send(result)
    })

});

app.delete('/addtodo', (req, res) => {
    const id = req.body.id;
    // console.log(req);
    console.log(id);
    db.query(`DELETE FROM EMPLOYEES WHERE id='${id}'`, function (err, result, fields) {
        // console.log(result)
        res.send(result)
    })
});

app.put('/addtodo', (req, res) => {
    const id = req.body.data.id;
    const task = JSON.stringify(req.body.data.task);
    console.log(id, task);
    // console.log(id);
    db.query(`UPDATE EMPLOYEES SET task=? WHERE id="${id}"`, [task], function (err, result, fields) {
        if (!err) {
            console.log(result)
            res.send(result)
        } else {
            console.log(err);

        }
    })
})

app.use("/auth", authRoute)

app.listen(5000, () => {
    console.log("Server is running on port 5000")
});