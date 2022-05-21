var express = require("express");
var path = require("path");
var cookieParser = require("cookie-parser");
var logger = require("morgan");
var helmet = require("helmet");

//Variables agregadas
var userRouter = require("./routers/user");
var wordRouter = require("./routers/word");
var authRouter = require("./routers/auth");
var passport = require("passport");
var errorHandler = require("./utils/errorHandler");
// var database = require("./database/config");
require("./database/config");
require("./auth/auth");

var app = express();

app.use(logger("dev"));
app.use(helmet());
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, "public")));

app.use(authRouter);
app.use(passport.authenticate("jwt", { session: false }))
app.use("/user", userRouter);
app.use("/word", wordRouter);
app.use(errorHandler);



module.exports = app;