
// hospital ecosysstem http server/////

const express= require("express")  //  FETCHING EXPRESS
const app=express()  // KIND OF CREATING OBJ OF OUR EXPRESS LIBRARY
var users = [{  // this is an array of obj
    name:"john",
    kidneys: [{  // its a meta data its an obj with in a obj  // name obj has looped another object with in it
        healthy:false  // ONE KIDNEY JOHN HV AND THATS NOT HEALTHY
    }]

}];

app.use(express.json());

app.get("/",function(req,res){  // this is end pt where john can go to a particular port and get info about his kidneys
   const johnkidneys=users[0].kidneys; // kidneys john hv

   const noofkidneys=johnkidneys.length; 
  
   console.log(noofkidneys)
  // no of healthy kidney john hv
  let nofhealthykidneys=0;
  
  for(let i=0;i<johnkidneys.length;i++){
    if(johnkidneys[i].healthy){
        nofhealthykidneys+=1;
    }
}
    // no of unhealthy kidneys
    let unhealthykidney=noofkidneys-nofhealthykidneys;  
    res.json({
        noofkidneys,
        nofhealthykidneys,
        unhealthykidney
    })
    
}) // sending get request to a server is easy and query parameter also can be inculcated with in it

app.post("/",function(req,res){  // trying to add new kidney to the user[0]
    const isHealthy=req.body.isHealthy;  // data basically going from postman to is healthy variable

    users[0].kidneys.push({
        healthy: isHealthy   // where we r updating another kidney if we hv put ishealthy:trUe a healthy kidney gets updated otherweise unhealthy kindney gets updated
    })
    res.json({
        msg :"Done"  // we dont really expect a output in a post request as we are updating data in backend
    })
})

// but hitting backend server is not only be done by browser to hit backend server here we r using postman app


  // lets make it code more proficient lets suppose if theres no uhealthy kidney but still we are deleting it .. to rectify it

// removing all the unhealthy kidney

app.delete("/", function (req, res) {
  if (isthereatleastoneunhealthy()) {
    const newKidneys = [];
    for (let i = 0; i < users[0].kidneys.length; i++) {
      if (users[0].kidneys[i].healthy) {
        newKidneys.push({  // only pushing new kidneys to our new array
          healthy: true,
        });
      }
    }
    users[0].kidneys = newKidneys;
    res.json({ msg: "done" });
  } else {
    res.status(411).json({
      msg: "You have no unhealthy kidneys",
    });
  }
});

function isthereatleastoneunhealthy() {
  let atleastonehealthykidney = false;
  for (let i = 0; i < users[0].kidneys.length; i++) {
    if (!users[0].kidneys[i].healthy) {
      atleastonehealthykidney = true;
    }
  }
  return atleastonehealthykidney;
}

  





app.listen(3001);
