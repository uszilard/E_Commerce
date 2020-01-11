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
    console.log("query was done")

    product.all(function (products) {
        console.log(products)
        res.render("allproducts", {
            products: products
        })
    });
});


router.get("/products/:id", function (request, response) {

    product.selectByCol(
        "productId",
        request.params.id,
        function (result) {
            console.log(result)
            response.send(result)
        }
    );
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
    var condition = "productID = " + req.params.id;

    console.log("condition", condition);

    product.update(
        req.body, condition,
        function (result) {
            if (result.changedRows === 0) {
                // If no rows were changed, then the ID must not exist, so 404
                return res.status(404).end();
            } else {
                res.status(200).end();
            }
        });
});

router.delete("/api/products/:id", function (req, res) {
    var condition = "productID = " + req.params.id;

    console.log("condition", condition);

    product.delete(condition, function (result) {
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