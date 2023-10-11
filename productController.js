// controllers/productController.js
const Product = require('../models/Product');
const path = require('path');
const fs=require('fs');
const rootDir=require('../util/path');

exports.getAddProduct = (req, res) => {
  res.sendFile(path.join(rootDir,'view','form.html'));

};

exports.addAttendence = async(req, res) => {
  try{
    const { Date,Naman,Prabal,Pankaj,Praveen,Ombati} = req.body;

   const data=await Product.create({
  Date:Date,
  Naman:Naman,
  Prabal:Prabal,
  Pankaj:Pankaj,
  Praveen:Praveen,
  Ombati:Ombati,

  })
       
      res.status(201).json({Attendence:data});
      
  }catch (error) {
    console.error(error);
    res.status(500).send('An error occurred while saving appointments.');
  }
   
};

exports.getProducts = async (req, res) => {
  try {
    const appointments = await Product.findAll();
   res.status(200).json({alluser:appointments});
  } catch (error) {
    console.error(error);
    res.status(500).send('An error occurred while fetching appointments.');
  }
};

exports.searchdata=async(req,res)=>{
  try{
    const uId=req.params.id;
   // console.log(await Product.findByPk(uId));
   const sdata= await Product.findByPk(uId);
   
   res.status(200).json({ userdetails: sdata });
  }catch (error) {
    console.error(error);
    res.status(500).send('An error occurred while deleting appointments.');
  }
};