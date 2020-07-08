const express = require("express");
var app = express();
app.set("port", process.env.PORT || 8082);

//Serving static files
app.use(express.static(__dirname + '/app'));
app.use(express.static('public'));
 
app.get('/', function (req,res) { 
  	res.sendFile(__dirname + '/index.html');
});

//Listening the server
app.listen(app.get("port"), () => {
    console.log("Server on port", app.get("port"));
});
