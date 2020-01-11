var express = require("express");
var product = require("../models/product")
var router = express.Router();


// Create all our routes and set up logic within those routes where required.
router.get("/", function (req, res) {
    product.all(function () {

        res.render("index");
    });
});

// Create all our routes and set up logic within those routes where required.
router.get("/products", function (req, res) {
    product.all(function (data) {
        console.log(data + "I am working")
        var hbsObject = {
            products: data
        };

        res.render("allproducts", hbsObject);
    });
});


router.post("/api/products", function (req, res) {
    console.log(req.body)
    product.create([
        "productName", "productCategory", "productDescription", "quantityInStock", "price"
    ], [
        req.body.productName, req.body.productCategory, req.body.productDescription, req.body.quantityInStock, req.body.price
    ], function (result) {
        // Send back the ID of the new quote
        console.log(result)
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

    product.delete("products", condition, function (result) {
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