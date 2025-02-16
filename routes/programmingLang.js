const express = require("express");
const Controller = require("../services/programmingLang");
const programmingLanguageRouter = express.Router();

programmingLanguageRouter.get("/", async (req, res, next) => {
  try {
    res.json(await Controller.getMultiple(req.query.page));
  } catch (err) {
    console.log("Error while getting programming languages: ", err);
    next(err);
  }
});

programmingLanguageRouter.post("/", async (req, res, next) => {
  try {
    const {message, result} = await Controller.createOne(req.body);
    console.log(message);
    return res.status(200).json({message, result})
    
  } catch (error) {
    console.log("Error in creating a new programming language. ", error);
  }
});

module.exports = programmingLanguageRouter;
