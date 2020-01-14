var express = require("express");

var PORT = process.env.PORT || 8089;

var app = express();

// Serve static content for the app from the "public" directory in the application directory.
app.use(express.static("public"));

// Parse application body
app.use(express.urlencoded({
  extended: true
}));
app.use(express.json());

// Set Handlebars.
var exphbs = require("express-handlebars");

app.engine("handlebars", exphbs({
  defaultLayout: "main"
}));
app.set("view engine", "handlebars");

// Import routes and give the server access to them.

var productRoutes = require("./controllers/product-controller.js")
productRoutes(app);

var customerRoutes = require("./controllers/customer-controller.js")
customerRoutes(app);

var miscellaneus = require("./controllers/miscellaneus-controller.js")
miscellaneus(app);


// Start our server so that it can begin listening to client requests.
app.listen(PORT, function () {
  // Log (server-side) when our server has started
  console.log("Server listening on: http://localhost:" + PORT);
});