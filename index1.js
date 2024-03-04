// creating a http server  // express is not a node default library
const express = require("express");

const app=express();
function sum(n){
        let ans=0;
        for(let i=1;i<=n;i++){
            ans=ans+i;
        }
        return ans;
}

app.get("/",function(req,res){  // this is"/"  is a route and when some one tries to hit that route  control reached to ur code and u respond with something

    // req is what kind of input we r sending headers etc
    // res is status code etc data 


    const n=req.query.n;  // this is a query parameter and in our case we hv defined it as after route   we can add it by a localhost:3000/?n=3  this u can put in ur phone who is connected to same network with ur laptop's ip and: port and this computattion would be done on ur phone which is great as note sharing ur code base u r gettting computatation done on ur phone with help of http which is a great thumbs up

    const ans=sum(n); // now all our computation would be made on n

    res.send("Hii there ur computation result is :"+ans);

});

app.listen(3000);

/* 

GET REQUEST

// all pre-writtten code is stored in node modules

1. GET: LIKE U WERE GIVING AGUMENT AND ASKING SOMETHING FROM A SERVER LIKE IN OUR PREVIOUS CODE WE WERE GIVING VALUE OF N AND GETTING A SUM..

2.POST : ADDING SOMETHING IN BACKEND LIKE ADDING A LINKED IN POST OR A INSTA POST SOMETHING IS GETTING UPDATED ON A SERVER

3. PUT : UPDATING UR PASSWORD UR NAME ETC

4. DEL: DELITING SOME DATA ON SERVER

STATUS CODES WHAT SERVER RESPONDS:
1. 200 :EVERYTHING WENT FINE
2. 404: ROUTE DOSENT EXIST
3. 500: SOMETHING WENT WRONG
4. 411:INUT R INCORRECT
5. 403: ACESS FORBIDDEN

*/ 