var express = require("express");

var router = express.Router();

// Import the model (cat.js) to use its database functions.
// var cat = require("../models/cat.js");

var products = [{
        name: "banana",
        price: 15,
        quantity: 78,
        category: "fruits",
        description: "banana is the best fruit that Dragos likes",
        imgUrl: "",
        productId: 1
    },
    {
        name: "apple",
        price: 15,
        quantity: 78,
        category: "fruits",
        description: "banana is the best fruit that Dragos likes",
        imgUrl: "",
        productId: 2
    },
    {
        name: "strawberies",
        price: 15,
        quantity: 78,
        category: "fruits",
        description: "banana is the best fruit that Dragos likes",
        imgUrl: "",
        productId: 3
    }
];

var product = {
    all: function (cb) {
        cb();
    },
    crate: function (cb) {
        cb();
    },
    update: function (cb) {
        cb();
    },
    delete: function (cb) {
        cb();
    },

};
// Create all our routes and set up logic within those routes where required.
router.get("/", function (req, res) {
    product.all(function () {

        res.render("index");
    });
});


// Create all our routes and set up logic within those routes where required.
router.get("/products", function (req, res) {
    product.all(function () {
        console.log("I am working")
        var hbsObject = {
            products: products
        };

        res.render("products", hbsObject);
    });
});


router.post("/api/products", function (req, res) {
    product.create([
        "name", "sleepy"
    ], [
        req.body.name, req.body.sleepy
    ], function (result) {
        // Send back the ID of the new quote
        res.json({
            id: result.insertId
        });
    });
});

router.put("/api/products/:id", function (req, res) {
    var condition = "id = " + req.params.id;

    console.log("condition", condition);

    product.update({
        sleepy: req.body.sleepy
    }, condition, function (result) {
        if (result.changedRows === 0) {
            // If no rows were changed, then the ID must not exist, so 404
            return res.status(404).end();
        } else {
            res.status(200).end();
        }
    });
});

router.delete("/api/products/:id", function (req, res) {
    var condition = "id = " + req.params.id;

    console.log("condition", condition);

    product.delete("cats", condition, function (result) {
        console.log(result);
        if (result.affectedRows === 0) {
            // If no rows were changed, then the ID must not exist, so 404
            return res.status(404).end();
        } else {
            res.status(200).end();
        }
    });
});

// Export routes for server.js to use.
module.exports = router;