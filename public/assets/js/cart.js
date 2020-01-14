// Make sure we wait to attach our handlers until the DOM is fully loaded.
$(function () {
    $("#add-to-cart").on("click", function (event) {
        event.preventDefault()
        console.log("i am finnalaly doin someting")
        var id = $(this).data("id");
        var newOrder = $(this).data("neworder");

        var newOrderState = {
            order: newOrder
        };

        // Send the PUT request.
        $.ajax("/api/cart/" + id, {
            type: "PUT",
        }).then(
            function () {
                // Reload the page to get the updated list
                location.reload();
            }
        );
    });

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
