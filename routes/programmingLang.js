const express = require('express');
const Controller = require('../controllers/programmingLang');
const programmingLanguageRouter = express.Router();

programmingLanguageRouter.get("/", async (req, res, next)=>{
    try{
        res.json(await Controller.getMultiple(req.query.page))
    }
    catch(err){
        console.log("Error while getting programming languages: ", err)
        next(err)
    }
})


module.exports = programmingLanguageRouter;