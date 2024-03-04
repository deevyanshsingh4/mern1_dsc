const express=require("express")

const app = express()
app.use(express.json());

app.post("/health-checkup",function(req,res){
    
    const kidneys=req.body.kidneys
    const kidneyLength=kidneys.length;

    res.send("you hv "+kidneyLength + "kidneys");
});

app.listen
(3000);
app.listen(2000)

// ur backend should hv input validation here we were expecting an array in body but user can snd string and backend would be exposed so backend should not be exposed we use input validation  by using if else we can hv certain validation checks but its ugly way so we will use zod library

// using global catches to handle arronious exceptions and not to expose backend if something wrong user provide a wrong input it comes at last of all routes

app.use(function(err,req,res,next){  // this global catches take 4 parameters instead of 3
    res.json({
        msg :"Sorry somethings up with our server"
    })
})