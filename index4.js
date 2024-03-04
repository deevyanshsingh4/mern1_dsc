const express = require("express");

const app = express();

app.get("/health-checkup", function (req, res) {
  const username = req.headers.username;    // headers are used for password and username
  const password = req.headers.password; // Corrected to use req.headers.password
  const kidneyId = req.query.kidneyId; // user id and password should be entered in postman app under headers 
  // kidneyid is a query parameter entered like localhost:3004/health-checkup?kidneyId=1

  if (username !== "deevyansh" || password !== "pass") {  // inmein se ek bhi galat hai toh its obvious code ke yehi output deni chahiye
    res.status(400).json({ "msg": "something wrong with your inputs" });
    return;
  }

  if (kidneyId != 1 && kidneyId != 2) {
    res.status(400).json({ "msg": "something wrong with your inputs" });
    return;
  }

  res.json({
    msg: "you are fine",
  });
});


app.listen(3004, () => {
  console.log("Server is running on port 3004");
});

