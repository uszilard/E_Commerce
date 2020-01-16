// Make sure we wait to attach our handlers until the DOM is fully loaded.
$(function () {
    $(".add-to-cart").on("click", function (event) {
        event.preventDefault()
        console.log("i am finnalaly doin someting");
        //TODO: We need to work with this data attribute instead of creating a new one for each data item
        console.log($(this).data("stringified"));
        var id = $(this).data("id");
        var productToAdd = $(this).data("stringified");

        var cart = JSON.parse(localStorage.getItem("cart"));
        console.log(cart)
        if (cart === null) {
            console.log("hello")
            cart = [productToAdd];
        } else {
            console.log("hi")
            cart.push(productToAdd);

        };
        localStorage.setItem("cart", JSON.stringify(cart))
    });

    $(".delete-from-cart").on("click", function (event) {
        event.preventDefault()
        console.log("i am finnalaly doin someting")
        var id = $(this).data("id");
        console.log("id", id);
        var cart = JSON.parse(localStorage.getItem("cart"));
        console.log(cart)

        var newArr = cart.filter(element => element.id !== id);
        console.log(newArr);
        localStorage.setItem("cart", JSON.stringify(newArr))

    }
    )

    $(".create-form").on("check-out", function (event) {
        // Make sure to preventDefault on a submit event.
        event.preventDefault();

        var newOrder = {
            name: $("#ca").val().trim(),

        };

        // Send the POST request.
        $.ajax("/api/cart", {
            type: "POST",
            data: newOrder
        }).then(
            function () {
                console.log("created new order");
                // Reload the page to get the updated list
                location.reload();
            }
        );
    });

    $(".delete-order").on("click", function (event) {
        var id = $(this).data("id");

        // Send the DELETE request.
        $.ajax("/api/cart/" + id, {
            type: "DELETE"
        }).then(
            function () {
                console.log("deleted order", id);
                // Reload the page to get the updated list
                location.reload();
            }
        );
    });
});

// Make sure we wait to attach our handlers until the DOM is fully loaded.
$(function () {
    $(".change-cart").on("click", function (event) {
        var id = $(this).data("id");
        var newProduct = $(this).data("newproduct");



        // Send the PUT request.
        $.ajax("/api/cart" + id, {
            type: "PUT",
        }).then(
            function () {
                // Reload the page to get the updated list
                location.reload();
            }
        );
    });

    $(".create-form").on("click", function (event) {
        // Make sure to preventDefault on a submit event.
        event.preventDefault();

        var newProduct = {
            name: $("#ca").val().trim(),

        };

        // Send the POST request.
        $.ajax("/api/products", {
            type: "POST",
            data: newProduct
        }).then(
            function () {
                console.log("created new product");
                // Reload the page to get the updated list
                location.reload();
            }
        );
    });

    $(".delete-product").on("click", function (event) {
        var id = $(this).data("id");

        // Send the DELETE request.
        $.ajax("/api/products/" + id, {
            type: "DELETE"
        }).then(
            function () {
                console.log("deleted product", id);
                // Reload the page to get the updated list
                location.reload();
            }
        );
    });
});