const express = require('express');
const programmingLanguageRouter = require('./routes/programmingLang');
require('dotenv').config()

const app = express();

app.use(express.json());
app.use(express.urlencoded({extended: true}));

app.get("/", (req, res)=>{
    res.json({message : "ok"})
})

app.use((err, req, res, next)=>{
    const statusCode = err.statusCode || 500;
    console.error(err.message , err.stack);
    return res.status(statusCode).json({message : err.message});
})

app.use("/programming-languages", programmingLanguageRouter)

app.listen(process.env.PORT, ()=>{
    console.log("listening on port: ", process.env.PORT

    );
})


