

// USING ZOD FOR INPUT VALIDATION

const express=require("express")
const zod=require("zod")
const app = express()

//const schema=zod.array(zod.number())// synatx of defining type of input we r expecting form users
/** 
taking this and combining this array parameter also in our obj
User input we r expecting 
email:String =>email
password:atleast 8 character
country:"in" or"US" 

*/ 
const schema1=zod.object({
    email : zod.string(),
    password : zod.string(),
    kidneys : zod.array(zod.number())  // and voh array of numbers
})


app.use(express.json());  


app.post("/health-checkup",function(req,res){
    
    const kidneys=req.body.kidneys
    const email=req.body.email
    const password=req.header.password

    const response=schema1.safeParse(kidneys,email,password)  // now it will validate our input by user is valid using schema we defined in our case our scheme is dnefined for array of intiger
    

    if(!response.success){
        res.status(411).json({
            msg :"invalid inputs"
        })
    }else{
   
    res.send({
        response
    })
}


});

app.listen(3007);

