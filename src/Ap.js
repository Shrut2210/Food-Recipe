const mongoose = require('mongoose');
const body_parser = require('body-parser');
const Food = require("./Food.js")
const cors = require('cors')


mongoose.connect("mongodb+srv://shrut2210:x0VFHacumBlbpkET@cluster0.8twv6dv.mongodb.net/test", {useNewUrlParser: true}).then(
  () => {
    console.log('Connected...');

    const express = require('express');
    const app = express();
    app.use(body_parser.urlencoded({extended: false}));
    app.use(cors())

    app.get("/Afghan", async (req, res) => {
      
        const temp = await Food.find({Cuisine : "Afghan"});
        res.send(temp);

    })

    app.get("/African", async (req, res) => {

      const temp = await Food.find({Cuisine : "African"});
      res.send(temp);
    })

    app.get("/Appetizer", async (req, res) => {

      const temp = await Food.find({Cuisine : "Appetizer"});
      res.send(temp);
    })

    app.get("/Arab", async (req, res) => {

      const temp = await Food.find({Cuisine : "Arab"});
      res.send(temp);
    })

    app.get("/Bengali_Recipes", async (req, res) => {

      const temp = await Food.find({Cuisine : "Bengali Recipes"});
      res.send(temp)
    })

    app.get("/Bihari", async (req, res) => {

      const temp = await Food.find({Cuisine : "Bihari"});
      res.send(temp);
    })

    app.get("/British", async (req, res) => {

      const temp = await Food.find({Cuisine : "British"});
      res.send(temp); 
    })

    app.get("/Brunch", async (req, res) => {

      const temp = await Food.find({Cuisine : "Brunch"});
      res.send(temp);
    })

    app.get("/Thai", async (req, res) => {

      const temp = await Food.find({Cuisine : "Thai"});
      res.send(temp);
    })

    app.get("/Caribbean", async (req, res) => {

      const temp = await Food.find({Cuisine : "Caribbean"});
      res.send(temp);
    })

    app.get("/Uttar_Pradesh", async (req, res) => {

      const temp = await Food.find({Cuisine : "Uttar Pradesh"});
      res.send(temp); 
    })

    app.get("/Chinese", async (req, res) => {

      const temp = await Food.find({Cuisine : "Chinese"});
      res.send(temp); 
    })

    app.get("/Vietnamese", async (req, res) => {

      const temp = await Food.find({Cuisine : "Vietnamese"});
      res.send(temp); 
    })

    app.get("/Continental", async (req, res) => {

      const temp = await Food.find({Cuisine : "Continental"});
      res.send(temp); 
    })

    app.get("/Coorg", async (req, res) => {

      const temp = await Food.find({Cuisine : "Coorg"});
      res.send(temp); 
    })

    app.get("/Dessert", async (req, res) => {

      const temp = await Food.find({Cuisine : "Dessert"});
      res.send(temp); 
    })

    app.get("/European", async (req, res) => {

      // Food.find().then(temp => res.json(temp)).catch(err => res.json(err))
      const temp = await Food.find({Cuisine : "European"});
      res.send(temp); 

    })

    app.get("/French", async (req, res) => {

      const temp = await Food.find({Cuisine : "French"});
      res.send(temp); 
    })

    app.get("/Fusion", async (req, res) => {

      const temp = await Food.find({Cuisine : "Fusion"});
      res.send(temp);
    })

    app.get("/Greek", async (req, res) => {

      const temp = await Food.find({Cuisine : "Greek"});
      res.send(temp); 
    })

    app.get("/Himachal", async (req, res) => {

      const temp = await Food.find({Cuisine : "Himachal"});
      res.send(temp); 
    })

    app.get("/Gujarati_Recipes", async (req, res) => {

      const temp = await Food.find({Cuisine : "Gujarati Recipes"});
      res.send(temp); 
    })

    app.get("/Haryana", async (req, res) => {

      const temp = await Food.find({Cuisine : "Haryana"});
      res.send(temp); 
    })

    app.get("/Hyderabadi", async (req, res) => {

      const temp = await Food.find({Cuisine : "Hyderabadi"});
      res.send(temp); 
    })

    app.get("/Indo_Chinese", async (req, res) => {

      const temp = await Food.find({Cuisine : "Indo Chinese"});
      res.send(temp); 
    })

    app.get("/Indonesian", async (req, res) => {

      const temp = await Food.find({Cuisine : "Indonesian"});
      res.send(temp);
    })

    app.get("/Italian_Recipes", async (req, res) => {

      const temp = await Food.find({Cuisine : "Italian Recipes"});
      res.send(temp); 
    })

    app.get("/Japanese", async (req, res) => {

      const temp = await Food.find({Cuisine : "Japanese"});
      res.send(temp); 
    })

    app.get("/Jewish", async (req, res) => {

      const temp = await Food.find({Cuisine : "Jewish"});
      res.send(temp); 
    })

    app.get("/Jharkhand", async (req, res) => {

      const temp = await Food.find({Cuisine : "Jharkhand"});
      res.send(temp); 
    })

    app.get("/Kashmiri", async (req, res) => {

      const temp = await Food.find({Cuisine : "Kashmiri"});
      res.send(temp); 
    })

    app.get("/Korean", async (req, res) => {

      const temp = await Food.find({Cuisine : "Korean"});
      res.send(temp); 
    })

    app.get("/Lucknowi", async (req, res) => {

      // Food.find().then(temp => res.json(temp)).catch(err => res.json(err))
      const temp = await Food.find({Cuisine : "Lucknowi"});
      res.send(temp); 

    })

    app.get("/Malaysian", async (req, res) => {

      const temp = await Food.find({Cuisine : "Malaysian"});
      res.send(temp); 
    })

    app.get("/Malvani", async (req, res) => {

      const temp = await Food.find({Cuisine : "Malvani"});
      res.send(temp); 
    })

    app.get("/Maharashtrian_Recipes", async (req, res) => {

      const temp = await Food.find({Cuisine : "Maharashtrian Recipes"});
      res.send(temp); 
    })

    app.get("/Mangalorean", async (req, res) => {

      const temp = await Food.find({Cuisine : "Mangalorean"});
      res.send(temp); 
    })

    app.get("/Mexican", async (req, res) => {

      const temp = await Food.find({Cuisine : "Mexican"});
      res.send(temp); 
    })

    app.get("/Middle_Eastern", async (req, res) => {

      const temp = await Food.find({Cuisine : "Middle Eastern"});
      res.send(temp); 
    })

    app.get("/Mughlai", async (req, res) => {

      const temp = await Food.find({Cuisine : "Mughlai"});
      res.send(temp); 
    })

    app.get("/Nepalese", async (req, res) => {

      const temp = await Food.find({Cuisine : "Nepalese"});
      res.send(temp); 
    })

    app.get("/Parsi_Recipes", async (req, res) => {

      const temp = await Food.find({Cuisine : "Parsi Recipes"});
      res.send(temp); 
    })

    app.get("/punjabi", async (req, res) => {

      const temp = await Food.find({Cuisine : "Punjabi"});
      res.send(temp); 
    })

    app.get("/Rajasthani", async (req, res) => {

      const temp = await Food.find({Cuisine : "Rajasthani"});
      res.send(temp); 
    })

    app.get("/Sindhi", async (req, res) => {

      const temp = await Food.find({Cuisine : "Sindhi"});
      res.send(temp); 
    })

    app.get("/Snack", async (req, res) => {

      const temp = await Food.find({Cuisine : "Snack"});
      res.send(temp);
    })

    app.get("/South_Indian_Recipes", async (req, res) => {

      const temp = await Food.find({Cuisine : "South Indian Recipes"});
      res.send(temp); 
    })

    app.get("/Sri_Lankan", async (req, res) => {

      const temp = await Food.find({Cuisine : "Sri Lankan"});
      res.send(temp);
    })

    app.listen(3010, () => {
      console.log("Server connected...");
    })
  }
)
