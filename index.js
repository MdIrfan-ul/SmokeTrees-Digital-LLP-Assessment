const express = require("express");
const connectDB = require("./db");
const app = express();
const UserModel = require("./user.schema");
const AddressModel = require("./address.schema");

app.use(express.json());
// Creating User
app.post('/create',async(req,res)=>{
    const userData = req.body;
    const newUser =await UserModel.create(userData);
    res.status(201).json(newUser);
    
})

// Registering Address
app.post('/registerAddress',async(req,res)=>{
    const addressData = req.body;
    const newAddress = new AddressModel(addressData);
    await newAddress.save();
    res.status(201).json(newAddress);


})

const port = 8000;
app.listen(port,(req,res)=>{
    connectDB();
    console.log('app is listening at localhost:8000');
})