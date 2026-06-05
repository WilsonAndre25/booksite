
import express from "express";
import bcrypt from "bcrypt";
import createError from "http-errors";
import User from "../models/User.js";

const router = express.Router();


console.log("USer:", User)

// we espect the request body to contain user fields in the nessary format

import jwt from "jsonwebtoken";

router.post('/register', async (request, response, next) => {
  try {
    const { name, email, password, address, pais } = request.body;

    if (!name || !email || !password || !address || !pais) {
      return response.status(400).json({ message: "All fields are required" });
    }

    const emailRegex = /^\S+@\S+\.\S+$/;
    if (!emailRegex.test(email)) {
      return response.status(400).json({ message: "Invalid email format" });
    }

    const existingUser = await User.findOne({ email });
    if (existingUser) {
      return response.status(400).json({
        message: "Email already in use"
      });
    }
    const passwordRegex = /^(?=.*[a-z])(?=.*[A-Z]).{8,}$/;
    if (!passwordRegex.test(password)) {
      return response.status(400).json({
        message: "Password must have at least 8 characters, one uppercase and one lowercase letter"
      });
    }

   
    const salt = await bcrypt.genSalt(8);
    const passwordHash = await bcrypt.hash(password, salt);

    const newUser = new User({
      name,
      email,
      address,
      pais,
      password: passwordHash
    });

    await newUser.save();

    const token = jwt.sign(
      { id: newUser._id, email: newUser.email },
      process.env.JWT_SECRET,
      { expiresIn: "1d" }
    );

    response.status(201).json({
      success: true,
      token,
      user: {
        id: newUser._id,
        name: newUser.name,
        email: newUser.email,
        address: newUser.address,
        pais: newUser.pais
      }
    });

  } catch (err) {
    next(createError(500, `Error: ${err.message}`));
  }
});



router.put('/update/:id', async (request, response, next) => {
  try {
    const {id} = request.params;
    const {email, address, pais} = request.body;

    const updatedUser = await User.findByIdAndUpdate(
      id,
      {email, address, pais},
      {new: true}
    );

    if (!updatedUser) {
      return response.status(404).json({ message: "User not found" });
    }

    response.json({
      success: true,
      user: {
        id: updatedUser._id,
        email: updatedUser.email,
        address: updatedUser.address,
        pais: updatedUser.pais
      }
    });

  } catch (err) {
    next(createError(500, `Error: ${err.message}`));
  }
});

export default router;