var customer = require("../models/customer.js")


module.exports = function (app) {
    app.get("/cart", function (request, response) {
        response.render("cart")
    })

    app.get("/checkout", function (req, res) {
        console.log("query for customer was done")

        customer.create(function (customers) {
            console.log(customers)
            res.render("checkout", {
                customers: customers
            })
        });
    });

    app.post("/api/checkout", function (req, res) {
        console.log("this is the request body", req.body)
        customer.create([
            "contactLastName", "contactFirstName", "phone", "addressLine1", "addressLine2", "city", "state", "postalCode", "country"
        ], [
            req.body.contactLastName, req.body.contactFirstName, req.body.phone, req.body.addressLine1, req.body.addressLine2, req.body.city, req.body.state, req.body.postalCode, req.body.country
        ], function (result) {
            // Send back the ID of the new order
            console.log(result)
            res.json({
                id: result.insertId
            });
        });
    });

};



// Export routes for server.js to use.