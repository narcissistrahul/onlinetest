const express = require("express");
const cors = require('cors')
const app = express();
app.use(cors())

app.get("/quizlist", (request, response) =>{
    response.set('Access-Control-Allow-Origin', '*');
    quizlist = [
        {
          question: 'Which currency in USA?',
          answer: ['UAH', 'CAD', 'JPY', 'USD'],
          correct: 'USD',
          done: false
        }, {
          question: 'Which currency in Ukraine?',
          answer: ['CAD', 'UAH', 'JPY', 'USD'],
          correct: 'UAH',
          done: false
        }, {
          question: 'Which currency in Japan?',
          answer: ['UAH', 'JPY', 'CAD', 'USD'],
          correct: 'JPY',
          done: false
        }, {
          question: 'Which currency in Canada?',
          answer: ['JPY', 'UAH', 'USD', 'CAD'],
          correct: 'CAD',
          done: false
        }, {
          question: 'One mile in meters is:',
          answer: ['1609.344m', '900m', '1300m', '1200m'],
          correct: '1609.344m',
          done: false
        }
      ]
      response.send(quizlist);
})

app.listen(3000, () => {
    console.log("Listen on the port 3000...");
});