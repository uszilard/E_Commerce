// Import the ORM to create functions that will interact with the database.
var orm = require("../config/orm.js");

var product = {
    all: function (cb) {
        orm.all("products", function (res) {
            cb(res);
        });
    },
    // The variables cols and vals are arrays.
    create: function (cols, vals, cb) {
        orm.create("products", cols, vals, function (res) {
            cb(res);
        });
    },
    update: function (objColVals, condition, cb) {
        orm.update("products", objColVals, condition, function (res) {
            cb(res);
        });
    },
    delete: function (condition, cb) {
        orm.delete("products", condition, function (res) {
            cb(res);
        });
    }
};
var order = {
    all: function (cb) {
        orm.all("orders", function (res) {
            cb(res);
        });
    },
    // The variables cols and vals are arrays.
    create: function (cols, vals, cb) {
        orm.create("orders", cols, vals, function (res) {
            cb(res);
        });
    },
    update: function (objColVals, condition, cb) {
        orm.update("orders", objColVals, condition, function (res) {
            cb(res);
        });
    },
    delete: function (condition, cb) {
        orm.delete("orders", condition, function (res) {
            cb(res);
        });
    }
};

// Export the database functions for the controller (catsController.js).
module.exports = product;
module.exports = order;

// question - can i put the order thing in theproduct.js file or should I create an extra file for that ?