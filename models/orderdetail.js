var orderdetail = {
    all: function (cb) {
        orm.all("orderdetails", function (res) {
            cb(res);
        });
    },
    // The variables cols and vals are arrays.
    create: function (cols, vals, cb) {
        orm.create("orderdetails", cols, vals, function (res) {
            cb(res);
        });
    },
    update: function (objColVals, condition, cb) {
        orm.update("orderdetails", objColVals, condition, function (res) {
            cb(res);
        });
    },
    delete: function (condition, cb) {
        orm.delete("orderdetails", condition, function (res) {
            cb(res);
        });
    }
};

// Export the database functions for the controller (catsController.js).
module.exports = orderdetail;