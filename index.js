import "dotenv/config";
import express from "express";
import mongoose from "mongoose";


const app = express();
const PORT = process.env.PORT || 3333;
const dbURI = process.env.MONGO_URI || "uri";
import Category from "./models/Category.js";


// Connection to MongoDB
mongoose
  .connect(dbURI)
  .then(() => {
    console.log("Successfully conncted to MongoDB");
  })
  .catch((err) => {
    console.error("Failed connecting to MongoDB", err);
  });


app.use(express.json());


app.post("/categories", async(req,res)=>{
  try {
    const { name } =req.body;
    const category = await Category.create({name});
    res.status(201).json(category);

  } catch (error) {
    console.error("error");
    res.status(500).json({
      
      message: "Internal server error",
    });
    
  }
});

app.post("/products", async(req,res)=>{
  try {
    const { name, price , category } = req.body;
    const product = await Product.create({name, price, category});
    res.status(201).json({
    message: "Product created successfully",
    product: product
    });
  } catch (error) {
    console.error(error);
    res.status(500).json({
      message: "Internal server error"
    });
    
  }
});

app.get("/products", async(req,res)=>{
   try {
   
    const products = await Product.find().populate("category");
    res.status(200).json(products);
   } catch (error) {
    console.error(error);
    res.status(500).json({
      message: "Internal server error"
    });
   }
});

app.listen(PORT, () => {
   console.log(`Server is running on http://localhost:${PORT}`);
 });

 