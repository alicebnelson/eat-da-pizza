var express = require("express");

var router = express.Router();

// Import the model (pizza.js) to use its database functions.
var pizza = require("../models/pizza.js");

// Create all our routes and set up logic within those routes where required.
router.get('/', function (req, res) {
    res.redirect('/index');
  });
  
  
  // Index Page (render all pizzas to DOM)
  router.get('/index', function (req, res) {
    pizza.all(function(data) {
      var hbsObject = { pizzas: data };
      //console.log(hbsObject);
      res.render('index', hbsObject);
    });
  });
  
  
  // Create a New Pizza
  router.post('/pizza/create', function (req, res) {
    pizza.insertOne(req.body.pizza_name, function() {
      res.redirect('/index');
    });
  });
  
  
  // Eat a pizza
  router.post('/pizza/eat/:id', function (req, res) {
    pizza.update(req.params.id, function() {
      res.redirect('/index');
    });
  });

/*router.get("/", function(req, res) {
  pizza.all(function(data) {
    var hbsObject = {
      pizzas: data
    };
    console.log(hbsObject);
    res.render("index", hbsObject);
  });
});

router.post("/api/pizzas", function(req, res) {
  pizza.create([
    "pizza_name"
  ], [
    req.body.pizza_name, req.body.sleepy
  ], function(result) {
    // Send back the ID of the new quote
    res.json({ id: result.insertId });
  });
});

router.put("/api/pizzas/:id", function(req, res) {
  var condition = "id = " + req.params.id;

  console.log("condition", condition);

  pizza.update({
    sleepy: req.body.sleepy
  }, condition, function(result) {
    if (result.changedRows == 0) {
      // If no rows were changed, then the ID must not exist, so 404
      return res.status(404).end();
    } else {
      res.status(200).end();
    }
  });
});

router.delete("/api/pizzas/:id", function(req, res) {
  var condition = "id = " + req.params.id;

  pizza.delete(condition, function(result) {
    if (result.affectedRows == 0) {
      // If no rows were changed, then the ID must not exist, so 404
      return res.status(404).end();
    } else {
      res.status(200).end();
    }
  });
});
*/
// Export routes for server.js to use.
module.exports = router;
