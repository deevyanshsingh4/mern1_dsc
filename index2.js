// reading a file from a directory

const express=require("express")

const fs=require("fs")

const app=express();

fs.readFile("a.txt",function(err,data){
    console.log(data)
})


app.get('/files', function (req, res) {
    fs.readdir(path.join(__dirname, './files/'), (err, files) => {
    if (err) {
        return res.status(500).json({ error: 'Failed to retrieve files' });
    }
    res.json(files);
    });
});


app.get("/files/:fileName",function(req,res){
    const name = path.join(__dirname, './files/', req.params.filename); 
    // everything in this fileName written after localhost:3000/files/a.txt will get logged using above function on terminal
    console.log(name)  // file name will be logged in terminal

    // BY ENTERING FILE NAME ON BROWSER CONTENTS OF THE FILE CAN BE ACCESSED
    fs.readFile(name,"utf-8",function(err,data){  // localhost:3002/files/a.txt by using this function u would able to read content of a.txt remotely in our browser
        res.json({
            data  // in data we would able to acess content of it using a.txt
        });
    });

})
app.listen(3002);
app.all('*', (req, res) => {
    res.status(404).send('Route not found');
});

module.exports = app;
app.all('*', (req, res) => {
    res.status(404).send('Route not found');
});

module.exports = app;