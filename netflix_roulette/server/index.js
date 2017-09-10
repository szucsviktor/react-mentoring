const express = require("express");
const app = express();
const path = require("path");

app.get("*",(req, res) => {
    res.send('Server is running');
});

app.listen(3001);
console.log("App is running at port 3001");