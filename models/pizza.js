// Import the ORM to create functions that will interact with the database.
var orm = require("../config/orm.js");

var pizza = {
  all: function(cb) {
    orm.all("pizzas", function(res) {
        cb(res);
    });
  },
  insertOne: function(pizza_name, cb){
    orm.insertOne(pizza_name, function(res){
        cb(res);
    });
  },
  // The variables cols and vals are arrays.
 // create: function(cols, vals, cb) {
  //  orm.create("pizzas", cols, vals, function(res) {
  //    cb(res);
  //  });
 // },
  update: function(pizza_id, cb) {
    orm.update(pizza_id, function(res) {
        cb(res);
    });
  },
 // delete: function(condition, cb) {
 //   orm.delete("pizzas", condition, function(res) {
 //     cb(res);
 //   });
 // }
};

// Export the database functions for the controller (catsController.js).
module.exports = pizza;