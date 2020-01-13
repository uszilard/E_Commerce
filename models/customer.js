var orm = require("../config/orm.js");

var customer = {

    // The variables cols and vals are arrays.
    create: function (cols, vals, cb) {
        orm.create("customers", cols, vals, function (res) {
            cb(res);
        });
    }

};

// Export the database functions for the controller (catsController.js).
module.exports = customer;