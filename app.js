const http = require("http");
const bodyParser = require("body-parser");
const express = require("express");
//const session = require("express-session") // for authentication cookies
require("dotenv").config();

//local dependencies
// const db = require("./db");
// const passport = require("./passport");
const views = require("./controllers/views");
const api = require("./controllers/api");

//initialize express app
const app = express();

//set POST request body parser
app.use(bodyParser.urlencoded({ entended: false }));
app.use(bodyParser.json());

//Authentication
// app.use(
//   session({
//     secret: "session-secret",
//     resave: "false",
//     saveUninitialized: "true"
//   })
// );

//hook up passport
// app.use(passport.initialize());
// app.use(passport.session());

// hook up passport
// app.use(passport.initialize());
// app.use(passport.session());

// // authentication routes
// app.get(
//   "/auth/google",
//   passport.authenticate("google", { scope: ["profile"] })
// );

// app.get(
//   "/auth/google/callback",
//   passport.authenticate("google", { failureRedirect: "/signin" }),
//   function(req, res) {
//     res.redirect("/");
//   }
// );

// logout route
// app.get("/logout", function(req, res) {
//   req.logout();
//   res.redirect("/signin");
// });

//set routes
app.use("/", views);
// app.use("/api", api);
app.use("/public", express.static("public"));


//route error handler
app.use(function (err, req, res, next) {
  console.error(err.stack);
  res.status(500).send("Something broke!");
});

//port config
let port = process.env.PORT || 3000;
app.listen(port, () => {
  console.log("Server is running on port" + port);
});
