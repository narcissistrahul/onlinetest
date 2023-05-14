const express = require("express");
const cors = require('cors')
const app = express();
app.use(cors())

app.get("/quizlist", (request, response) =>{
    response.set('Access-Control-Allow-Origin', '*');
    quizlist = [
        {
          question: 'Javascript is an _______ language?',
          answer: ['Object Oriented', 'Object Based', 'Procedural', 'None of the above'],
          correct: 'Object Oriented',
          done: false
        }, {
          question: 'Which of the following keywords is used to define a variable in Javascript?',
          answer: ['var', 'let', 'Both A and B', 'None of the above'],
          correct: 'Both A and B',
          done: false
        }, {
          question: 'Which of the following methods is used to access HTML elements using Javascript?',
          answer: ['getElementById()', 'getElementsByClassName()', 'Both A and B', 'None of the above'],
          correct: 'Both A and B',
          done: false
        }, {
          question: 'Upon encountering empty statements, what does the Javascript Interpreter do?',
          answer: ['Throws an error', 'Ignores the statements', 'Gives a warning', 'None of the above'],
          correct: 'Ignores the statements',
          done: false
        }, {
          question: 'Which of the following methods can be used to display data in some form using Javascript?',
          answer: ['document.write()', 'console.log()', 'window.alert()', 'All of the above'],
          correct: 'All of the above',
          done: false
        }
      ]
      response.send(quizlist);
})

app.listen(3000, () => {
    console.log("Listen on the port 3000...");
});