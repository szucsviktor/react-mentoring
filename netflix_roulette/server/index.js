const express = require("express");
const app = express();
const path = require("path");

app.use(express.static(path.join(__dirname, "../")));

app.get("/",(req, res) => {
    res.sendFile(path.join(__dirname, "../","index.html"));
});

app.get("/item",(req, res) => {
    res.sendFile(path.join(__dirname, "../","index.html"));
});

app.get("/item-not-found",(req, res) => {
    res.sendFile(path.join(__dirname, "../","index.html"));
});

app.listen(3001);
console.log("App is running at port 3001");