var  express     = require("express"),
     mongoose    = require("mongoose"),
     bodyParser  = require("body-parser");
      app        = express();

//DB CONFIG
mongoose.Promise = global.Promise;

//APP CONFIG
app.set("view engine", "ejs");
app.use(express.static("public"));

//SHOW LANDING PAGE ROUTE
app.get("/", function(req, res){
  res.render("index");
});

//SHOW SIGN-UP ROUTE
app.get("/signup", function(req, res){
  res.render("signUp");
});

//SHOW LOGIN ROUTE
app.get("/login", function(req, res){
  res.render("Login");
});

//SERVER START
app.listen(3000, function(req, res){
  console.log("Server started on Port 3000");
});
