import dotenv from "dotenv";
dotenv.config();
import cors from "cors"
import mongoose from "mongoose";
import bcrypt from "bcrypt";
import orderRoutes from "./routes/OrderRoutes.js";
import User from "./models/User.js";
import jwt from "jsonwebtoken";
import usersRouter from "./routes/users.js";






import express from "express";


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
app.use('/Orders',orderRoutes)

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
        .then((doc) => res.json(doc))
        .catch((err) => console.log(err));

});

app.get("/posts", (req, res) => {
    Post.find()
        .then(items => res.json(items))
        .catch(err => console.log(err))
})

app.delete("/delete/:id", (req, res) => {

    Post.findByIdAndDelete({ _id: req.params.id })
        .then((doc) => res.json(doc))
        .catch((err) => console.log(err))
    console.log(req.params)

})
app.put("/update/:id", (req, res) => {

    Post.findByIdAndUpdate({ _id: req.params.id },
        {
            title: req.body.title,
            category: req.body.category
        }
    ).then((doc) => res.json(doc))
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
        res.status(400).json({ msg: 'invalid token' })
    }

}



/////////// Login with jwt//////////////////

app.post('/user/login', async (req, res) => {
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
    { id: userEmail._id, email: userEmail.email },
    process.env.JWT_SECRET
);

res.json({
  auth: true,
  token: jwtToken,
  user: {
    id: userEmail._id,
    name: userEmail.name,
    email: userEmail.email

  }
});
})

// Our Route 
app.listen(3002, (req, res) => {
    console.log("Server User ON")
})



//curl -X POST http://localhost:3002/user/register \-H "Content-Type: application/json"\-d '{"name":"Tamara","email": "Tamara@gmail.com","password":"000034"}' 
// 

//curl -X POST  -d '{"userId:"123","products":[{"book:react Book", "qty":1}],"amount:30"}' localhost:3002/orders
//curl -X POST  -d '{"name":"Admin2","email": "admin4example@gmail.com","password":"query"}' localhost:3002/user/register

//curl -X POST http://localhost:3002/user/login \-H "Content-Type: application/json" \-d '{"name":"Tanio","email": "Tanio@gmail.com","password":"10124"}'







