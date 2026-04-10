require('dotenv').config()
const express = require('express')
const cors = require('cors');
const mongoose = require('mongoose');
const bcrypt = require('bcrypt');

const User = require('./models/User')
const jwt = require('jsonwebtoken');
const usersRouter = require('./routes/users');
const { bodyParser } = require('json-server');
const { type } = require('@testing-library/user-event/dist/type');

const app = express();
app.get('/', (req, res) => {
    res.status(200).json({ msg: "Well come to API!" })
});

//app.use('*', bodyParser.json({type:'/'}))

app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cors());


//ROUTER MIDDLEWARE
// routes for user prefix

app.use('/user', usersRouter);

//mongodb+srv://wilsonandreandre2021_db_user:EWUZyoT0isizeWnN@cluster01.kq9fhsc.mongodb.net/
const dbPassword = process.env.DB_PASS


mongoose.connect(`mongodb+srv://wilsonandreandre2021_db_user:${dbPassword}@cluster01.kq9fhsc.mongodb.net/users_Books`)
    .then(() => console.log("MongoDB conected"))
    .catch((err) => console.log(err))

//FIRST DB SCHEMA AND MODEL

const postSchema1 = mongoose.Schema({
    title: String,
    category: String,
})
const Post = mongoose.model('Post', postSchema1)


app.post("/create", (req, res) => {
    Post.create({
        title: req.body.title,
        category: req.body.category
    })
        .then((doc) => console.log(doc))
        .catch((err) => console.log(err));

});

app.get("/posts", (req, res) => {
    Post.find()
        .then(items => res.json(items))
        .catch(err => console.log(err))
       .then((doc) => res.json(doc))

})


app.delete("/delete/:id", (req, res) => {

    Post.findByIdAndDelete({ _id: req.params.id })
        .then((doc) => console.log(doc))
        .catch((err) => console.log(err))
    console.log(req.params)


})
app.put("/update/:id", (req, res) => {

    Post.findByIdAndUpdate({ _id: req.params.id },
        {
            title: req.body.title,
            category: req.body.category

        }
    ).then((doc) => console.logo(doc))
        .catch((err) => console.log(err))


})


///  Authorization///

app.get("/user/:id", checkToken, async (req, res) => {
    const id = req.params.id

    //check if user exist
    const user = await User.findById(id, '-password')
    if (!user) {
        return res.status(400).json({ msg: "user not found" })
    }
    res.status(200).json({ user })
})
function checkToken(req, res, next) {
    const authHeader = req.headers["authorization"]
    const token = authHeader && authHeader.split(' ')[1]
    if (!token) {
        return res.status(400).json({ msg: 'access refused' })
    }
    try {
        const JWT_SECRET = process.env.JWT_SECRET
        jwt.verify(token, JWT_SECRET)
        next()

    } catch (error) {
        req.status(400).json({ msg: 'invalid token' })
    }

}


app.post('/test', async (req, res) => {

    console.log("Test Hit")
    console.log(req.body);
    const { name, email, password } = req.body;



    if (!name) {
        return res.status(422).json({ msg: "name is required" })
    }

    if (!email) {
        return res.status(422).json({ msg: "email is required" })
    }

    if (!password) {
        return res.status(422).json({ msg: "password is required" })
    }

    const userExists = await User.findOne({ email: email })
    if (userExists) {
        return res.status(422).json({ msg: " user already exist" })
    }

    const salt = await bcrypt.genSalt(8)
    const passwordHash = await bcrypt.hash(password, salt)

    //create User//
    const user = new User({
        name,
        email,
        password: passwordHash

    })
    try {
        await user.save()
        res.status(201).json({ msg: "user create successfuly" })

    } catch (error) {
        console.log(error);
        return res.status(500).json({ error: error.message });
    }




})

/////////// Login with jwt//////////////////

app.post('/register/login', async (req, res) => {
    const { email, password } = req.body

    const userEmail = await User.findOne({ email: email }).catch(
        (err) => {
            console.log(err)
        }
    )

    if (!userEmail) {
        return res.status(400).json({ msg: "Email dont match" })
    }

   
    const isMatch = await bcrypt.compare(password, userEmail.password)

    if (!isMatch) {
        return res.status(400).json({ auth: "password dont match" })
    }

    const jwtToken = jwt.sign(
        { id: userEmail.id, email: userEmail.email },
        process.env.JWT_SECRET
    )

    res.json({ auth: true, token: jwtToken })
})

// Our Route 
app.listen(3002, (req, res) => {
    console.log("My server is too nice")
})


//curl -X POST http://localhost:3002/user/register \-H "Content-Type: application/json" \-d '{"name":"user","email": "userexample@gmail.com","password":"12345pooj"}' 
// 

//curl -X POST  -d '{"name":"user1","email": "userexample@gmail.com","password":"001100"}' localhost:3002/user/register
//curl -X POST  -d '{"name":"Admin2","email": "admin4example@gmail.com","password":"query"}' localhost:3002/user/register

