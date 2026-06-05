import mongoose from "mongoose"


const userSchema = mongoose.Schema({
  name:{
    type:String,
    required:true
  
  },
  email:{
    type:String,
    require:true,
    unique: true,
    match: [/^\S+@\S+\.\S+$/, "Email inválido"]
  },
  passwordd:{
    type:String,
    require:true
  },
  address:{
    type:String,
    required:true

  },
  pais:{
    type:String,
    required:true

  }
})

const User =  mongoose.model('User',userSchema);


export default User