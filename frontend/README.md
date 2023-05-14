# OnlineTest
Project which enables business to conduct examinations online and let's users attempt quizes.

## Development server
From the repo root, navigate to 'frontend' using 'cd frontend' on a terminal.
Run `npm run start` for a dev server.
This will start the back-end and `http://localhost:4200/`.

## Editing questions
Questions are served from a back-end written in Express on the /quizlist route.
Navigate to `index.js` on `backend` folder for `quizlist` object and edit questions.
These questions are served from this endpoint at the load of Quiz component on front-end.