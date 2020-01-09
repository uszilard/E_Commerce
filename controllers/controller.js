var express = require("express");
var orm = require("orm");

var router = express.Router();


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

// Create all our routes and set up logic within those routes where required.
router.get("/", function (req, res) {
    orm.all(function () {

        res.render("index");
    });
});


// Create all our routes and set up logic within those routes where required.
router.get("/products", function (req, res) {
    orm.all(function () {
        console.log("I am working")
        var hbsObject = {
            products: products
        };

        res.render("allproducts", hbsObject);
    });
});


router.post("/api/products", function (req, res) {
    orm.create([
        "name", ""
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

    orm.update({
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

    orm.delete("cats", condition, function (result) {
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