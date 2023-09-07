const mongoose = require('mongoose')
//const bcrypt = require('bcrypt')




const userSchema = mongoose.Schema({
  name:String,
  email:String,
  password:String
})

const User =  mongoose.model('Users',userSchema);


module.exports = User     