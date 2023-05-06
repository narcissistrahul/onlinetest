const express = require("express");
const cors = require('cors')
const app = express();
app.use(cors())

app.get("/", (request, response) => {
    response.set('Access-Control-Allow-Origin', '*');
    
    quiz = [
        {
        "question": "What is the square of 2?",
        "choices":["1", "2", "4", "8"],
        "answer": "4"
        },
        {
        "question": "What is the square of 4?",
        "choices":["4", "8", "16", "32"],
        "answer": "16"
        }
    ]
    response.send(quiz);
});

app.listen(3000, () => {
    console.log("Listen on the port 3000...");
});