const express = require("express");
const app = express();
const bodyParser = require("body-parser");
var port = process.env.PORT || 8080;

const users = [];

app.use(express.json());

app.get("/api/users", (req, res) => {
    console.log("api/users called!!!!")
    res.json(users);
})

app.post("/api/user", (req, res) => {
    const user = req.body.user;
    console.log("Adding user::::::::", user);
    users.push(user);
    res.json("user added");
})

app.get("/", (req, res) => {
    res.send("App works!!")
})

app.listen(port, () => {
    console.log(`Server listening on port: ${port}`);
})