const express = require("express");
const cors = require('cors')
const app = express();
app.use(cors())

app.get("/", (request, response) => {
    response.set('Access-Control-Allow-Origin', '*');
    response.send({"1":"Quiz"});
});

app.listen(3000, () => {
    console.log("Listen on the port 3000...");
});