// Make sure we wait to attach our handlers until the DOM is fully loaded.
$(function () {
    $(".").on("", function (event) {
        var id = $(this).data("id");
        var  = $(this).data("");

        var = {
            :
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

$(".create-form").on("submit", function (event) {
    // Make sure to preventDefault on a submit event.
    event.preventDefault();

    var newProduct = {
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
