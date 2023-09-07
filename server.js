require('dotenv').config()
const express = require('express')
const cors = require('cors');
const mongoose = require('mongoose');
const bcrypt = require('bcrypt');

const User = require('./public/models/User')
const jwt = require('jsonwebtoken');


const app = express();
app.get('/', (req, res) => {
    res.status(200).json({ msg: "Well come to API!" })
});



app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cors());


const dbPassword = process.env.DB_PASS 
mongoose.connect(`mongodb+srv://wilsonandreandre439:${dbPassword}@cluster1.sn3pc1a.mongodb.net/?retryWrites=true&w=majority`)
    .catch((err) => console.log(err))

//FIRST DB SCHEMA AND MODEL

const postSchema1 = mongoose.Schema({
    title: String,
    category: String,
})
const Post = mongoose.model('Post', postSchema1)


//FIRST DB SCHEMA AND MODEL



//Second DB SCHEMA AND MODEL

          

//app.get('*',(request,response)=>{
// response.send('Not Found')
//})
app.post("/create", (req, res) => {
    Post.create({
        title: req.body.title,
        category: req.body.category
    })
        .then((doc) => console.log(doc))
        .catch((err) => console.log(err));

});
      
app.get("/posts", (req,res)=>{
   Post.find()
   .then(items=>res.json(items))
    .catch(err=>console.log(err))


})


app.delete("/delete/:id", (req, res) => {

    Post.findByIdAndDelete({ _id: req.params.id })
        .then((doc) => console.log(doc))
        .catch((err) => console.log(err))
    console.log(req.params)


}) 
    app.put("/update/:id", (req, res) => {
    //console.log(req.params)
   // console.log(req.body)
     Post.findByIdAndUpdate({_id:req.params.id},
        {
         title:req.body.title,
         category:req.body.category

     }
     ).then((doc)=>console.logo())
       .catch((err)=>console.log(err))



    
    })

             
///  Authorization////


app.get("/user/:id",checkToken, async(req, res)=>{
const id = req.params.id

//check if user exist
const user = await User.findById(id,'-password')
if(!user){
    return res.status(400).json({msg: "user not found"})
}
      res.status(200).json({user})
})
function checkToken(req,res,next){
     const authHeader = req.headers["authorization"]
     const token = authHeader && authHeader.split(' ')[1]
   if(!token){
    return res.status(400).json({msg:'access refused'})
   }
   try{
      const JWT_SECRET = process.env
      jwt.verify(token,JWT_SECRET)
      next()

   }catch(error){
    req.status(400).json({msg:'invalid token'})
   }



}


app.post('/register', async (req, res) => {
  const {name, email, password} = req.body;

  if(!name){
      return res.status(422).json({msg:"name is required"})    
  }

  if(!email){
    return res.status(422).json({msg:"email is required"})    
}

if(!password){
    return res.status(422).json({msg:"password is required"})    
}

const userExists = await User.findOne({email:email})
  if(userExists){
    return res.status(422).json({msg:" user already exist"})  

  }

    const salt = await bcrypt.genSalt(8)
    const passwordHash = await bcrypt.hash(password, salt)
    
  

//create User//
const user = new User({
   name,
   email,
   password

})
   try{
    await user.save()
    res.status(201).json({msg:"user create successfuly"})

   } catch(error)
   
   {

    console.log(error)
   }

   

})
//Credencial

/////////// Login with jwt//////////////////

app.post('/register/login', async (req, res, ) => {
     const {email, password} = req.body

   const userEmail= await User.findOne({email: email}).catch(
    (err)=>{
        console.log(err)
    }
   )
    if(!userEmail)
     return res
        .status(400)
        .json({msg:"Email dont match"})

        if(userEmail.password !==password)
        return res
           .status(400)
           .json({auth:"password dont match"})
            const jwtToken = jwt.sign({id:userEmail.id, email:userEmail.email},process.env.JWT_SECRET)

            res.json({auth:true ,token:jwtToken})
        


  //check if password macth
  //const checkpassword = await bcrypt.compareSync(password, user.password)

   // if(!checkpassword) {
   // return res.status(404).json({msg:"check password"}) 
   //}

}) 

    

       

// Our Route 
app.listen(3002, (req, res) => {
    console.log("My server is too nice")
})


