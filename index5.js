// understanding syntax of app.get 

// there can be more than 1 call back functions in app.get

/*
const express=require("express")

const app = express();
app.get("/health-checkup",function(req,res,next){
    console.log("hi from req1")  // first this gets log on hitting health checkup route in our browsers
    next(); // this built connection with next function so control can reach there and req2 can be logged
},fuunction(req,res){
    console.log("hii from req2")
})

app.listen(3000) 
// multiple req and res can be their with app.get
*/


// USING MIDDLEWARES TO OPTIMIZE CODE AND MAKE SOME PRECHECKS  
const express = require("express");

const app = express();

function userMiddleware(req,res,next){  // way of defining middlewares
    const username=req.headers.username;
    const password=req.headers.password;
    if(username !== "Deevyansh" || password !== "pass"){
        res.status(403).json({
            msg: "incorrect inputs"
        });
    } else{
        next();
    }
};

function kidneyMiddleware(req,res,next){
    const kidneyid=req.query.kidneyid
    if(kidneyid != 1 && kidneyid != 2 ){
        res.status(402).json({
            msg: "incorrect inputs"
        });
    }
    else{
        next();
    }
};

app.get("/health-checkup",userMiddleware,kidneyMiddleware,function(req,res){  // while doing health checkups we need some prechecks and to reduce complexity of our code we do these prechecks using midlleware while doing health check we need to use userMiddleware to check authorized user and we also need to check his kidney is healthy or not
    // doing something with kidney
    res.send("u r healthy")
})

app.get("/kidney-check",userMiddleware,kidneyMiddleware,function(req,res){
    res.send("U r kidney is healthy")
})

app.get("/heart-check",userMiddleware,function(req,res){  // but while doing heart check we dont need kidneys validation si we dont use kidney middleware
    res.send("U hv a healthy heart")
})
app.listen(3005)

// basically hitting different routes means hitting multiple functionalities of code and hiiting multiple fuctionalities need different checks so here comes middleware in play.