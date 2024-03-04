const express = require('express');
const fs = require('fs');
const path = require('path');
const app = express();

app.get('/files', function (req, res) {
    fs.readdir(path.join(__dirname, './files/'), (err, files) => { // fs.readdir reads content present in particular directory path.join joins current working directly like home/deevyansh/express  with files folder where we want to collect different files and files variable stores diffn files present in files folder
    if (err) {
        return res.status(500).json({ error: 'Failed to retrieve files' });
    }
    res.json(files); // this prints all names of file stored in files
    console.log(__dirname);  // this prints are current working directory.
    });  // 
});

app.get('/files/:filename', function (req, res) {
    const filepath = path.join(__dirname, './files/', req.params.filename); // by req.params.filename we enter req for particular file http://localhost:3000/files/a.txt ,like in our case its a.txt and by this a.txt get stored in file path
    // if url has no ? so simply data will go in params it will funcn like filename we will get a.txt and gets attached with our file and that completes our path file / a.txt....  .join joins file name wiTH FILES which completes our path


    fs.readFile(filepath, 'utf8', (err, data) => {  //wthis function readfiles....... and filepath is a variable where file we want to read stored file .. and data present in particular file that is requested we hv stored in data variable.
    if (err) {
        return res.status(404).send('File not found');
    }
    res.send(data);
    });
});
//

app.all('*', (req, res) => {  // this handles request that doesnot match to any route ...  change
    res.status(404).send('Route not found'); 
});

module.exports = app;
app.listen(8080)

// route is something . // or by changing routes we can excess different functionalities of code...

//like http://localhost:3000/files/a.txt we read content of a.txt file
//http://localhost:3000/files  // we read various files present in files directory.. 