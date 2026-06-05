import express from "express";
import Order from "../models/Order.js";

const router = express.Router();


router.post("/", async (req,res)=>{

    try{

        const newOrder = new Order(req.body);

        await newOrder.save();

        res.status(201).json(newOrder);

    }catch(error){

        console.log(error);
        
        res.status(500).json(error);

    }

});
router.get("/:userId", async(req,res)=>{

    try{

        const orders = await Order.find({
            userId:req.params.userId
        });

        res.json(orders);

    }catch(error){

        res.status(500).json(error);

    }

});


router.delete("/:id", async(req,res)=>{

    try{

        await Order.findByIdAndDelete(
            req.params.id
        );

        res.json({
            message:"Order deleted"
        });

    }

    catch(error){

        res.status(500).json(error);

    }

});

export default router;