



import  mongoose from "mongoose"

const orderSchema = mongoose.Schema({

    userId:{
        type:mongoose.Schema.Types.ObjectId,
        ref:"User",
        required:true
    },

    products:[{
        bookId:String,
        title:String,
        price:Number,
        quantity:Number,
        image:String
    }],

    amount:{
        type:Number,
        required:true
    },

    status:{
        type:String,
        default:"Pending"
    },

    createdAt:{
        type:Date,
        default:Date.now
    }

});

const Order = mongoose.model("Orders", orderSchema);

export default Order;


