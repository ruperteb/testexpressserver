const express = require("express");
const app = express();
const users = require("./routes/users");
const quizzes = require("./routes/quizzes");
const questions = require("./routes/questions");

app.use("/users/", users);
app.use("/quizzes/", quizzes);
app.use("/questions/", questions);

const port = 3000;

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
});
