// const createError = require("http-errors");
const express = require("express");
const path = require("path");
const logger = require("morgan");

const indexRouter = require("./routes/index");
const usersRouter = require("./routes/users");

const app = express();

// view engine setup
// Serve static files from the React app
app.use(express.static(path.join(__dirname, "client/build")));
// app.use(express.static(path.join(__dirname, './')));

app.use(logger("dev"));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));

const backendPrefix = "/api";
app.use(`${backendPrefix}/`, indexRouter);
app.use(`${backendPrefix}/users`, usersRouter);

app.set("port", process.env.PORT || 3001);

app.listen(app.get("port"), () => {
  console.log(`Listening on ${app.get("port")}`);
});

module.exports = app;
